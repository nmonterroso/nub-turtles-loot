const userListToMap = (userList) => {
  return userList.reduce((map, user) => {
    map[user.name] = user
    return map
  }, {})
}

const createUser = (name, cls) => ({ name, cls })

const localDate = (dateStr) => {
  return new Date(dateStr)
}

export const createUserList = (rawListJson) => {
  return rawListJson.values.map(([cls, name]) => createUser(name, cls))
}

export const createHistory = ([rawRoster, rawHistory]) => {
  const userMap = userListToMap(createUserList(rawRoster))
  return rawHistory.values.map(([date, userName, itemId]) => {
    let user = userMap[userName]
    if (user === undefined) {
      user = createUser(userName, '')
    }

    return {
      date: localDate(date),
      itemId,
      user
    }
  }).reverse()
}

export const createSkLists = (rawListsJson) => {
  return rawListsJson.map(list => ({
    name: list.range.split('!')[0],
    users: createUserList(list)
  }))
}
