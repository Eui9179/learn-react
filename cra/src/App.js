import React, { useState, useEffect } from 'react';
import styles from './App.module.css';

function App() {
  const [counter, setValue] = useState(0);

  const onClick = () => setValue((prev) => prev + 1);

  // state가 바뀔 때마다 다시 render되면서 component코드를 재실행한다.
  // api 호출했다고 가정 -> render될 때, 특정 함수를 제외하는 법
  // useEffect
  useEffect(() => {
    console.log('CALL THE API...');
  }, []);

  // 항상 실행되는 부분
  console.log('i run all the time');

  // css 모듈화: App.module.css 파일에 .btn으로 만들고 import해서 사용
  return (
    <div className='App'>
      <h1 className={styles.title}>Welcome</h1>
      <p>{counter}</p>
      <button className={styles.btn} onClick={onClick}>
        Click me
      </button>
    </div>
  );
}

export default App;
