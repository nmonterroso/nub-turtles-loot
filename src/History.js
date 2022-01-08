import styled from 'styled-components'
import history from './data/history.json'
import GeneratedAt from './GeneratedAt'
import ItemLink from './ItemLink'
import { User, UserList } from './User'
import { createIdToObjMap, createItemMap, createUserMap } from './util'

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

const History = styled(({ className }) => {
  const data = history.ksk_history
  const userMap = createUserMap(data.users)
  const listMap = createIdToObjMap(data.lists)
  const itemMap = createItemMap(data.items)

  return (
    <div className={className}>
      <GeneratedAt date={data.date} time={data.time} />
      <div>
        <UserList>
          {formatHistory(data.history, userMap, listMap, itemMap).map(h => (
            <User
              key={`${h.user.id}-${h.item.id}-${h.date}-${h.time}`}
              name={h.user.name}
              cls={h.user.cls}
            >
              <ItemLink id={h.item.id} name={h.item.name} quality={h.item.quality} />
            </User>
          ))}
        </UserList>
      </div>
    </div>
  )
})`
`

export default History
