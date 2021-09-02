import Head from 'next/head';

export default function Static({meats, date}) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                api called: {date}<br />
                cdn test 24-8 11:08 build
                <ul>
                    {meats.map((meat, i) => 
                        <li key={i}>{meat}</li>
                    )}
                </ul>
            </div>
        </>
    )
}

// static site generation...
export async function getStaticProps() {
    const res = await fetch('https://baconipsum.com/api/?type=meat-and-filler')
    const meats = await res.json()
    const now = new Date();

    return {
        props: {
            meats,
            date: `${now.toLocaleDateString()} - ${now.toLocaleTimeString()}`
        },
        revalidate: 10
    }
}