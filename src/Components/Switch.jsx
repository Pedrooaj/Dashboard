import React, { useState } from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';

const SwitchSpan = styled.span`
  display: inline-block;
  scale: 0.7;
`

const SwitchLabel = styled.label`
    display: block;
    width: 50px;
    height: 20px;
    padding: 3px;
    border-radius: 15px;
    border: 2px solid #4d4b4e;
    transition: 0.3s;

    &::after{
        content: "";
        display: inherit;
        width: 20px;
        height: 20px;
        border-radius: 12px;
        background: #4d4b4e;
        transition: 0.3s;
    }
`

const SwitchInput = styled.input`
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;
    z-index: 1;

    &:checked ~ ${SwitchLabel} {
        border-color: #8f44fd;
    }

    &:checked ~ ${SwitchLabel}::after {
        translate: 30px 0;
        background: #8f44fd;
    }

    &:disabled ~ ${SwitchLabel} {
        opacity: 0.35;
        cursor: not-allowed;
    }
`


const Switch = () => {
    const { isChecked, setIsChecked } = useContext(AuthContext);

    const handleChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <SwitchSpan>
            <SwitchInput type="checkbox" checked={isChecked} onChange={handleChange} />
            <SwitchLabel />
        </SwitchSpan>
    );
};

export default Switch;