const ItemLink = ({ id }) => {
  return (
    <a
      href={`https://tbc.wowhead.com/item=${id}`}
      target="_blank"
      rel="noreferrer"
    >
      {id}
    </a>
  )
}

export default ItemLink
