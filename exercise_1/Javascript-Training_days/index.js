//all events array
const getAllEvents = () => {
    return ['Marathon', 'Triathalon', 'Decathalon'];
};

//selects EVENT at random from the array
const getRandomEvent = () => {
    const allEvents = getAllEvents();
    const event = allEvents[Math.floor(Math.random() * allEvents.length)];
    return event;
};

//returns a LIST of ACTIVITIES based on the event selected
const getEventActivities = event => {
    const allEvents = getAllEvents();
    if (!allEvents.includes(event)) {
        return null;
    }

    let activities;
    if (event === 'Marathon') {
        activities = ['Running'];
    } else if (event === 'Triathlon') {
        activities = ['Running', 'Cycling', 'Swimming'];
    } else if (event === 'Decathlon') {
        activities = ['Running', 'Hurdles', 'Javelin throw', 'Discus Throw', 'Shot put', 'High Jump'];
    }
    return activities.join(', ');
};

//returns the NUMBER OF DAYS to train based on the event selected
const getDaysToTrain = event => {
    const allEvents = getAllEvents();
    allEvents['Marathon', 'Triathlon', 'Decathlon'];
    if (!allEvents.includes(event)) {
        return null;
    }
    const eventTrainingTimes = { 'Marathon': 50, 'Triathlon': 100, 'Decathlon': 200 };
    return eventTrainingTimes[event];
};

const getEventMessage = () => {
    const myEvent = getRandomEvent();
    console.log('Your event is a ' + myEvent + '. Your event activities consist of ' + getEventActivities(myEvent) + '. You have ' + getDaysToTrain(myEvent) + ' days to train.');
}

getEventMessage();