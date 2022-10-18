const ItemLink = ({ id }) => {
  return (
    <a
      href={`https://www.wowhead.com/wotlk/item=${id}`}
      target="_blank"
      rel="noreferrer"
    >
      {id}
    </a>
  )
}

export default ItemLink
