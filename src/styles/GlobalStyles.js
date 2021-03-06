import {createGlobalStyle} from 'styled-components';



// global stylings
const GlobalStyles = createGlobalStyle `

/* define root element */
:root{
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #6c757d;
    --background-dark-color: #10121A;
    --background-dark-grey: #191D2B;
    --border-color: #2e344e;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #FFF;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #0a120c;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
}

    /* basic page resizing and fitting */
    *{
        padding : 0;
        margin: 0;
        list-style: none;
        text-decoration: none;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        font-size:1.2rem;
    }

    body{
        background-color: var(--background-dark-color);
        color : var(--font-light-color);
    }

    a{
        font-family:inherit;
        color:inherit;
        font-size:inherit;
        font-size:1.2rem;
    }

    h1{
        font-size: 2rem;
        color:whitesmoke;
        /* styles for main content span */
        span{
            font-size: 2rem;
            color: #3d88b8;
        }
    }

    h4{
        font-size: 2rem;
        color:whitesmoke;
        /* styles for main content span */
        span{
            font-size: 2rem;
            color: #3d88b8;
        }
    }

   //collapse menu icon
    .responsive-menu{
        right:5%;
        top: 5%;
        display: none;
        z-index:16;
        position:absolute;
        svg{
            font-size:2rem;
            color:whitesmoke;
        }
        
    }

    .nav-toggler{
        transform: translateX(0);
        z-index: 20;
    }

    @media screen and (max-width:1200px){
        .responsive-menu{
            display:block;
        }

    }

`
;// end

export default GlobalStyles;