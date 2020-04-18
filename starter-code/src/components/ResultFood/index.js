import React, { Component } from 'react';
import TodayFood from '../TodayFood';
import "./style.css";

class ResultFood extends Component {

    calcalories = (newFoodList) => {
        console.log(newFoodList)
        if(newFoodList.length > 0){
            return newFoodList.reduce((accumulator, current) => {return accumulator + (current.calories * current.number)} , 0)
        } 
        else 
            return 0;
    }

    render(){
        const { newFoodList } = this.props;
        return (
            <div className="listFood">

                <h4> Today's Foods </h4>

                {newFoodList.map((foodToday,index) => {
                    const props = {
                        key: index,
                        name: foodToday.name,
                        calories: foodToday.calories,
                        quantity: foodToday.number
                    }
                   return <TodayFood {...props}/> 
                })}

                <h4> Total: {this.calcalories(newFoodList)} cal </h4>
            </div>
        )
    }
}

export default ResultFood;

