import React, { useState } from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';

const SwitchContainer = styled.label`
 position: relative;
 width: 30px;
 height: 15px;
 border-radius: 20px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 background-color: white;
border: 1px solid gray;
 cursor: pointer;
`;

const SwitchInput = styled.input`
    visibility: hidden;

  &:checked + span {
    background-color: blue;

    left: 17px;

    &:before {
        left: 20px;
    }
  }


`
const Slider = styled.span`
    left: 2px;
    top: 3px;
    width: 10px;
    height: 10px;
    position: absolute;
    border-radius: 100%;
    border: round;
    background-color: #2196F3;
    z-index: 1;
    transition: 0.3s;

`;

const Switch = () => {
    const { isChecked, setIsChecked } = useContext(AuthContext);

    const handleChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <SwitchContainer>
            <SwitchInput type="checkbox" checked={isChecked} onChange={handleChange} />
            <Slider></Slider>
        </SwitchContainer>
    );
};

export default Switch;