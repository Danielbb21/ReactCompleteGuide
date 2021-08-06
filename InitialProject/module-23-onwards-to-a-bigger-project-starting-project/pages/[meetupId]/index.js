
import MeetUpDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from 'mongodb';
import Head from "next/head";
function MeetUpDeatils(props) {
    console.log('PROSPS ', props);
    return (
        <>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta name='description' content='Browser pgae' />
            </Head>
            <MeetUpDetail image={props.meetupData.image} title={props.meetupData.title}
                address={props.meetupData.address} description={props.meetupData.description}
            />
        </>
    );
}

export async function getStaticPaths() {


    const client = await MongoClient.connect('mongodb+srv://next:teste@cluster0.mhbpd.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
    return {
        fallback: 'blocking',
        paths: meetups.map(meetup => ({ params: { meetupId: meetup._id.toString() } })),


    }
}

export async function getStaticProps(context) {
    //fetch data form a single props
    const client = await MongoClient.connect('mongodb+srv://next:teste@cluster0.mhbpd.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetupId = context.params.meetupId;
    console.log(meetupId);
    const meetups = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });
    // const singleMeetUp = meetups.filter((met) => met._id.toString() === meetupId.toString());
    console.log('MEETups', meetups);

    console.log(meetupId);
    return {
        props: {
            meetupData: {
                id: meetups._id.toString(),
                title: meetups.data.title,
                address: meetups.data.address,
                image: meetups.data.image,
                description: meetups.data.description
            }
        }
    };
}

export default MeetUpDeatils;