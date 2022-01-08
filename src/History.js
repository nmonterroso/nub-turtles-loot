import styled from 'styled-components'
import GeneratedAt from './GeneratedAt'
import ItemLink from './ItemLink'
import { User, UserList } from './User'
import { createIdToObjMap, createItemMap, createUserMap } from './util'

const WRAP_CUTOFF = '550px'

const formatHistory = (historyList, userMap, listMap, itemMap) => {
  return historyList
    .filter(h => !['A', 'R', 'D'].includes(h.w))
    .map(h => ({
      date: h.d,
      time: h.t,
      item: itemMap[h.id],
      user: userMap[h.u],
      list: listMap[h.w]
    }))
}

const WonItem = styled(({ className, item, date, list }) => {
  return (
    <div className={className}>
      <ItemLink id={item.id} name={item.name} quality={item.quality} />
      <span>
        {date}, {list.name}
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

const History = styled(({ className, history }) => {
  const data = history.ksk_history
  const userMap = createUserMap(data.users)
  const listMap = createIdToObjMap(data.lists)
  const itemMap = createItemMap(data.items)

  return (
    <div className={className}>
      <GeneratedAt date={data.date} time={data.time} />
      <UserList>
        {formatHistory(data.history, userMap, listMap, itemMap).map(h => (
          <HistoryUser
            key={`${h.user.id}-${h.item.id}-${h.date}-${h.time}`}
            name={h.user.name}
            cls={h.user.cls}
          >
            <WonItem item={h.item} date={h.date} list={h.list} />
          </HistoryUser>
        ))}
      </UserList>
    </div>
  )
})`
`

export default History
