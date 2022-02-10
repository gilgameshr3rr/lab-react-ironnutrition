import React from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
// import AddFood from './components/AddFood';


function App() {
  
  console.log(foods);
  
  return (

    <div className="App">
      {foods.map((food) => <FoodBox key={food.name} {...food}/>)}
      <FoodBox />
      {/* <AddFood /> */}
    </div>
  );
}

export default App;
