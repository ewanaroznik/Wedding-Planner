import React from 'react';

export class NotesList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text: "bla",
        };
        this.changeText = this.changeText.bind(this)
    }

    changeText(newText){
        this.setState({
            text: newText
        })
    }

    render() {

        return (<div>
                    <NoteText onChange={this.changeText}/>
                    <NewNote text={this.state.text}/>

                </div>)
    }
}

class NoteText extends React.Component{

    constructor(props) {
        super(props);
        this.state={
          text: null,
        };

        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange(e){
       const text = e.target.value;
        this.props.onChange(text);
    }

    render(){
        return <textarea value={text} onChange={this.handleTextChange}>.</textarea>
    }
}


class NewNote extends React.Component {
    render() {
        text = this.props.text;
        return <textarea className="new-note">{text}</textarea>
    }
}