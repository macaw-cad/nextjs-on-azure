import styles from '../styles/Home.module.css'

export default function Static({quote, date}) {
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

// static site generation...
export async function getStaticProps() {
    const res = await fetch('https://api.quotable.io/random');
    const quote = await res.json();
    const now = new Date();

    return {
        props: {
            quote: quote,
            date: `${now.toLocaleDateString()} - ${now.toLocaleTimeString()}`,
            revalidate: 55
        }
    }
}