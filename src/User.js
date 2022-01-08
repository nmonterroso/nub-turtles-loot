import styled from 'styled-components'
import warrior from './img/warrior.png'
import paladin from './img/paladin.png'
import hunter from './img/hunter.png'
import rogue from './img/rogue.png'
import priest from './img/priest.png'
import shaman from './img/shaman.png'
import mage from './img/mage.png'
import warlock from './img/warlock.png'
import druid from './img/druid.png'


const classIcon = (cls) => {
  switch (cls) {
    case 'warrior': return warrior
    case 'paladin': return paladin
    case 'hunter': return hunter
    case 'rogue': return rogue
    case 'priest': return priest
    case 'shaman': return shaman
    case 'mage': return mage
    case 'warlock': return warlock
    case 'druid': return druid
    default: return warrior
  }
}

export const User = styled(({ className, name, cls, children }) => {
  return (
    <div className={className}>
      <img src={classIcon(cls)} alt={cls} />
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
line-height: 0;

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
