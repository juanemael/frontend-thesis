import logo from './logo.svg';
import './App.css';
import React, {Component, Suspense} from 'react'
import {HashRouter, Route, Routes} from 'react-router-dom'

const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
)

const Login = React.lazy(()=> import('./views/auth/Login'))

function App() {
  return (
      <HashRouter>
          <Suspense fallback={loading}>
              <Routes>
                  <Route exact path="" name="Login Page" render={(props)=> <Login {...props}/> }/>
                  {/*<Route*/}
                  {/*    exact path="/register"*/}
                  {/*    name="Register Page"*/}
                  {/*    render={(props)=><Register {...props} /> } />*/}
              </Routes>
          </Suspense>
        <Route>

        </Route>
      </HashRouter>
  );
}

export default App;
