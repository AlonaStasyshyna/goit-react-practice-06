import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from 'redux/users/usersOperations';

export const UpdateUserForm = ({ user, closeForm }) => {
  const [companyName, setCompanyName] = useState(user.company);
  const dispatch = useDispatch();

  const changeCompany = e => {
    const { value } = e.target;
    setCompanyName(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(updateUser({ ...user, company: companyName }));
    closeForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>{user.name}</p>

      <label>
        Company:
        <input
          type="text"
          name="company"
          value={companyName}
          onChange={changeCompany}
        />
      </label>

      <button type="submit">Update</button>
    </form>
  );
};
