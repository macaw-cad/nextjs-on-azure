export default function Server({meats, date}) {
    return (
        <div>
            api called: {date}
            <ul>
                {meats.map((meat, i) => 
                    <li key={i}>{meat}</li>
                )}
            </ul>
        </div>
    )
}

// static site generation...
export async function getServerSideProps() {
    const res = await fetch('https://baconipsum.com/api/?type=meat-and-filler')
    const meats = await res.json()
    const now = new Date();

    return {
        props: {
            meats,
            date: `${now.toLocaleDateString()} - ${now.toLocaleTimeString()}`
        },
    }
}