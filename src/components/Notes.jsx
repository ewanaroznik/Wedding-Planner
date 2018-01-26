import React from 'react';

export class NotesList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text: "",
        };
        this.changeText = this.changeText.bind(this)
    }

    changeText(newText){
        this.setState({
            text: newText
        })
    }

    render() {

        return (<form onSubmit={this.handleSubmit}>
                    <label> Here put your new note's text:
                        <NoteText onChange={this.changeText}/>
                        <NewNote text={this.state.text}/>
                        <input type="submit" value="Submit" />
                    </label>
                </form>)
    }
}

class NoteText extends React.Component{

    constructor(props) {
        super(props);
        this.state={
          text: '',
        };
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange(e){
        this.setState({
            text: e.currentTarget.value
        }, ()=>{
            this.props.onChange(this.state.text);
        })
    }
    render(){
        return <textarea className="text-field" value={this.state.text} onChange={this.handleTextChange}>.</textarea>
    }
}


class NewNote extends React.Component {
    render() {
        return <span className="new-note">{this.props.text}</span>
    }
}
