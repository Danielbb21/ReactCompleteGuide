import styled from 'styled-components';

const ButtonWraper = styled.button`
    background: lightblue;
    width: 150px;
    padding: 10px;
    text-align: center;
    border: none;
    border-radius: 16px;

    @media(max-width: 700px) {
   width: calc(150px - 2vw);
  }
`;


const Button = (props) => {
    return (
        <ButtonWraper type={props.type || 'button'} onClick={props.onClick}>{props.children}</ButtonWraper>
    );
}

export default Button;