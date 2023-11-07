import './App.css';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import { FaMailBulk, FaGithub, FaFacebook, FaTwitter, FaToggleOn, FaToggleOff} from 'react-icons/fa';
import React from 'react';
import Loader from './loader';

const Community = React.lazy(() => import('./community')); 
const Home = React.lazy(() => import('./home')); 
const Documentation = React.lazy(() => import('./documentation')); 
const About = React.lazy(() => import('./about')); 
const Installation = React.lazy(() => import('./installation')); 

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {bgcolor: true}
    this.changeBlack = this.changeBlack.bind(this);
    this.changeWhite = this.changeWhite.bind(this);
  }
  changeBlack(){
    this.setState({bgcolor: false});
  }
  changeWhite(){
    this.setState({bgcolor: true})
  }

  render(){

    return (
      <BrowserRouter>
        <React.Suspense fallback={<Loader />}>
        <div style={{backgroundColor: this.state.bgcolor ? "#FFFFFF" : "#000000", color: this.state.bgcolor ? "#000000" : "#FFFFFF"}}>
        <nav>
          <span>
            <FaToggleOn style={{display: this.state.bgcolor ? "block" : "none"}} onClick={this.changeBlack}></FaToggleOn>
            <FaToggleOff style={{display: this.state.bgcolor ? "none" : "block"}} onClick={this.changeWhite}></FaToggleOff>  
          </span>
        </nav>
        
        
        <Routes>
          <Route element={<Home color={this.state.bgcolor}/>} path='' exact />
          <Route element={<About color={this.state.bgcolor}/>} path='/about' />
          <Route element={<Documentation color={this.state.bgcolor}/>} path='/documentation' />
          <Route element={<Installation color={this.state.bgcolor}/>} path='/installation' />
          <Route element={<Community color={this.state.bgcolor}/>} path='/community' />
        </Routes>
        <div id='footer'>
          <div>
            <div>
              <Link to=''>Home </Link><br />
              <Link to='/about'>About Us </Link><br />
              <Link to='/community'>Community </Link><br />
            
            </div>
            <div>
              <Link to='/documentation'>Documentation </Link><br />
              <Link to='/installation'>Installation </Link><br />
              <a href='mailto:fatmanlittleboy92@gmail.com'><FaMailBulk></FaMailBulk> Us </a><br />
            </div>
            <div>
              <a href='https://www.google.com'><FaGithub></FaGithub></a> <br />
              <a href='https://www.google.com'><FaTwitter></FaTwitter></a> <br />
              <a href='https://www.google.com'><FaFacebook></FaFacebook></a> <br />
            </div>
          </div>
          <p>
            @2023 GraphPy. All rights reserved .
          </p>
        </div>
        </div>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}
export default App;