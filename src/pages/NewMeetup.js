import NewMeetupForm from "../components/meetups/NewMeetupForm"
import React from "react"
import { useNavigate } from 'react-router-dom'

function NewMeetupsPage() {
  const navigate = useNavigate()

  function addMeetupHandler(meetupData) {
    fetch('https://learn-react-app-e8b90-default-rtdb.firebaseio.com/meetups.json', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      navigate('/')
    })
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
  )
}

export default NewMeetupsPage