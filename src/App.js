import './App.css';
import { useState } from 'react';


function App() {
const [selectedSpeaker, setSelectedSpeaker] = useState(null);



  const speakers = [
    {
     id: 118840,
     name: "Clark",
     image: "https://i.pravatar.cc/50?u=118840",
     topic: "The History of Abortion"
    },
    {
     id: 9333999,
     name: "Sarah",
     image: "https://i.pravatar.cc/50?u=9333999",
     topic: "The Journey of the Human Race"
    },
    {
     id: 499476,
     name: "Anthony",
     image: "https://i.pravatar.cc/50?u=499483",
     topic: "The Theory of God"
    },
    {
     id: 599475,
     name: "Sam",
     image: "https://i.pravatar.cc/50?u=599475",
     topic: "The intentions of Men"
    },
    {
     id: 499888,
     name: "Gold",
     image: "https://i.pravatar.cc/50?u=499888",
     topic: "The race through Womanhood"
    },

    ];

    function handleChooseSpeaker(speakerId) {
      setSelectedSpeaker((prevSpeaker) => (prevSpeaker === speakerId ? null : speakerId));
    }
  return (
    <div className='grid grid-cols-2'>
      <SpeakersList speakers={speakers} 
      chooseSpeaker={handleChooseSpeaker} 
      />
      <ShowSpeaker speaker={speakers.find((speaker) => speaker.id === selectedSpeaker)} />
    </div>
  );
}
export default App;



function SpeakersList({ speakers, chooseSpeaker }) {


  return(
    <div className='border-4 border-black-100'>
      { speakers.map((speaker) => (
         <div key={speaker.id} className='flex justify-between items-center'>
          <div className='flex gap-2 mb-2 '>
          <div>
            <img src={speaker.image} alt=''/>
            </div>
          <div className=''>
            <h3>{speaker.name}</h3>
            <p>{speaker.topic}</p>
            </div>
         </div>
         <div className=''><button className='bg-blue-800 rounded-md p-1 text-white' onClick={() =>chooseSpeaker(speaker.id)}>Choose Speaker</button></div>
         </div>
      ))
     
}
    </div>
  )
}




function ShowSpeaker({ speaker }) {
  return (
    <div className='border-4 border-black-100'>
      {speaker ? (
        <div className='flex items-center justify-center min-h-full flex-col p-4'>
          <img className='rounded-full' src={speaker.image} alt='' />
          <h3>{speaker.name}</h3>
          <p>Speaking on</p>
          <p>{speaker.topic}</p>
        </div>
      ) : (
        <div className='flex items-center justify-center min-h-full p-4'>
          <p>No speaker selected</p>
        </div>
      )}
    </div>
  );
}
