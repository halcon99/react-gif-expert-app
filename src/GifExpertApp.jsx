import React, { useState } from 'react'
import { AddCategory, GifGrid} from './components'


export const GifExpertApp = () => {

	const [categories, setCategories]= useState(['tokyo ghoul'])

	const onAddCategory= (newCategory)=>{
		if (categories.includes(newCategory)) return

		setCategories([...categories, newCategory])
	}

	
  return (
    <>
		<h1>GifExpertApp</h1>
		
		<AddCategory onNewCategory={onAddCategory}/>

		
		{categories.map((category)=>(
			<GifGrid key={category} category={category}/>

		))}
	
    </>
  )
}
