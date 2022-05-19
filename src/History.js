import { useEffect } from 'react'
import styled from 'styled-components'
import ItemLink from './ItemLink'
import { User, UserList } from './User'

const WRAP_CUTOFF = '550px'

const WonItem = styled(({ className, itemId, date }) => {
  return (
    <div className={className}>
      <ItemLink id={itemId} />
      <span>
        {date.toLocaleDateString()}
      </span>
    </div>
  )
})`
display: flex;
justify-content: space-between;

> span {
  font-size: .9rem;
}

@media only screen and (max-width: ${WRAP_CUTOFF}) {
  flex-direction: column;
  > *:first-child {
    margin-bottom: 5px;
  }
}
`

const HistoryUser = styled(User)`
@media only screen and (max-width: ${WRAP_CUTOFF}) {
  flex-wrap: wrap;
  justify-content: center;
  
  > *:first-child {
    display: none;
  }
  
  > div:nth-child(2) {
    width: auto;
    margin: 0;
  }
  
  > div:last-child {
    width: 100%;
    margin-top: 10px;
    text-align: center;
  }
}
`

const History = ({ className, history }) => {
  useEffect(() => {
    if (window.$WowheadPower) {
      window.$WowheadPower.refreshLinks()
    }
  }, [])

  return (
    <div className={className}>
      <UserList>
        {history.map(({ user, date, itemId}) => (
          <HistoryUser
            key={`${user.name}-${date.getTime()}-${itemId}`}
            name={user.name}
            cls={user.cls}
          >
            <WonItem itemId={itemId} date={date} />
          </HistoryUser>
        ))}
      </UserList>
    </div>
  )
}

export default History
