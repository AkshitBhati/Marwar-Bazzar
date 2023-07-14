import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { drag, remove } from '../redux/cartSlice'
import { toast } from 'react-hot-toast'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import CartTotal from '../components/CartTotal';


const Cart = () => {
  const cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeItem = (productId) => {
    dispatch(remove(productId));
    toast.error("Item removed from cart");
  };

  
  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(cartData);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    dispatch(drag(items));
  };

  return (
    <div className='cart__wrapper'>
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="cartItems">
        {(provided) => (
          <div
            className="cart__container"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {cartData.map((data, index) => (
              <Draggable key={data.id} draggableId={data.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <img src={data.img} alt="" />
                    <div>
                      <h3>{data.name}</h3>
                      <h2>{data.price}</h2>
                    </div>
                    <div className="cart__btn">
                      <button onClick={() => removeItem(data.id)}>remove</button>
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
    <CartTotal />
        </div>
  );
};

export default Cart;
