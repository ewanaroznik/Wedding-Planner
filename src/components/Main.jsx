import React from 'react';
import {WeddingDatePicker} from './DatePicker.jsx';
import {Counter} from './Counter.jsx';
import {User} from './User.jsx';
// import moment from 'moment';




export class Main extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            date: 0
        }
    }

    handleOnChange = (date) => {
        this.setState({
            date: date
        })
    };

    render(){

      return <div className="main-container">
                <Counter date = {this.state.date}/>
                <WeddingDatePicker sendDate={this.handleOnChange}/>
                <User/>
            </div>
    }
}