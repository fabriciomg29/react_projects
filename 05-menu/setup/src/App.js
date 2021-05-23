import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategoires = ['all', ...new Set(items.map((item) => item.category))]

function App() {

  const [menuItens, setMenuItens] = useState(items)
  const [categories, setCategories] = useState(allCategoires)

  const filterItems = (category) => {

    if(category === 'all') {
      setMenuItens(items)
      return;
    }

    const newItems = items.filter((item) => item.category === category)
    setMenuItens(newItems)
  }

  return (
    <section className="menu section">
      <div className="title">
        <h2>Menu</h2>
        <div className="underline"></div>
      </div>
      <Categories filterItems={filterItems} categories={categories}/> 
      <Menu items={menuItens}/>
    </section>
  )
}

export default App;
