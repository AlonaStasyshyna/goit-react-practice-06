import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'redux/users/usersOperations';
import { selectUsers } from 'redux/users/usersSelectors';
import { Button } from './Button/Button';
import { EmailFilterUsers } from './EmailFilterUsers/EmailFilterUsers';
import { UsersList } from './UsersList/UsersList';

export const App = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  
  const handleClick = () => {
    dispatch(fetchUsers());
  };

  return (
    <>
      {users.length > 0 ? (
        <>
          <EmailFilterUsers />
          <UsersList />
        </>
      ) : (
        <Button text="Show users" type="button" clickHandler={handleClick} />
      )}
    </>
  );
};
