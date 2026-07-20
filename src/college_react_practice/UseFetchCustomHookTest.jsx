import React from 'react';
import { useFetchData } from '../custom_hooks/useFetchData';

function UseFetchCustomHookTest() {
  const url = 'https://dummyjson.com/users';
  const { data, loading } = useFetchData(url);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            <strong>{user.firstName}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseFetchCustomHookTest;
