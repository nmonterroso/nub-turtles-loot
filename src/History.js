import { useEffect } from 'react'
import styled from 'styled-components'
import ItemLink from './ItemLink'
import { User, UserList } from './User'
import { localDate } from './util'

const WRAP_CUTOFF = '550px'

const WonItem = styled(({ className, itemId, dateStr }) => {
  return (
    <div className={className}>
      <ItemLink id={itemId} />
      <span>
        {localDate(dateStr)}
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
  return (
    <div className={className}>
      <UserList>
        {history.map(({ user, dateStr, itemId}) => (
          <HistoryUser
            key={`${user.name}-${dateStr}-${itemId}`}
            name={user.name}
            cls={user.cls}
          >
            <WonItem itemId={itemId} dateStr={dateStr} />
          </HistoryUser>
        ))}
      </UserList>
    </div>
  )
}

export default History
