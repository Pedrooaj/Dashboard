import styled from "styled-components"
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";
import { useState } from "react";


const FloatingLabel = styled.div`
  position: relative;
  width: 300px;
  border: 2px solid #757575;
  border-radius: 7px;
  display: block;
  padding: 10px 10px 10px 5px;

  
  input {
    border: none;
    font-size: 16px;
    width: 90%;
    background-color: transparent;

    
    &:focus {
      outline: none;
      & ~ label {
        top: -16px;
        font-size: 12px;
        color: #2196f3;
      }
    }
    &:not(:placeholder-shown) {
      & ~ label {
        top: -16px;
        font-size: 12px;
        color: #2196f3;
      }
    }
  }
  
  label {
    color: #999; 
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 0.2s ease all; 
  }



  .visibility{
    z-index: 1;
    opacity: 0.6;
    cursor: pointer;
    position: absolute;
    top: 10px;
    left: 280px;
  }

`



const InputFloatingLabel = ({ type, onChange, label, thisPassword = false }) => {
  const [thistVisibility, setVisibility] = useState(false);

  return (
    <FloatingLabel>
      {

        thisPassword ?
          <>
            <input placeholder=" " type={thistVisibility?"text  ":type} onChange={onChange} required />
            <label>{label}</label>
            {thistVisibility?<MdOutlineVisibility onClick={() => setVisibility(!thistVisibility)} size={25} className="visibility" />:<MdOutlineVisibilityOff onClick={() => setVisibility(!thistVisibility)} size={25} className="visibility" />}
          </>
          :
          <>
              <input placeholder=" " type={type} onChange={onChange} required />
              <label>{label}</label>
          </>

      }

    </FloatingLabel>

  )
}

export default InputFloatingLabel;