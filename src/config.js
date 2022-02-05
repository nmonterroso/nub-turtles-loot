export const DATA_SOURCE = process.env.REACT_APP_DATA_SOURCE
export const HISTORY_URL = process.env.REACT_APP_HISTORY_URL

export function listUrls() {
  return process.env.REACT_APP_LIST_URL.split(',')
}
