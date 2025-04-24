import React, { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange=(event)=>{
        setInputValue(event.target.value)
    }

    const handleSubmitForm=(event)=>{
        event.preventDefault()
        if(inputValue.trim().length <= 1) return
        
        setInputValue('')
        onNewCategory(inputValue.trim())        
    }

    
  return (
    <form onSubmit={handleSubmitForm}>
        <input type='text' placeholder='buscar gifs' value={inputValue}
            onChange={handleInputChange}
        />
    </form>    
  )
}
