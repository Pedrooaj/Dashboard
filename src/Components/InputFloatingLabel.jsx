import styled from "styled-components"
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";
import { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";



const FloatingLabel = styled.div`
  position: relative;
  width: 55%;
  border: 2px solid #757575;
  border-radius: 7px;
  display: flex;
  justify-content: end;
  padding: 10px 5px;
  



  
  input {
    border: none;
    font-size: 16px;
    width: 100%;
    height: 100%;
    background-color: transparent;


    
    &:focus {
      background: transparent;
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
  }

  .icon{
    top: 8px;
    position: absolute;
    left: -32px;
  border-radius: 100%;
  border: 1px solid black;
  padding: 2px;
  color: blue;
  }

  .icon-user{
    top: 8px;
    position: absolute;
    left: -32px;
  border-radius: 100%;
  border: 1px solid black;
  padding: 2px;
  color: orange;
  }
`



const InputFloatingLabel = ({ type, onChange, label, thisPassword = false, className, thisEmail, thisUser }) => {
  const [thistVisibility, setVisibility] = useState(false);

  return (
    <FloatingLabel className={className}>
      {thisEmail ? <MdOutlineMailOutline size={20} className="icon" /> : thisUser ? <FaUser size={20} className="icon-user" /> : thisPassword ? <RiLockPasswordFill size={20} className="icon" /> : null}
      {

        thisPassword ?
          <>

            <input placeholder=" " type={thistVisibility ? "text  " : type} onChange={onChange} required />
            <label className="label">{label}</label>
            {thistVisibility ? <MdOutlineVisibility onClick={() => setVisibility(!thistVisibility)} size={25} className="visibility" /> : <MdOutlineVisibilityOff onClick={() => setVisibility(!thistVisibility)} size={25} className="visibility" />}
          </>
          :
          <>
            <input placeholder=" " type={type} onChange={onChange} required={thisEmail && thisPassword} />
            <label>{label}</label>
          </>

      }

    </FloatingLabel>

  )
}

export default InputFloatingLabel;