import crypto from 'crypto';

const baseRequirePath = `${process.env.NEXT_BUILD_ROOT}`;

const CIPHER_ALGORITHM = `aes-256-gcm`,
    CIPHER_KEY_LENGTH = 32, // https://stackoverflow.com/a/28307668/4397028
    CIPHER_IV_LENGTH = 16, // https://stackoverflow.com/a/28307668/4397028
    CIPHER_SALT_LENGTH = 64

const PBKDF2_ITERATIONS = 100_000 // https://support.1password.com/pbkdf2/

const COOKIE_NAME_PRERENDER_BYPASS = `__prerender_bypass`
const COOKIE_NAME_PRERENDER_DATA = `__next_preview_data`
type __ApiPreviewProps = {
    previewModeId: string
    previewModeEncryptionKey: string
    previewModeSigningKey: string
}

function encryptWithSecret(secret: Buffer, data: string): string {
    const iv = crypto.randomBytes(CIPHER_IV_LENGTH)
    const salt = crypto.randomBytes(CIPHER_SALT_LENGTH)


    // https://nodejs.org/api/crypto.html#crypto_crypto_pbkdf2sync_password_salt_iterations_keylen_digest
    const key = crypto.pbkdf2Sync(
        secret,
        salt,
        PBKDF2_ITERATIONS,
        CIPHER_KEY_LENGTH,
        `sha512`
    )

    const cipher = crypto.createCipheriv(CIPHER_ALGORITHM, key, iv)
    const encrypted = Buffer.concat([cipher.update(data, `utf8`), cipher.final()])

    // https://nodejs.org/api/crypto.html#crypto_cipher_getauthtag
    const tag = cipher.getAuthTag()

    return Buffer.concat([
        // Data as required by:
        // Salt for Key: https://nodejs.org/api/crypto.html#crypto_crypto_pbkdf2sync_password_salt_iterations_keylen_digest
        // IV: https://nodejs.org/api/crypto.html#crypto_class_decipher
        // Tag: https://nodejs.org/api/crypto.html#crypto_decipher_setauthtag_buffer
        salt,
        iv,
        tag,
        encrypted,
    ]).toString(`hex`)
}

function isNotValidData(str: string): boolean {
    return typeof str !== 'string' || str.length < 16
}

export function setPreviewData<T>(
    // res: NextApiResponse<T>,
    data: object | string, // TODO: strict runtime type checking
    options: {
        maxAge?: number
    } & __ApiPreviewProps
): any[] {
    if (isNotValidData(options.previewModeId)) {
        throw new Error('invariant: invalid previewModeId')
    }
    if (isNotValidData(options.previewModeEncryptionKey)) {
        throw new Error('invariant: invalid previewModeEncryptionKey')
    }
    if (isNotValidData(options.previewModeSigningKey)) {
        throw new Error('invariant: invalid previewModeSigningKey')
    }

    const jsonwebtoken =
        require(`${baseRequirePath}/node_modules/next/dist/compiled/jsonwebtoken`); //as typeof import(`@nextjsonazure/jss-nextjs-app/node_modules/jsonwebtoken`)

    const payload = jsonwebtoken.sign(
        {
            data: encryptWithSecret(
                Buffer.from(options.previewModeEncryptionKey),
                JSON.stringify(data)
            ),
        },
        options.previewModeSigningKey,
        {
            algorithm: 'HS256',
            ...(options.maxAge !== undefined
                ? { expiresIn: options.maxAge }
                : undefined),
        }
    )

    // limit preview mode cookie to 2KB since we shouldn't store too much
    // data here and browsers drop cookies over 4KB
    if (payload.length > 2048) {
        throw new Error(
            `Preview data is limited to 2KB currently, reduce how much data you are storing as preview data to continue`
        )
    }

    const { serialize } =
        require(`${baseRequirePath}/node_modules/next/dist/compiled/cookie`);
    const previous = undefined;

    const cookies =
        [
            ...(typeof previous === 'string'
                ? [previous]
                : Array.isArray(previous)
                    ? previous
                    : []),
            serialize(COOKIE_NAME_PRERENDER_BYPASS, options.previewModeId, {
                httpOnly: true,
                sameSite: process.env.NODE_ENV !== 'development' ? 'none' : 'lax',
                secure: process.env.NODE_ENV !== 'development',
                path: '/',
                ...(options.maxAge !== undefined
                    ? ({ maxAge: options.maxAge })
                    : undefined),
            }),
            serialize(COOKIE_NAME_PRERENDER_DATA, payload, {
                httpOnly: true,
                sameSite: process.env.NODE_ENV !== 'development' ? 'none' : 'lax',
                secure: process.env.NODE_ENV !== 'development',
                path: '/',
                ...(options.maxAge !== undefined
                    ? ({ maxAge: options.maxAge })
                    : undefined),
            }),
        ]
    return cookies;
}