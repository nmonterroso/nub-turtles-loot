import { useState } from 'react'
import styled from 'styled-components'
import logo from './logo.png';

const BACKGROUND_COLOR = '#131313'
const VIEWS = {
  LISTS: 'lists',
  HISTORY: 'history',
}

const App = styled(({ className }) => {
  const [currentView, setCurrentView] = useState(VIEWS.LISTS)

  const onChangeView = (e, nextView) => {
    e.preventDefault()
    if (nextView !== currentView) {
      setCurrentView(nextView)
    }
  }

  return (
    <div className={className}>
      <img src={logo} alt="logo" />
      <div>
        <ul>
          <li><a href="#" onClick={e => onChangeView(e, VIEWS.LISTS)} data-active={currentView === VIEWS.LISTS}>PRIO LISTS</a></li>
          <li><a href="#" onClick={e => onChangeView(e, VIEWS.HISTORY)} data-active={currentView === VIEWS.HISTORY}>HISTORY</a></li>
        </ul>
        <div data-round-first={currentView !== VIEWS.LISTS}>

        </div>
      </div>
    </div>
  );
})`
padding: 15px 20px;
display: flexbox;
flex-direction: row;
justify-content: center;

a {
  text-decoration: none;
}

> img {
  position: sticky;
  top: 0;
  margin-right: 10px;
}

> div {
  flex-grow: 1;
  margin-top: 15px;
  max-width: 1200px;
  
  > ul:first-child {
    list-style: none;
    margin-bottom: 15px;
    padding: 0;
    
    li {
      display: inline-block;
      margin: 0;
      padding: 0;
      
      a {
        padding: 10px 30px;
        text-transform: uppercase;
        font-weight: bold;
        border-radius: 5px 5px 0 0;
        color: white;
        border: 1px solid transparent;
        transition: color .3s ease-out 0s;
        margin-right: 5px;
        
        &[data-active="true"] {
          background: ${BACKGROUND_COLOR};
          border: 1px solid black;
          border-bottom: 5px solid black;
          
          &:hover {
            color: #5fb701;
          }
        }
        
        &[data-active="false"]:hover {
          background: ${BACKGROUND_COLOR};
          border-bottom: 5px solid gold;
          transition: none;
        }
      }
    }
  }
  
  > div {
    background: ${BACKGROUND_COLOR};
    width: 100%;
    min-height: 500px;
    border-radius: 0 10px 10px 10px;
    
    &[data-round-first="true"] {
      border-top-left-radius: 10px;
    }
  }
}
`

export default App;
