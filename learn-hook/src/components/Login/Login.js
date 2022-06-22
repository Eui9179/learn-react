import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
    return { value : action.val, isValid : action.val.includes('@') };
  }
  if(action.type === 'INPUT_BLUR'){
    return { value : state.value, isValid : state.value.includes('@') }; 
  }
  return { value : '', isValid : false }; // action이 USER_INPUT이외에는 defualt로 반환
}

const passwordReducer = (state, action) => {
  if(action.type==='USER_INPUT'){
    return {value: action.val, isValid: action.val.trim().length > 6}
  }
  if(action.type==='INPUT_BLUR'){
    return { value: state.value, isValid: state.value.trim().length > 6 }
  }
  return { value : '', isValid : false };
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  //-> useReducer: 하나의 state에 의해 다른 state가 영향을 받는다면 useReducer를 쓰는 것이 적절하다.

  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  // 이 부분도 useReducer 사용 가능

  //useReducer
  const [emailState, dispatchEmail] = useReducer(
    emailReducer, 
    { value:'', isValid:null }
  );

  const [passwordState, dispatchPassword] = useReducer(
    passwordReducer,
    { value:'', isValid:null }
  )

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(()=>{
    // 의존성이 변경될 때마다 이 useEffect 함수를 다시 실행해라
    // 이 셋중에 변경된게 없다면 실행되지 않는다.
    // 일반적으로 특정 데이터, 예를 들어 state, props등이

    // setFormIsValid를 useEffect안에 두고
    // 의존성을 주어서 변화될 때마다
    // 최신의 value를 받아 검사를 한다.
    const identifier = setTimeout(()=>{
      setFormIsValid(
        emailState.isValid && passwordState.isValid
      );
    },500);
    console.log("asdfasdfsdffadfaf")

    // clean up function(처음을 제외한 시작할 때 실행되는 함수)
    // 다시 강의 시청
    return ()=>{
      clearTimeout(identifier);
    }; 
    // IsValid를 의존하게 두어서 유효성이 바뀔때만 검사하게
  }, [emailState.isValid, passwordState.isValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT', val: event.target.value});
    // dispatch함수에서 state는 최신의 상태를 react가 전송한다.
    // object로 넘어가는 파라미터는 action
    // setFormIsValid(
    //   emailState.isValid && passwordState.isValid > 6 
    // );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({type: 'USER_INPUT', val: event.target.value});
    // setFormIsValid(
    //   emailState.isValid && passwordState.isValid > 6 
    // );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({type:'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type:'INPUT_BLUR'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.value === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
