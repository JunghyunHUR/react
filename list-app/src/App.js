import React from 'react';
import Car from './comp/Car';

const App = () => {

  const cars = [
    {id: 1, brand: "현대"},
    {id: 2, brand: "기아"},
    {id: 3, brand: "쉐보레"},
    {id: 4, brand: "밴츠"},
    {id: 5, brand: "비엠더블유"}
  ];

  return (
    <div>
      <h1>자동차 메이커</h1>
      <ol>
        {
          cars.map((car) => (
            <Car brand={car.brand} key={car.id} />  
            
          ))
        }
      </ol>
    </div>
  );
};

export default App;