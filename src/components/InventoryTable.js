import { DragDropContext, Draggable } from "react-beautiful-dnd";
import { StrictModeDroppable } from "./Droppable";
import ItemData from "./tempData.json";
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
      <DragDropContext onDragEnd={handleDragEnd}>
        <table className="table-custom table table-striped table-hover align-middle">
          <thead className="table-custom--thead">
            <tr>
                <th />
                <th>Item Name</th>
                <th>Vendor</th>
                <th>Category</th>
                <th className="">Last Purchased</th>
                <th className="text-start">UOM</th>
                <th className="text-start ">On Hand</th>
                <th className="text-end">Price</th>
                <th className="text-end">Extended</th>
            </tr>
          </thead>
          
          <StrictModeDroppable droppableId="tbody">
            {(provided) => (
              <tbody
                className="table-custom--tbody"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {items?.map((item, index) => (
                  <Draggable draggableId={item.itemName} index={index} key={item.itemName}>
                    {(provided) => (
                      <tr ref={provided.innerRef} {...provided.draggableProps} className="table-custom--tbody_tr" >
                        <td {...provided.dragHandleProps}><MdDragIndicator size={30} /></td>
                        <td>{item.itemName}</td>
                        <td>{item.vendor}</td>
                        <td>{item.category}</td>
                        <td className="text-start">{item.lastPurchased}</td>
                        <td className="text-start">{item.uom}</td>
                        <td className="text-start table-custom--tbody--currency">{item.onHand}</td>
                        <td className="text-end table-custom--tbody--currency">{`${'$'}${item.price}`}</td>
                        <td className="text-end table-custom--tbody--currency">{`${'$'}${item.extended}`}</td>
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

  );
}
