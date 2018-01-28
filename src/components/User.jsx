import React from 'react';


export class User extends React.Component{

    constructor(props) {
        super(props);
        //Pierwsza wartość inputa ustawiona na '':
        this.state = {
            name: '',
            isOn: false
        };
    }

    handleNameChange = (event) => {
        const name = event.target.value.replace(/\d/g, '');
        this.setState({name: name});
    };


    render(){
        return <div className="user-container">
                <h1>Hello {this.state.name} !</h1>
                <div className="user-pic"></div>
                <div className="user-name">What's your name?</div>
                <input type="text"
                       value={this.state.name}
                       onChange={this.handleNameChange}
                        />
            </div>
    }
}