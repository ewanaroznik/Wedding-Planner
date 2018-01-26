export class Tasks extends React.Component {
    constructor(props){
        super(props);
        this.state={
            items: this.props.items,
        };
    }

    handleItemDone = (title) => {

        const newItems = this.state.items.filter(item => {
            return item !== title;
        });
        this.setState({
            items: newItems
        });

    };

    render(){

        const items = this.state.items.map(item=>{
            return <PlanningTaskItem title={item}
                                     onDone={this.handleItemDone}/>
        });

        return <div>
            <div>Podsumowanie aktywnych i wykonanych zadań: </div>
            <div  className="tasks-category"><span>Planowanie</span>
                <ol className="tasks-list">
                    <li>Wstępny plan
                        <input type="checkbox" className="checkbox"/>
                    </li>

                    <li>Wybierz miejsce ceremonii
                        <input type="checkbox" className="checkbox"/>
                    </li>

                    <input type="text" placeholder="add new task"/>

                    {items}

                </ol>
            </div>
        </div>
    }
}

class PlanningTaskItem extends React.Component{

    handleAddClick =()=> {
        if ( typeof this.props.onDone === 'function' ){
            this.props.onDone(this.props.title);
        }
    };

    render(){
        return  (<li><span>{this.props.title}</span>

            <button
                onClick={this.handleAddClick}
            >Add</button>
        </li>)
    }

}