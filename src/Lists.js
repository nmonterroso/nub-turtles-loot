import styled from 'styled-components'
import { User, UserList } from './User'

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

const Lists = styled(({ className, lists }) => {
  return (
    <div className={className}>
      {lists.map(list => <List key={list.name} name={list.name} users={list.users} />)}
    </div>
  )
})`
display: flex;
flex-direction: row;
justify-content: space-between;

@media only screen and (max-width: ${WRAP_CUTOFF}) {
  flex-direction: column;
}
`

export default Lists
