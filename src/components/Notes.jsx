import React from 'react';

export class NotesList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text: "",
            notes: [],
            justSubmited: false
        };
        this.changeText = this.changeText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    changeText(newText){
        this.setState({
            text: newText
        })
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(e);
        this.setState({
            notes: [...this.state.notes, this.state.text],
            text: '',
            justSubmited: true
        })
    }

    render() {

        let notes = this.state.notes.map((e,i) => {
            return <div>
                <li key={i}>{e}</li>
                <input type="checkbox"/>
            </div>
        });

        return (
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <legend>Note down important information or contacts:</legend>
                        <NoteText onChange={this.changeText}/>
                        <NewNote justSubmited={this.state.justSubmited} text={this.state.text}/>
                        <input type="submit" value="Submit" />
                        <ul className="notes-list">
                            {notes}
                        </ul>
                    </label>
                </form>

            )
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

    componentWillReceiveProps(){
        this.setState({
            text: this.props.justSubmited ? '' : this.state.text
        })
    }

    handleTextChange(e){
        this.setState({
            text: this.props.justSubmited ? '' : e.currentTarget.value
        }, ()=>{
            this.props.onChange(this.state.text);
        })
    }
    render(){
        return <textarea rows="10" cols="20" className="text-field" value={this.state.text} onChange={this.handleTextChange}>.</textarea>
    }
}

class NewNote extends React.Component {
    render() {
        return <div className="new-note">{this.props.text}</div>
    }
}
