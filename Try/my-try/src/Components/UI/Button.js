import styled  from "styled-components";

const ButtonWrap = styled.button`
    width: 150px;
    height:25px;
    background: lightblue;
    border-radius:10px;
    border: none;
`;
const Button = (props) =>{
    console.log(props);
    return(
        <ButtonWrap type = {props.type}>{props.children}</ButtonWrap>
    )
}

export default Button;