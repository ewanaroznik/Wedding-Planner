import React from "react";

export class TaskList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: this.props.items
        };
    }



    render(){
        return <ol>
            <li>task</li>
        </ol>
    }
}