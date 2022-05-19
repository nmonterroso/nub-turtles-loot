export const HISTORY_URL = process.env.REACT_APP_HISTORY_URL
export const ROSTER_URL = process.env.REACT_APP_ROSTER_URL

export function listUrls() {
  return process.env.REACT_APP_LIST_URL.split(',')
}
