import './ListItems.css';
import DeleteIcon from '@material-ui/icons/Delete'
import FlipMove from 'react-flip-move';
import edit from './edit'
function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>
   {
       return <div className="list" key={item.key}>
     <p>
         <input type="text" id={item.key} value={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}}/>
        <span>
       
        <DeleteIcon className="faicons" onClick={() => {
            props.deleteItem(item.key)
        }}  />
        <edit/>
        </span>
     </p>
     
    </div>})
    return <div>
    <FlipMove duration={300} easing="ease-in-out">
         {listItems}
    </FlipMove>
    </div>;
  }

  export default ListItems;