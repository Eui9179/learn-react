import { useState } from 'react';
import Practice from './Pratice';

function App() {
  // const [toDo, setToDo] = useState('');
  // const [toDos, setToDos] = useState([]);

  // const onChange = (event) => setToDo(event.target.value);
  // const onSubmit = (event) => {
  //   event.preventDefault(); // submit 후 새로고침 방지
  //   if (toDo === '') {
  //     // toDo가 비어있는 상태로 호출하면 아무 동작도 안함
  //     return;
  //   }

  //   setToDos((prev) => [toDo, ...prev]);

  //   setToDo(''); // toDo state 비워주기
  // };

  return (
    <div>
      {/* <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type='text'
          placeholder='Write your to do...'
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}
      <Practice />
    </div>
  );
}

export default App;
