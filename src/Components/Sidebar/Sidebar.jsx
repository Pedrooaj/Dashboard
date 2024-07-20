import styled from 'styled-components';
import { useState } from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";



const SidebarContainer = styled.section`
    max-width: 20%;
    height: 100vh;

    .Menu-Button {
      display: flex;
      align-items: center;

    }

    .Menu-Title {
      color: yellow;
      margin-left: 20px;
      font-size: 1.7rem;
    }

  

    ul{
      height: 85%;
      list-style: none;
      padding: 0;
      width: 100%;
      display: flex;
      gap: 30px;
      justify-content: space-between;
      flex-direction: column;
      align-items: start;
    }
    ul > li {
      display: flex;
      align-items: center;
    }
    ul > li > button {
      background-color: darkslategrey;
      color: white;
      width: 56px;
      height: 56px;
      border: none;
      scale: 0.7;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      cursor: pointer;
      transition: 0.2s;
    }
    ul > li > button:hover {
      background: #8f44fd;
    }

    .Logout:hover {
      background-color: red;
      opacity: 0.8;
    }

    .burger {
  scale: 1.2;
  --gap: 5px;
  --height-bar: 2px;
  --pos-y-bar-one: 0;
  --pos-y-bar-three: 0;
  --scale-bar: 1;
  --rotate-bar-one: 0;
  --rotate-bar-three: 0;
  width: 25px;
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  cursor: pointer;
  position: relative;
}

.burger .bar {
  position: relative;
  height: var(--height-bar);
  width: 100%;
  border-radius: 0.5rem;
  background-color: #f9f9f9;
}

.burger .bar--1 {
  top: var(--pos-y-bar-one);
  transform: rotate(var(--rotate-bar-one));
  transition: top 200ms 100ms, transform 100ms;
}

.burger .bar--2 {
  transform: scaleX(var(--scale-bar));
  transition: transform 150ms 100ms;
}

.burger .bar--3 {
  bottom: var(--pos-y-bar-three);
  transform: rotate(var(--rotate-bar-three));
  transition: bottom 200ms 100ms, transform 100ms;
}

.is-closed.burger > .bar--1 {
  transition: top 200ms, transform 200ms 100ms;
}

.is-closed.burger .bar--3 {
  transition: bottom 200ms, transform 200ms 100ms;
}

.is-closed.burger {
  --pos-y-bar-one: calc(var(--gap) + var(--height-bar));
  --pos-y-bar-three: calc(var(--gap) + var(--height-bar));
  --scale-bar: 0;
  --rotate-bar-one: 45deg;
  --rotate-bar-three: -45deg;
}
  



`

const MenuButton = styled.button`
    background: darkslategrey;
    border: 0;
    width: 56px;
    height: 56px;
    display: grid;
    place-items: center;
    cursor: pointer;
    padding: 0;
    scale: 0.7;
    border-radius: 8px;
    overflow: hidden;
    transition: 0.175s;

  &:hover {
    opacity: 1;
    background: #8f44fd;
  }
`

const Bar = styled.aside`
    height: 100vh;
    background-color: aqua;
    width: ${props => props.$open ? '100%' : '25%'};
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    transition: all 0.3s;
    white-space: nowrap;
    overflow: hidden;

    h1{
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 1.5rem;
      visibility: ${props => props.$open ? 'visible' : 'hidden'};
    }
`

const Sidebar = ({logout}) => {

  const [isOpen, setIsOpen] = useState(false)

  function onClickMenu() {
    setIsOpen(!isOpen)
  }

  return (
    <SidebarContainer >
      <Bar $open={isOpen}>
          <div className='Menu-Button'>
            <MenuButton onClick={() => onClickMenu()}>
              <span className={isOpen == false ? "burger" : "burger is-closed"}>
                <span className={isOpen == false ? 'bar bar--1' : 'bar bar--1 is-closed'} />
                <span className={isOpen == false ? 'bar bar--2' : 'bar bar--2 is-closed'} />
                <span className={isOpen == false ? 'bar bar--3' : 'bar bar--3 is-closed'} />
              </span>
            </MenuButton>
            <h1 className='Menu-Title'>Pedrooaj <IoLogoFirebase color='orangered' size={35} /></h1>
          </div>
          <ul>
            <li><button>
              <FaRegUserCircle size={25} />
            </button> <h1>Perfil</h1></li>
            <li><button onClick={() => logout()} className='Logout'>
              <RiLogoutBoxLine size={25} />
            </button><h1>Sair</h1></li>
          </ul>
      </Bar>
    </SidebarContainer>
  )
}

export default Sidebar