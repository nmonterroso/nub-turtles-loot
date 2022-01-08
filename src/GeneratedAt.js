import styled from 'styled-components'

const GeneratedAt = styled(({ className, date }) => {
  return <div className={className}>Generated {date.toLocaleDateString()} at {date.toLocaleTimeString()}</div>
})`
  margin-bottom: 5px;
`

export default GeneratedAt
