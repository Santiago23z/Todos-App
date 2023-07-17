import React from 'react'

const useLocalStorage = (key, itemLocal) => {
  let [item, setItem] = React.useState(itemLocal)
  let [load,  setLoad] = React.useState(true)
  let [error,  setError] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const itemLocalStorage = localStorage.getItem(key)
        let parsedItem;
        
        if (!itemLocalStorage) {
          localStorage.setItem(key, JSON.stringify(itemLocal))
        } else {
          parsedItem = JSON.parse(itemLocalStorage)
          setItem(parsedItem)
        }
        setLoad(false)
      } catch (error) {
        console.log(error);
        setError(true)
        setLoad(false)
      }
    }, 2000)
  }, [])
  


    const save = (newTodos) => {
      setItem(newTodos)
      localStorage.setItem(key, JSON.stringify(newTodos))
    }
  return {
    item,
    save,
    error,
    load
  }

}

export default useLocalStorage

