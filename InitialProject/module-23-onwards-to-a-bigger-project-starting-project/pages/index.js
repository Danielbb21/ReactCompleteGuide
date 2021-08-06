import { MongoClient } from 'mongodb';
import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";
import Head from 'next/head';

function HomePage(props) {


    return (
        <>
        <Head>
            <title>React Meetups</title>
            <meta name= 'description' content = 'Browser pgae'/>
        </Head>
            <MeetupList meetups={props.meetups} />
        </>

    )
}

// export function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     };
// }

export async function getStaticProps() {
    //fetch data from a API

    const client = await MongoClient.connect('mongodb+srv://next:teste@cluster0.mhbpd.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();
    console.log(meetups);
    client.close();
    return {
        props: {
            meetups: meetups.map(meetups => ({
                title: meetups.data.title,
                address: meetups.data.address,
                image: meetups.data.image,
                id: meetups._id.toString()
            }))
        },
        revalidate: 10
    };
}

export default HomePage;