import MenuItem from "./MenuItem"

const MenuList = (list) => {
  return (
    <div>
      {list && list.length > 0 ? 
    list.map((item) => (
          <MenuItem item={item}/>
    )) : null
    }
    </div>
  )
}

export default MenuList