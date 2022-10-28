import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/users/usersSlice';

export const EmailFilterUsers = () => {
  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.target;
    setFilter(value);
    dispatch(changeFilter(value));
  };

  return (
    <label>
      Search users by email
      <input type="text" name="filter" value={filter} onChange={handleChange} />
    </label>
  );
};
