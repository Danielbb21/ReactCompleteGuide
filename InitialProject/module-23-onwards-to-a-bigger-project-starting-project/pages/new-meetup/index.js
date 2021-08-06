import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from 'next/router';
import Head from "next/head";

function NewMeetUpPage() {
    const router = useRouter();
    async function onMeetupHandler(enteredMeetupData) {
        console.log(enteredMeetupData);

        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
        router.push('/');
    }
    return (
        <>
            <Head>
                <title>Add new Meetups</title>
                <meta name='description' content='Browser pgae' />
            </Head>
            <NewMeetupForm onAddMeetup={onMeetupHandler} />
        </>
    );
}

export default NewMeetUpPage;