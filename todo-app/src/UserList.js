import React, { useReducer } from 'react';
import { useEffect } from 'react/cjs/react.development';
const reducer = (state, action) => {
  switch (action.type) {
    case 'USERS_REQUEST':
      return { ...state, loading: true };
    case 'USERS_SUCCESS':
      return { ...state, users: action.payload, loading: false, error: '' };
    case 'USERS_FAIL':
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};
export default function UserList() {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    users: [],
    error: '',
  });
  const { loading, error, users } = state;

  const loadUsers = async () => {
    dispatch({ type: 'USERS_REQUEST' });
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const data = response.json();
      dispatch({ type: 'USERS_SUCCESS', payload: data });
    } catch (err) {
      dispatch({ type: 'USERS_FAIL', payload: err.message });
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <div>
      <h1>Users</h1>
      {loading ? (
        <div>Loading users...</div>
      ) : error ? (
        <div>Error:{error}</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Usersname</th>
              <th>Emaile</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.name}>
                <th>{user.name}</th>
                <th>{user.email}</th>
                <th>{user.phone}</th>
                <th>{user.website}</th>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
