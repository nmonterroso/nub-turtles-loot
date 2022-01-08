import styled from 'styled-components'

const GeneratedAt = styled(({ className, date, time }) => {
  return <div className={className}>Generated {date} at {time}</div>
})`
  margin-bottom: 5px;
`

export default GeneratedAt
