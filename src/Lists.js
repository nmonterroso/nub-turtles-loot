import styled from 'styled-components'
import lists from './data/lists.json'
import GeneratedAt from './GeneratedAt'
import { User, UserList } from './User'
import { createUserList } from './util'

const WRAP_CUTOFF = '450px'

const List = styled(({ className, name, users }) => {
  return (
    <div className={className}>
      <h2>{name}</h2>
      <UserList>
        {users.map(u => <User key={u.id} name={u.name} cls={u.cls} />)}
      </UserList>
    </div>
  )
})`
width: 47.5%;

> h2 {
  margin: 0 0 10px;
}

@media only screen and (max-width: ${WRAP_CUTOFF}) {
  width: 100%;
  margin-bottom: 15px;
}
`

const Lists = styled(({ className }) => {
  return (
    <div className={className}>
      <GeneratedAt date={lists.ksk.date} time={lists.ksk.time} />
      <div>
        {lists.ksk.lists.map(list => <List key={list.id} name={list.n} users={createUserList(list.users, lists.ksk.users)} />)}
      </div>
    </div>
  )
})`
> div:last-child {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

@media only screen and (max-width: ${WRAP_CUTOFF}) {
  > div:last-child {
    flex-direction: column;
  }
}
`

export default Lists
