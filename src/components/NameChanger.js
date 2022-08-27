import { useRef } from "react";

export const NameChanger = ({ pet, setPet }) => {

  const nameInputField = useRef()

  const changeName = () => {
    setPet({
      ...pet,
      name: nameInputField.current.value.trim()
    })
  }
  return (

      <div className='flexCol petElement'>
        <div className='flexCol paddingMd justifyContentCenter'>
          <h2 style={{ textAlign: 'center' }}>Please choose your pet's name</h2>
        </div>
        <div className='flexCol paddingMd justifyContentCenter'>
          <input
            ref={nameInputField}
            style={{ 
              textAlign: 'center', 
              backgroundColor: 'transparent', 
              borderBottom: 'solid black 0.001em',
             }}
            className='paddingMd marginY' />
          <button className='nameButton paddingMd marginY' onClick={changeName}>Set Name</button>
        </div>
      </div>
  );
}