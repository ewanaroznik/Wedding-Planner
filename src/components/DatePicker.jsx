import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
// import {Route} from 'react-router';



export class WeddingDatePicker extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
       this.props.route.sendDate(date.utc())
    }

    render() {

        return <div className="date-picker">
                <div className="date-picker-info">Click on your wedding's date:</div>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="LLL"
                    className="date-picker-calendar"
                />
                </div>

    }
}