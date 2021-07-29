import styled from 'styled-components';
import MealItemForm from './MealItemForm';


const MealWrapper = styled.div`
     display: flex;
     flex-direction: column;    
  justify-content: space-between;
  margin: 1rem;
  padding-bottom: 0.5rem;
  

    & span{
        margin: 0 0 0.25rem 0;
        

    }

     .price:hover{
        color: red;
    }
`;


const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`
    return (
        <li style={{display:'flex', borderBottom: '1px solid #ccc', justifyContent: 'space-between' }}>
            <MealWrapper>
                <span>{props.name}</span>
                <div>{props.info}</div>
                <div className="price">{price}</div>
            </MealWrapper>
            <div>
            <MealItemForm />
            </div>
        </li>

    )
}

export default MealItem;