const ItemLink = ({ id, name, quality}) => {
  return (
    <a
      href={`https://tbc.wowhead.com/item=${id}`}
      className={`q${quality}`}
      target="_blank"
    >
      <span>{name}</span>
    </a>
  )
}

export default ItemLink
