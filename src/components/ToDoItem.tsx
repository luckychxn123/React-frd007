
import { useSelector } from 'react-redux';
import { ITodoItemState } from '../reduxFRD005/state'
import { updateCount, decrement } from '../reduxFRD005/action'
import { useDispatch } from 'react-redux';
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, Key } from 'react';

export default function Todoitem() {
    const dispatch = useDispatch()
    const items = useSelector((state: any) => state['toDoItemProducer005'].items)// ITodoItemState.items
    // const items = useSelector((state: any) => state.items)
    const onComplete = (index: number) => {
        //call redux (updateCount, {count: addAmount_y, index: x})
        dispatch(updateCount({ count: 1, index }))
    }
    const onDelete = (index: number) => {
        dispatch(decrement(index))
    }

    return (
        <div>
            {items.map((item: any, index: number) =>
                <div key={index}>{item.name} <button onClick={() => { onComplete(index) }}>Complete</button>
                    <button onClick={() => { onDelete(item.index) }}>Delete</button>
                    <span>{item.count}</span></div>
            )}
        </div>
    )
}