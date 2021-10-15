function Page({ meats, date }) {
    return (
        <div>
            api called: {date}
            {meats &&
                <ul>
                    {meats.map((meat, i) =>
                        <li key={i}>{meat}</li>
                    )}
                </ul>
            }
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch('https://baconipsum.com/api/?type=meat-and-filler')
    const meats = await res.json()
    const now = new Date();

    return {
        meats: meats,
        date: `${now.toLocaleDateString()} - ${now.toLocaleTimeString()}`
    }
    
}

export default Page