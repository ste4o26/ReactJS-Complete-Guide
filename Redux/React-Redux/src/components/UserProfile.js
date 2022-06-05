import classes from './UserProfile.module.css';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const username = useSelector(state => state.auth.username);

  return (
    <main className={classes.profile}>
      <h2>{username}'s Profile</h2>
    </main>
  );
};

export default UserProfile;
