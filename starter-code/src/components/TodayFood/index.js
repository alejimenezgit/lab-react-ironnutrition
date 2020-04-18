import React, { Component } from 'react';

class TodayFood extends Component {

    handleChange() {
        this.props.calcalories(this.props.calcalories);
    }

    countCalories(calories, quantity) {
        return calories * quantity;
    }

    render(){
        const { name, calories, quantity } = this.props;

        return (
            <ul className="listFoods">
               <li>  {quantity} {name} = {this.countCalories(calories, quantity)} calories </li>
            </ul>
        )
    } 
}

export default TodayFood;