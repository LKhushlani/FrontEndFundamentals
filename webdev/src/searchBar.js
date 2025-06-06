import React, { useEffect, useState } from 'react'

function searchBar() {

    const initialItems = [

        { id: 1, name: 'Apple', category: 'Fruit' },
        { id: 2, name: 'Banana', category: 'Fruit' },
        { id: 3, name: 'Carrot', category: 'Vegetable' },
        { id: 4, name: 'Broccoli', category: 'Vegetable' },
        { id: 5, name: 'Eggplant', category: 'Vegetable' },

    ];

    const [items] = useState(initialItems);
    const [query, setQuery] = useState('');
    const [filtered, setFiltered] = useState(initialItems);

    useEffect( () => {
        const lowerCase = query.toLowerCase();
        setFiltered(
            items.filter( (item) => 
            item.name.toLowerCase().includes(lowerCase)
            )
        )

    })

  return (
    <div>
      
    </div>
  )
}

export default searchBar
