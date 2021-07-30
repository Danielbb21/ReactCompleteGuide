import { useContext } from 'react';
import styled from 'styled-components';
import CartContext from '../../store/Cart-context';
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

    const ctx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`
    const addToCartHandler = amount => {
        const priceNumber = +price.replace('$', '')
        
        const item = {
            price: +(priceNumber * amount).toFixed(2),
            totalAmount: amount
        }
        console.log('item passed', item);
           ctx.addItem({
               id:props.id,
               name: props.name,
               amount: amount,
               price: props.price
           });
    }
    return (
        <li style={{ display: 'flex', borderBottom: '1px solid #ccc', justifyContent: 'space-between' }}>
            <MealWrapper >
                <span>{props.name}</span>
                <div>{props.info}</div>
                <div className="price">{price}</div>
            </MealWrapper>
            <div>
                <MealItemForm onAddToCart={addToCartHandler} />
            </div>
        </li>

    )
}

export default MealItem;