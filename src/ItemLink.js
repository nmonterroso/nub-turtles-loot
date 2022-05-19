const ItemLink = ({ id }) => {
  return (
    <a
      href={`https://tbc.wowhead.com/item=${id}`}
      target="_blank"
    >
      <span>{id}</span>
    </a>
  )
}

export default ItemLink
