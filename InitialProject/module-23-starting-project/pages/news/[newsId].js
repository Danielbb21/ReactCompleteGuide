import { useRouter } from 'next/router'


function NewsPage() {
    const router = useRouter();

    const newsId = outer.query.newsId;

    return <h1>The Detail page</h1>
}

export default NewsPage