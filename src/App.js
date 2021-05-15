import React from 'react';
import { useState } from "react";
import { Switch, Route } from 'react-router';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import MenuIcon from '@material-ui/icons/Menu';
import MainPage from './Pages/MainPage';
import AboutPage from './Pages/AboutPage';
import WorkPage from './Pages/WorkPage';
import { IconButton } from "@material-ui/core";
import ContactPage from './Pages/ContactPage';

function App(){
  const [menuToggler, setMenuToggler] = useState(false);


return(
  <div className="App">
    <Sidebar menuToggler={menuToggler} />

    <div className="responsive-menu">
        <IconButton  onClick={() => setMenuToggler(!menuToggler)}>
          <MenuIcon/>
        </IconButton>
    </div>

    <MainContentStyles>
      <div className="lines">
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
        <div className="line-4"></div>
      </div>
      <Switch>
        <Route path="/" exact>
        <MainPage/>
        </Route>

        <Route path="/about" exact>
        <AboutPage/>
        </Route>

        <Route path="/work" exact>
        <WorkPage/>
        </Route>

        <Route path="/contact" exact>
        <ContactPage/>
        </Route>

      </Switch>
    </MainContentStyles>
  </div>
)
}


const MainContentStyles = styled.main`
    margin-left: 16.5rem;
    min-height:100vh;
    @media screen and (max-width:1200px){
      margin-left: 0;
    }
    position:relative;

    /* lines */
    /* .lines{
      min-height:100vh;
      position:absolute;
      width:100%;
      display:flex;
      justify-content:space-evenly;


      .line-1, .line-2 , .line-3 , .line-4{
        min-height:100vh;
        background-color: whitesmoke;
        width: 0.2px;
      }
    } */




`;

export default App;
