import { useRef } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './New.css';

export default function New() {
  const triggerButtonRef = useRef(null);

  const openPopup = () => {
    triggerButtonRef.current.click();
  };

  return (
    <Popup
      trigger={
        <button
          ref={triggerButtonRef}
          className="button text-white fixed z-[800] rounded-full bg-violet-700 bottom-12 md:bottom-8 md:scale-125 font-Para font-extrabold w-fit py-2 px-6 left-1/2 transform -translate-x-1/2"
        >
          THANK YOU 🙏
        </button>
      }
      modal
      nested
      defaultOpen
      onOpen={openPopup}
    >
      {close => (
        <div className="modal-overlay z-[2000] md:scale-150 -translate-y-1/2 font-Para font-extrabold w-fit py-2 px-6 left-1/2 transform -translate-x-1/2" onClick={close}>
          <div className="modal bg-violet-900 md:w-[60%] px-12 py-4 rounded-3xl flex flex-col items-center">
            <button className="close" onClick={close}>
              &times;
            </button>
            <h1 className="text-sm md:text-xl uppercase text-center font-extrabold font-Para text-white">Thank you for making Startup Weekend 2024 exceptional!</h1>
            <h1 className="text-sm md:text-xl mt-4 text-center font-light font-Para text-white">SEE YOU NEXT YEAR !</h1>
            {/* <EventInfo title="SHARK TANK" link="https://unstop.com/competitions/shark-tank-e-summit-24-dtu-new-delhi-869828" />
            <EventInfo title="EXECUTE 3.0" link="/Ex" />
            <EventInfo title="Autodesk Design Challange" link="https://unstop.com/hackathons/autodesk-product-design-challaenge-e-summit-24-dtu-new-delhi-873000" />
            <EventInfo title="B Plan" link="https://unstop.com/competitions/b-plan-e-summit-24-dtu-new-delhi-875437" /> */}
          </div>
        </div>
      )}
    </Popup>
  );
}