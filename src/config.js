export const HISTORY_URL = process.env.NEXT_PUBLIC_HISTORY_URL
export const ROSTER_URL = process.env.NEXT_PUBLIC_ROSTER_URL

export function listUrls() {
  return process.env.NEXT_PUBLIC_LIST_URL.split(',')
}
