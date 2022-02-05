import { DATA_SOURCE } from './config'

const KSK_CLASS_ID_TO_NAME = {
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

const googleResponseToListMap = (lists) => {
  return lists.map(list => ({
    name: list.range.split('!')[0],
    users: list.values
      .map(([cls, name]) => ({
        id: name,
        name: name,
        cls: cls
      }))
      .filter(u => !!u.id)
  }))
}

const kskResponseToListMap = (resp) => {
  return resp.ksk.lists.map(list => ({
    name: list.n,
    users: list.users
      .map(userId => resp.ksk.users.find(u => u.id === userId))
      .filter(u => !!u)
      .map(user => ({
        id: user.id,
        name: user.n,
        cls: KSK_CLASS_ID_TO_NAME[user.c] || 'other'
      }))
  }))
}

export const responseToListMap = (resp) => {
  if (DATA_SOURCE === 'google') {
    return googleResponseToListMap(resp)
  } else {
    return kskResponseToListMap(resp[0])
  }
}

export const createUserMap = (userList) => {
  return userList.reduce((map, user) => {
    map[user.id] = {id: user.id, name: user.n, cls: KSK_CLASS_ID_TO_NAME[user.c] || 'other'}
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
