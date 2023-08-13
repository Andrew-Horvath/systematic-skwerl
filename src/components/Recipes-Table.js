import { DragDropContext, Draggable } from "react-beautiful-dnd";
import { StrictModeDroppable } from "./Droppable";
import ItemData from "./tempDataRecipe.json";
import { useState } from "react";
import { MdDragIndicator } from 'react-icons/md';

export default function DDTable() {
  const [items, setItems] = useState(ItemData.data);

  const handleDragEnd = (results) => {
    if (!results.destination) return;
      let tempData = [...items];
    let [selectRow] = tempData.splice(results.source.index, 1);
    tempData.splice(results.destination.index, 0, selectRow);
    setItems(tempData);
  };
  return (
    <div className="d-flex justify-content-around table-recipe-container">
      <DragDropContext onDragEnd={handleDragEnd}>
        <table className="table table-striped table-hover align-middle">
          <thead className="">
            <tr>
                <th />
                <th>Ingredient</th>
                <th>Amount</th>
                <th className="">Recipe Unit</th>
                <th className="">Unit Cost</th>
                <th className="">Extended Cost</th>
            </tr>
          </thead>
          <StrictModeDroppable droppableId="tbody">
            {(provided) => (
              <tbody
                className=''
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {items?.map((item, index) => (
                  <Draggable draggableId={item.itemName} index={index} key={item.itemName}>
                    {(provided) => (
                      <tr ref={provided.innerRef} {...provided.draggableProps} className='' >
                        <td {...provided.dragHandleProps}><MdDragIndicator size={30} /></td>
                        <td>{item.ingredient}</td>
                        <td>{item.amount}</td>
                        <td>{item.recipeUnit}</td>
                        <td className=''>{item.unitCost}</td>
                        <td className=''>{item.extendedCost}</td>
                      </tr>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </tbody>
            )}
          </StrictModeDroppable>
        </table>
      </DragDropContext>
      <article>
        <p>This is where directions will be when I figure out how to format the data</p>
      </article>
  
    </div>
  );
}
