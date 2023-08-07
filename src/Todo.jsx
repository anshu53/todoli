import React from "react";
class Todo extends React.Component{
    constructor() {
        super();
        this.state={
            lists: [],
            nameofList: {
                text: "",
                key:""
           },
        }
       this.handleChange= this.handleChange.bind(this);
        this.handleaddclick = this.handleaddclick.bind(this);
    }
    handleChange(event) {
        this.setState({
            nameofList: {
                text: event.target.value,
                key: Date.now()
            }
            })
    }
    handleaddclick() {
        const newItem = this.state.nameofList;
        const newitems = [...this.state.lists, newItem];
        console.log(newitems);
        this.setState({
            lists: newitems,
            nameofList: {
                text: "",
                key:""

            }
        })
    }
    // handleaddclick() { this.setState({nameofList:"",lists:[...this.state.lists,this.state.nameofList]})
    // }
    render() {
        return (
            <>
                <h1>Users</h1>
                <input type="text" value={this.state.nameofList.text} onChange={this.handleChange} name="name of list" /><br /><br />
                <button onClick={this.handleaddclick}>Submit</button>
                <ul>
                    {this.state.lists.map((data)=>(
                    <li key={data.key}>{data.text}</li>
                    ))}
                </ul>
            </>
        )
    }
    
        
    
}
export default Todo;
