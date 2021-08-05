import Link from 'next/link';

function NewsPage() {
    return (
        <>
            <h1>The News page</h1>
            <ul>
                <li><Link href='/news/nextjs-is-a-great-framework'>Next is a great frameword</Link> </li>
                <li>Sommeting else</li>
            </ul>
        </>
    );
}

export default NewsPage