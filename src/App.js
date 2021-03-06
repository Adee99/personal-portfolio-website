import React from 'react';
import { useState } from "react";
import { Route,Switch  } from "react-router-dom";
import Sidebar from './components/Sidebar';
import styled from 'styled-components';
import MainPage from './Pages/MainPage';
import AboutPage from './Pages/AboutPage';
import WorkPage from './Pages/WorkPage';
import { IconButton } from "@material-ui/core";
import ContactPage from './Pages/ContactPage';
import MenuIcon from '@material-ui/icons/Menu';

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

      <Switch>
        <Route path="/personal-portfolio-website" exact>
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
);
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
