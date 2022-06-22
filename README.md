# Learn React

# async, await

    ex)

    const getMovies = async () =>{
      const response = await fetch(`https://...`)
      const json = await response.json()

      /*
      const json = await (
        await fetch(`https://...`)
      ).json()
      */
    }

# Route
## react-router-dom@5.3.0
<br>

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';<br>


    <Router>
      <Switch>
        <Route path= """url""">
          <Component />
        </Route>
      </Switch>
    </Router>

<br>

## react-router-dom v6

<br>

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';<br>

    <Router>
      <Routes>
        <Route path= """url""" element={<{"""Component"""} />} />
      </Routes>
    </Router>

<br>

# Link

<br>

import { Link } from 'react-router-dom';<br>

    <Link to= """path""">


<br>

# Effect (or a "Side Effect")

Side Effect는 애플리케이션에서 화면에 표시하는 것 이외에 일어나는 모든 것
예를 들어 http request를 보내는 것, 브라우저에 무언가를 저장하는 것 등등

useEffect: 특정 state가 변경될때만 렌더링

    useEffect(()=>{...}, [dependencies])
    

# Context
State Storage

로그인의 경우 사용자 로그인 정보는 모든 컴포넌트에서 쓰일텐데 
그때마다 props(props chain)로 전달할 수 없다. 
