import React from 'react';
import moment from 'moment';


export class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            current: moment()
        }
    }

    componentWillMount(){
        let int = setInterval(() => {
            this.setState({
                current: moment()
            })
        }, 1000)

    }

    componentDidMount(){
        clearInterval(this.int);
    }

    render(){

        var d = moment(this.props.date);
        // console.log("Date", d, this.props.date, d.hours(), d.seconds());
        // console.log('sprawdź', d );


        var currentDayOfMonth = this.state.current.date();
        var dayOfChoice = d;
        // console.log("sprawdź aktualny dzień miesiąca", currentDayOfMonth);
        // console.log('sprawdż wybrany dzień miesiąca', dayOfChoice);

        var currentHour = this.state.current.hour();
        // console.log("pokaż aktualną godzinę dnia", currentHour);
        // console.log('Difference is ', d.diff(this.state.current, 'hour'), 'hour');

        const showDate = d.format("MMMM, Do, YYYY");
        console.log(showDate);

        // var now = moment(new Date()); //todays date
        // var end = moment(d); // another date
        // var duration = moment.duration(now.diff(end));
        // var days = duration.asDays();
        // console.log(days)

        const duration = moment.duration(this.state.current.diff(d, 'hour'));
        const hours = duration.hours();
        console.log(hours);



        const futureTime = (
            <div>
                <div>Your big day is on </div>
                <div className="showdate">{showDate.toString()}, so in: </div>
                <div className="deadline-timer-container">
                    <div className="deadline-days">{d.diff(this.state.current, 'days')} days</div>
                    <div className="deadline-hours">{d.diff(this.state.current, 'hour')} hours</div>
                    <div className="deadline-minutes">{d.diff(this.state.current, 'minute')} minutes</div>
                    <div className="deadline-seconds">{d.diff(this.state.current, 'second')} seconds</div>
                </div>
            </div>);

        if (d.diff(this.state.current, 'days') < 0) {
            return <div>Pick your wedding's date</div>
        } else {
            return futureTime;
        }
    }
}