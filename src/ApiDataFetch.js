import React, { useState, useEffect } from 'react';
import ApiFetch from './ApiFetch';
import './App.css';

function ApiDataFetch() {
const apiUrl = 'https://gorest.co.in/public/v2/users';
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []); // only run this effect on initial render

  return (
    <div className='DataTab'>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.gender}</td>
            <td>{item.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default ApiDataFetch;