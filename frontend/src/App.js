import React, {Component} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomeGen from './Pages/HomeGen';
import Login from './Pages/Login';
import HomeLog from './Pages/HomeLog';
import Grid from './Pages/Grid';
import Protected from './Protected';
class App extends Component {
    state = {}

    render() {
        return (
             <BrowserRouter>
                 <Routes>
                     <Route path='/grid' element={<Grid/>}/>
                     <Route path='/login' element={<Login/>}/>
                     <Route path='/' element={<HomeGen/>}/>
                     <Route path='/loggedin' element={<HomeLog/>}/>
                 </Routes>
             </BrowserRouter>
        );
    }
}

export default App;
