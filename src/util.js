const CLASS_ID_TO_NAME = {
  '01': 'warrior',
  '02': 'paladin',
  '03': 'hunter',
  '04': 'rogue',
  '05': 'priest',
  '07': 'shaman',
  '08': 'mage',
  '09': 'warlock',
  '11': 'druid',
}

export const createUserList = (orderList, userMap) => {
  return orderList
    .map(userId => userMap.find(u => u.id === userId))
    .filter(u => !!u)
    .map(user => ({id: user.id, name: user.n, cls: CLASS_ID_TO_NAME[user.c] || 'other'}))
}

export const createUserMap = (userList) => {
  return userList.reduce((map, user) => {
    map[user.id] = {id: user.id, name: user.n, cls: CLASS_ID_TO_NAME[user.c] || 'other'}
    return map
  }, {})
}

export const createIdToObjMap = (objList) => {
  return objList.reduce((map, obj) => {
    map[obj.id] = {id: obj.id, name: obj.n}
    return map
  }, {})
}

export const createItemMap = (itemList) => {
  return itemList.reduce((map, item) => {
    map[item.id] = {id: item.id, name: item.n, quality: item.q}
    return map
  }, {})
}

export const localDate = (dateStr, timeStr) => {
  const utcDate = Date.parse(`${dateStr} ${timeStr} UTC`)
  return new Date(utcDate)
}
