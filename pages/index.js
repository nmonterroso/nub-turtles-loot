import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { HISTORY_URL, listUrls, ROSTER_URL } from '../src/config'
import Lists from '../src/Lists'
import History from '../src/History'
import { createHistory, createSkLists } from '../src/util'

export async function getServerSideProps(context) {
  const [rosterResponse, historyResponse] = await Promise.all([ROSTER_URL, HISTORY_URL].map(url => fetch(url)))
  const roster = await rosterResponse.json()
  const history = await historyResponse.json()

  const listsResponses = await Promise.all(listUrls().map(url => fetch(url)))
  const lists = await Promise.all(listsResponses.map(listResp => listResp.json()))

  return {
    props: {
      history: createHistory(roster, history),
      lists: createSkLists(lists),
    },
  }
}

const BACKGROUND_COLOR = '#131313'
const VIEWS = {
  LISTS: 'lists',
  HISTORY: 'history',
}

const ViewWrapper = styled(({ className, active, children }) => (
  <div className={className} data-active={active}>
    {children}
  </div>
)) `
display: none;

&[data-active="true"] {
  display: block
}
`

const App = styled(({ className, history, lists }) => {
  const [currentView, setCurrentView] = useState(VIEWS.HISTORY)

  const onChangeView = (e, nextView) => {
    e.preventDefault()
    if (nextView !== currentView) {
      setCurrentView(nextView)
    }
  }

  return (
    <div className={className}>
      <img src="/logo.png" alt="logo" />
      <div>
        <ul>
          <li>
            <a href="/" onClick={e => onChangeView(e, VIEWS.HISTORY)} data-active={currentView === VIEWS.HISTORY}>
              SWP LOOT
            </a>
          </li>
          <li>
            <a href="/" onClick={e => onChangeView(e, VIEWS.LISTS)} data-active={currentView === VIEWS.LISTS}>
              BT/HYJAL SK LISTS
            </a>
          </li>
        </ul>
        <div data-round-first={currentView !== VIEWS.HISTORY}>
          <ViewWrapper active={currentView === VIEWS.LISTS}>
            <Lists lists={lists} />
          </ViewWrapper>
          <ViewWrapper active={currentView === VIEWS.HISTORY}>
            <History history={history} />
          </ViewWrapper>
        </div>
      </div>
    </div>
  );
})`
padding: 15px 20px;
display: flex;
flex-direction: row;
justify-content: center;

a {
  text-decoration: none;
}

> img {
  position: sticky;
  top: 0;
  margin-right: 10px;
  width: 180px;
  height: 230px;
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
    color: white;
    width: 100%;
    min-height: 500px;
    border-radius: 0 10px 10px 10px;
    padding: 15px 25px;

    &[data-round-first="true"] {
      border-top-left-radius: 10px;
    }
  }
}

@media only screen and (max-width: 850px) {
  flex-direction: column;

  > img {
    position: static;
    margin: 0 auto;
  }
}
`

export default App;
