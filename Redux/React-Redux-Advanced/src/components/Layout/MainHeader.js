import { useDispatch } from 'react-redux';

import { uiActions } from '../../store/slices/ui-slice';
import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  const dispatch = useDispatch();
  const toggleHandler = () => dispatch(uiActions.toggle());

  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onToggle={toggleHandler} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
