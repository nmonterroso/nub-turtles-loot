import styled from 'styled-components'

export const User = styled(({ className, name, cls, children }) => {
  const imageName = cls !== 'deathknight' ? `${cls}.png` : 'deathknight.webp'
  return (
    <div className={className}>
      <img src={`/${imageName}`} alt={cls} />
      <div data-class={cls}>{name}</div>
      <div>{children || ''}</div>
    </div>
  )
})`
background: #202020;
border-radius: 5px;
border: 1px solid black;
display: flex;
align-items: center;
padding: 5px 10px;
line-height: 1rem;

> img {
  margin-right: 15px;
  border-radius: 50%;
  height: 32px;
}

> div:nth-child(2) {
  margin-right: 15px;
  font-weight: bold;
  width: 125px;
  
  &[data-class="warrior"] {
    color: #C69B6D;
  }
  
  &[data-class="paladin"] {
    color: #F48CBA;
  }
  
  &[data-class="hunter"] {
    color: #AAD372;
  }
  
  &[data-class="rogue"] {
    color: #FFF468;
  }
  
  &[data-class="priest"] {
    color: #FFFFFF;
  }
  
  &[data-class="shaman"] {
    color: #0070DD;
  }
  
  &[data-class="mage"] {
    color: #3FC7EB;
  }
  
  &[data-class="warlock"] {
    color: #8788EE;
  }
  
  &[data-class="druid"] {
    color: #FF7C0A;
  }
  
  &[data-class="deathknight"] {
    color: #C41E3A;
  }
}

> div:last-child {
  flex-grow: 1;
}
`

export const UserList = styled(({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
})`
> div:not(:last-child) {
  margin-bottom: 5px;
}
`
