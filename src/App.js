import React, { Component } from "react";
import Header from "./components/header";
import Dishes from "./components/dishes";
import NewDish from "./components/newDish";

import data from "./assets/data/dishes.json";

import './styles/App.css';

class App extends Component {
  //Estado
  state = {
    dish: "tacos",
    dishesArreglo: data
  }

  showDishes = e => {
    e.preventDefault();
    this.props.history.push("/platillos");
  };

  updateDish = (index, updatedName) => {
    let newState = {...this.state};
    newState.dishesArreglo.dishes[index].name = updatedName;

    this.setState(newState);
  }

  addDish = dishName => {
    let newState = {...this.state};

    const newDish = {
      id: newState.dishesArreglo.dishes.length,
      name: dishName,
      country: "Mexico",
      ingredients: ["Semillas", "Pollo", "Arroz"]
    }

    newState.dishesArreglo.dishes.push(newDish);

    this.setState(newState);
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <NewDish onAddDish={this.addDish}/>
        {/* <Dish name={this.dish} qty="3"/> */}
        <Dishes 
        data={this.state.dishesArreglo} 
        onUpdateDishPadre={this.updateDish}
        />
      </div>
    );
  }
}

export default App;
