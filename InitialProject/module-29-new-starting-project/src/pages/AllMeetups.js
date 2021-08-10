import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupsList";

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
        id: 'm2',
        title: 'This is a second meetup',
        image:
            'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a second, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
];

const AllMeetupsPage = () => {
    const [meetups, setMeetups] = useState([]);
    console.log(meetups);
    useEffect(()=>{
        setMeetups(DUMMY_MEETUPS);
    }, []);

    const deleteMeetup = (meetupId) =>{
        console.log(meetupId);
        setMeetups((previusState)=>previusState.filter(meetup => meetup.id !== meetupId));
    };

    return (
        <>
            <section>
                <ul>
                   <MeetupList itens = {meetups} onDelete = {deleteMeetup}/>
                </ul>
            </section>

        </>
    )
}

export default AllMeetupsPage;