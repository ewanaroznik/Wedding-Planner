import React from "react";

export class TaskList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            items: ['wybrać świadków', 'zamówić zaproszenia']
        };
    }

    onChange = (event) => {
        this.setState({ term: event.target.value });
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            term: '',
            items: [...this.state.items, this.state.term]
        });
    };

    render() {
        return (
            <div>
                <h3>Get prepared task by task</h3>
                <div className="tasks-container">
                    <form onSubmit={this.onSubmit}>
                        <legend className="adding-tasks">Add new tasks here:</legend>
                        <input value={this.state.term} onChange={this.onChange} />
                        <button>Submit</button>
                    </form>
                    <List items={this.state.items} />
                </div>
            </div>

        );
    }
}

const List = props => (
    <ul>
        {
            props.items.map((item, index) => <li className="tasks-items" key={index}> - {item}
                <input type="checkbox" className="tasks-checkbox"/></li>)
        }
    </ul>
);

