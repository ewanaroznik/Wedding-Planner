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
            <li>zadanie</li>
        </ol>
    }
}
//
// class TaskItem extends React.Component{
//     constructor(props){
//         super(props);
//            this.state={
//                text: "",
//            }
//
//
//
//     }
//
//     handleTextChange = (event) => {
//       this.setState({
//           text: event.target.value
//       })
//     };
//
//     render(){
//         return <input type="text" value={this.state.text} onChange={this.handleTextChange}/>
//     }
// }
//
//
//


// class ToDoItem extends React.Component{
//     handleDoneClick = () => {
//         //Pamiętaj o sprawdzeniu czy
//         //atrybut istnieje i można go wywołać!
//         if ( typeof this.props.onDone === 'function' ){
//             this.props.onDone(this.props.title);
//         }
//     };
//     render(){
//         return <li><span>{this.props.title}</span>
//             <button
//                 onClick={this.handleDoneClick}
//             >Zakończ</button></li>;
//     }
// }
//
// export class TaskList extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             items: this.props.items
//         };
//     }
//     handleItemDone = (title) => {
//         const newItems = this.state.items.filter(item => {
//             return item !== title;
//         });
//         this.setState({
//             items: newItems
//         });
//     };
//     render(){
//
//
//         const items = this.state.items.map(item => {
//             return <ToDoItem
//                 title={item}
//                 onDone={this.handleItemDone}
//             />
//         });
//         return <ul>
//             {items}
//         </ul>;
//     }
// }