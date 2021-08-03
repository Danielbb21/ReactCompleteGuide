import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector(state => state.counter.counter);
  const showCounter = useSelector(state => state.counter.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toogleCounter())
  };

  const onIncrementHandler = () => {
    dispatch(counterActions.increment());
  }

  const onDecrementHandler = () => {
    dispatch(counterActions.decrease());
  }
  const onIncremenBy5tHandler = () => {
    dispatch(counterActions.increase(5));
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={onIncrementHandler}>Increment</button>
        <button onClick={onIncremenBy5tHandler}>Increment by 5</button>
        <button onClick={onDecrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
