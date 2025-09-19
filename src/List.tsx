import { useState } from 'react'
import './List.css'

type ListProps = {
list: string,
listItems: string[],
enableBack: boolean,
enableForward: boolean,
addToList: (item: string) => void,
moveLeft: (itemIndex: number) => void,
moveRight: (itemIndex: number) => void
}

function List({list, listItems, enableBack, enableForward, addToList, moveLeft, moveRight}: ListProps) {
  const [inputText, setInputText] = useState('')
  return (
    <div className='listContainer'>
      <h2>{list}</h2>
      { listItems.map((item, itemIndex) => <div key={item}>
        <button disabled={!enableBack} onClick={() => moveLeft(itemIndex)}>{'<'}</button>
        {item}
        <button disabled={!enableForward} onClick={() => moveRight(itemIndex)}>{'>'}</button>
      </div>
      )
      }
      <div>
        <input value={inputText} onChange={(e) => setInputText(e.currentTarget.value)}/>
        <button onClick={() => {
          addToList(inputText)
          setInputText('')
        }}>+ Add Task</button>
      </div>
    </div>
  )
}

export default List
