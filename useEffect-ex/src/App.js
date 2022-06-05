import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // if (storedUserLoggedInInformation === '1'){
  //   // 이렇게 코드를 짜면 무한루프에 빠질 가능성이 있다.
  //   // state가 변경될 때마다 리렌더링을 하고 다시 검사하고 렌더링하고를 반복하게 된다.
  //   // 해결법 : useEffect 사용
  //   setIsLoggedIn(true);
  // }

  useEffect(()=>{
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
    if (storedUserLoggedInInformation === '1'){
      setIsLoggedIn(true)
    }
  },[]); // 의존성이 없으면 state가 변경되지 않기때문에 앱 처음에만 실행된다.

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn','1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
