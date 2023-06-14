import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Car from './comp/Car';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
      // 성공한 경우 실행
      console.log(response);
      setData(response.data)
    })
    .catch(function (error) {
      // 에러인 경우 실행
      console.log(error);
    })
    .then(function () {
      // 항상 실행
    });
  })

  return (
    <div>
      <ol>
        {
          data.map((dt, index) => (
            <Car key={index} 
            name={dt.name} 
            username={dt.username} 
            email={dt.email}
            phone={dt.phon}
            />
          ))
        }
      </ol>
      
    </div>
  );
};

export default App;