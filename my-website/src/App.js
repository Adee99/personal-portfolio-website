import React from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import MainPage from './Pages/MainPage'

function App(){
return(
  <div className="App">
    <Sidebar/>
    <MainContentStyles>
      <div className="lines">
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
        <div className="line-4"></div>
      </div>
      <MainPage/>
    </MainContentStyles>
  </div>
)
}


const MainContentStyles = styled.main`
    margin-left: 16.5rem;
    min-height:100vh;
    position:relative;

    /* lines */
    .lines{
      min-height:100vh;
      position:absolute;
      width:100%;
      display:flex;
      justify-content:space-evenly;


      .line-1, .line-2 , .line-3 , .line-4{
        min-height:100vh;
        background-color: var(--border-color);
        width: 1px;
      }
    }



`;

export default App;
