import MenuList from "./MenuList"
import {menus} from "./TreeViewData"
const TreeView = ({menus = []}) => {
  return (
<div>
     <MenuList list={menus} />


</div>  

)
}

export default TreeView