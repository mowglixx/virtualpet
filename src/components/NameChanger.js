import { useRef } from "react";

export const NameChanger = ({pet, setPet}) => {

    const nameInputField = useRef()

    const changeName = () => {
      setPet({
        ...pet,
        name: nameInputField.current.value.trim()
      })
    }
    return (
      <div className='toy flexCol justifyContentCenter'>
        <div className='toyInnerShine'>

          <div className={'flexCol'}>

            <h2 className='petHeader' style={{ textAlign: 'center' }}><span className='Chimtembo'>Chimtembo</span> PetBoy</h2>
            <div className='flexCol'>
              <div className='flexCol paddingMd justifyContentCenter'>
                <h2 style={{ color: 'white',textAlign: 'center' }}>Please choose your pet's name</h2>
              </div>
              <div className='flexCol padding'>
                <input
                  ref={nameInputField}
                  style={{ textAlign: 'center' }}
                  className='paddingMd marginY' />
                <button className='paddingMd marginY' onClick={changeName}>Set Name</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }