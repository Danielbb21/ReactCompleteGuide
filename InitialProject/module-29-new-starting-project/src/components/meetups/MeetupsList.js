import MeetupItem from "./MeetupsItem"


const MeetupList = (props) => {
    console.log('props',props.itens);

    return (
        <>
            {props.itens.map(meetup => {
                return (
                    <li key={meetup.id} id={meetup.id} ><MeetupItem onDelete={props.onDelete} id={meetup.id} title={meetup.title} description={meetup.description} image={meetup.image} /></li>
                );
            })}
        </>
    )
}

export default MeetupList;