import React, {useState, useEffect} from 'react'

function Cards() {
  const [items, setItems] = useState([])
  const [clicked, setClicked] = useState([])
  const [count, setCount] = useState(0)
  const [highScore, setHighScore] = useState(0)

  useEffect(() => {
  fetch("https://pokeapi.co/api/v2/pokemon/?limit=12")
    .then((res) => res.json())
    .then(({ results }) => {
      setItems(results);
    });
}, []);

useEffect(() => console.log(clicked), [clicked]);

useEffect(() => {
  if(count > highScore) {
    setHighScore(count)
  } 
}, [clicked])
console.log(count)

const pushPokemon = (e) => {
  var pokemon = e.target.innerHTML;

   items.sort(() => 0.5 - Math.random());


  if(!clicked.includes(pokemon)) {
      setClicked([...clicked, pokemon]);
      setCount(count + 1)
  } else {
      setCount(0)
      setClicked([])
  }
};
    return (
        <div>
        <div>
        Score: {count}
        </div>
        <div>
        High Score: {highScore}
        </div>
        {items.map(item => (
          <button onClick={pushPokemon}>{item.name}</button>
        ))}

        </div>
    )
}

export default Cards
