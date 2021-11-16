import styles from '../styles/Home.module.css'

function Page({ quote, date }) {
    return (
        <div className={styles.container}>
            <strong>Api called:</strong> {date}
           
           <br />
           <br />
               <strong>{quote.author}</strong>
               {quote.content}
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch('https://api.quotable.io/random');
    const quote = await res.json();
    const now = new Date();

    return {
        props: {
            quote: quote,
            date: `${now.toLocaleDateString()} - ${now.toLocaleTimeString()}`
        }
    }
}

export default Page