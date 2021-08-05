import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";


const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A first Meetup',
        image: 'https://cdn.muenchen-p.de/.imaging/stk/responsive/image980/dms/shutterstock-2016/sehenswuerdigkeiten/muenchen-panorama-hp/document/muenchen-panorama-hp.jpg',
        address: 'Some addres 5, 12345 some city',
        description: 'this is a first meetup'
    },
    {
        id: 'm2',
        title: 'A second Meetup',
        image: 'https://cdn.muenchen-p.de/.imaging/stk/responsive/image980/dms/shutterstock-2016/sehenswuerdigkeiten/muenchen-panorama-hp/document/muenchen-panorama-hp.jpg',
        address: 'Some addres 5, 12345 some city',
        description: 'this is a second meetup'
    },

];
function HomePage() {
    return (

        <MeetupList meetups={DUMMY_MEETUPS} />

    )
}

export default HomePage;