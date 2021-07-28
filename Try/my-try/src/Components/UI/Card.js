import React from 'react';
import styled from 'styled-components';

const CardWraper = styled.div `
    background: white;
    width:50%;
    margin: 2px auto;
    border-radius: 10px;
`;
const Card = (props) =>{
    return <CardWraper>{props.children}</CardWraper>
}

export default Card;