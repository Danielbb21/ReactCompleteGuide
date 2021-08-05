import NewMeetupForm from "../../components/meetups/NewMeetupForm";


function NewMeetUpPage() {
    function onMeetupHandler(enteredMeetupData) {
        console.log(enteredMeetupData);

    }
    return (
        <>
            <NewMeetupForm onAddMeetup={onMeetupHandler} />
        </>
    );
}

export default NewMeetUpPage;