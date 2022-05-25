import React, { useState, useEffect } from 'react';
import styles from './App.module.css';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');

  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  // state가 바뀔 때마다 다시 render되면서 component코드를 재실행한다.
  // api 호출했다고 가정 -> render될 때, 특정 함수를 제외하는 법
  // useEffect
  useEffect(() => {
    console.log('I run only once.');
  }, []); // 빈배열 -> 한번만 실행

  // Click me 버튼을 누를 때 마다 검색하는 키워드가 계속 된다.
  // Click me 버튼을 눌러도 이 부분은 실행되지 않음
  useEffect(() => {
    if (keyword !== '' && keyword.length > 5) {
      console.log('I run when "keyword" changs.');
    }
  }, [keyword]); // keyword를 배열 파라미터로 넘겨주면 변화할 때마다 실행.

  useEffect(() => {
    console.log('I run when "counter" changes.');
  }, [counter]);

  // 항상 실행되는 부분
  console.log('I run all the time');

  useEffect(() => {
    console.log('I run when "keyword" & "counter" changes');
  }, [keyword, counter]);

  // css 모듈화: App.module.css 파일에 .btn으로 만들고 import해서 사용
  return (
    <div className='App'>
      <h1 className={styles.title}>Welcome</h1>

      <input onChange={onChange} type='text' placeholder='Search here...' />

      <p>{counter}</p>
      <button className={styles.btn} onClick={onClick}>
        Click me
      </button>
    </div>
  );
}

export default App;
