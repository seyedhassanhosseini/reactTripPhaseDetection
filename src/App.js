
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectsDetails';
import SignIn from './components/auth/Signin';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProjects';
import MapTrips from './components/map/map';
import Empty from './components/empty/empty';

class App extends Component {
  render () {
    const res = [ {
      title: 'firstProduct',
      amount: 110,
      date: '2021'
    },
    {
      title:'secondProduct',
      amount:120,
      date: '2060'
    }
    ];
    return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<Dashboard/>}/>
          <Route path='/project/:id' element={<ProjectDetails/>}/>
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/create' element={<CreateProject/>}/>
          <Route path='/map' element={<MapTrips/>}/>
          <Route path='/empty' element={<Empty title={res[1].title} amount={res[1].amount} date={res[1].date}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    )  
}
}



export default App;
