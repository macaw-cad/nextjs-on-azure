import { Configuration, Tokens, Auth } from "ordercloud-javascript-sdk";

(async function () {
  const clientId = process.env.NEXT_PUBLIC_OC_CLIENT_ID || "";
  const baseApiUrl = process.env.NEXT_PUBLIC_OC_BASE_API_URL;
  const scope = process.env.NEXT_PUBLIC_OC_SCOPE?.split(",");

  Configuration.Set({
    clientID: clientId,
    baseApiUrl: baseApiUrl,
    cookieOptions: { prefix: "hds-nextjs", path: "/" },
  });

  // @ts-ignore
  const authResponse = await Auth.Anonymous(clientId, scope || ([""] as ApiRole[]));

  Tokens.SetAccessToken(authResponse.access_token);
})();
