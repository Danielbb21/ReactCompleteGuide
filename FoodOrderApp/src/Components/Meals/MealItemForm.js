import styled from 'styled-components';
import Button from '../UI/Button';
import Input from '../UI/Input';

const MealItemForm = (props) =>{
    return (
        <form>
            <Input label = "Amount" input={{ id: 'Amount' + Math.random().toString(), type: 'number', min:'1', max: '5', defaultValue: '1'}}/>
            <Button>Add +</Button>
        </form>
    )
}

export default MealItemForm;