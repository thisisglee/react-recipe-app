import { useEffect } from 'react';
import './App.css';
import {useState} from 'react'
import Recipe from './Recipe'

function App() {

  //keys
  const APP_ID = 'c6bd602f'
  const APP_KEY = '84f8515e95d5a09345cadd0be45d0d1e'

  // const [counter, setCounter] = useState(0)
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect(()=>{
    getRecipes()
  },[query])

  const getRecipes = async ()=>{
    const reqAPI = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

    const response = await fetch(reqAPI)
    const data = await response.json()
    console.log(data.hits)

    setRecipes(data.hits)
  }

  const updateSearch= e =>{
    setSearch(e.target.value)
    console.log(search)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" name="" id="" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>
      {/* <button onClick={()=> setCounter(counter + 1)} type="text">{counter}</button> */}
      <div className="recipes">
      {recipes.map(recipe =>(
        <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories} 
          ingredients={recipe.recipe.ingredients}
          imgSrc={recipe.recipe.image}
        />
      ))}
      </div>
      
    </div>
  );
}

export default App;
