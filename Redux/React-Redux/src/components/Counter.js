import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/slices/counter-slice';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const isHidden = useSelector(state => state.counter.isHidden);

  const incrementCounterHandler = () => dispatch(counterActions.increment());
  const decrementCounterHandler = () => dispatch(counterActions.decrement());
  const increaseByFiveHandler = () => dispatch(counterActions.increase({ value: 5 }));
  const toggleCounterHandler = () => dispatch(counterActions.toggle());

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {
        !isHidden && <div>
          <div className={classes.value}>-- {counter} --</div>
          <div>
            <button onClick={incrementCounterHandler}>Increment</button>
            <button onClick={increaseByFiveHandler}>Increase by 5</button>
            <button onClick={decrementCounterHandler}>Decrement</button>
          </div>
        </div>
      }
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;


// TODO when using: import COmponent from react and connect from react-redux
// class Counter extends Component {

//   incrementCounter() {
//     this.props.increment();
//   }

//   decrementCounter() {
//     this.props.decrement();
//   }

//   toggleCounter() {

//   }

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>-- {this.props.counter} --</div>
//         <div>
//           <button onClick={this.incrementCounter.bind(this)}>Increment</button>
//           <button onClick={this.decrementCounter.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounter.bind(this)}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapReduxStateToProps = reduxState => {
//   return {
//     counter: reduxState.counter
//   }
// }

// const mapDisplatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'INCREMENT' }),
//     decrement: () => dispatch({ type: 'DECREMENT' })
//   }
// }

// export default connect(mapReduxStateToProps, mapDisplatchToProps)(Counter);
