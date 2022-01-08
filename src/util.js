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
