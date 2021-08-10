const MeetupItem = (props) => {
    console.log('props2', props);
    const remove = () =>{
        console.log('props', props.id);
        props.onDelete(props.id);
    }
    return (
        <>
            <div onClick = {remove}>
                <h2>{props.title}</h2>
                <img src={props.image} alt={props.title} />
                <p>{props.description}</p>
            </div>
        </>

    )
};

export default MeetupItem;