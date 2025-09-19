import { useState } from 'react'
import './App.css'
import List from './List'

function App() {
  const lists = ['List 1', 'List 2', 'List 3', 'List 4']
  const [listItems, setListItems] = useState<string[][]>(lists.map(() => []))
  
  const addItemToList = (lists: string[][], listIndex: number, item: string) => {
    const firstArray = (lists.slice(0, listIndex))
    const newList= [...lists[listIndex], item]
    const lastArray = (lists.slice(listIndex + 1))

    return [
      ...firstArray,
      newList,
      ...lastArray,
    ]
  }

  const removeItemFromList = (lists: string[][], listIndex: number, itemIndex: number) => {
    const firstArray = (lists.slice(0, listIndex))
    const newList = [
      ...lists[listIndex].slice(0, itemIndex),
      ...lists[listIndex].slice(itemIndex+1),
    ]
    const lastArray = (lists.slice(listIndex + 1))

    return [
      ...firstArray,
      newList,
      ...lastArray,
    ]
  }


  return (
    <div>
    <h1>Lists</h1>
      <div className='listsContainer'>
        {lists.map((list, listIndex) => (
            <List
              key={list}
              list={list}
              listItems={listItems[listIndex]}
              enableBack={listIndex !== 0}
              enableForward={listIndex !== listItems.length - 1}
              addToList={(item: string) => setListItems(addItemToList(listItems, listIndex, item))
              }
              moveLeft={(itemIndex) => {
                const newListItems = addItemToList(listItems, listIndex-1, listItems[listIndex][itemIndex])
                setListItems(removeItemFromList(newListItems, listIndex, itemIndex))
              }}
              moveRight={(itemIndex) => {
                const newListItems = addItemToList(listItems, listIndex+1, listItems[listIndex][itemIndex])
                setListItems(removeItemFromList(newListItems, listIndex, itemIndex))
              }}
            />
        ))}
      </div>
    </div>
  )
}

export default App
