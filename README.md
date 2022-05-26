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

# useEffect

특정 state가 변경될때만 렌더링

    useEffect(()=>{
      """function"""
    }, ["""state"""])

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

