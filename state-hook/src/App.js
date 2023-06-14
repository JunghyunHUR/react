import React, {useState} from 'react';

const App = () => {
  console.log("다시시작");
  const [users, setUsers] = useState(["김철수", "홍길동"]);
  const [val, setVal] = useState("");
  const handleInputChange = (e) => {
    setVal(e.target.value);
  }
  const handleUpdate = () => {
    setUsers((prevState) => {
      console.log("이전값" , prevState);
      return [val, ...prevState];
    });
  }

  // console.log(val);

  return (
    <div>
      <input type="text" onChange={handleInputChange} />
      <button onClick={handleUpdate}>업데이트</button>
      <ul>
        {
          users.map((user, index) => (
            <li key={index}>{user}</li>
          ))
        }
      </ul>
    </div>
  );
};

export default App;