import React from 'react';
 import "./App.css";
 import TodoList from "./TodoList.js";
class App extends React.Component{
constructor(props){
super(props);
this.state={
  items:[],
  currentitem:{
    text:'',
    key:'' 

  }

}
this.handleinput=this.handleinput.bind(this);
this.additem=this.additem.bind(this);
this.deleteitem=this.deleteitem.bind(this);
}
additem(e){
e.preventDefault();
const newitem=this.state.currentitem;   
 console.log(newitem);

       if(newitem.text !==""){
         const arraycopy=[...this.state.items,newitem];
          this.setState({
          items:arraycopy, 
          currentitem:{
            text:'',
            value:''
          }
         })
           
        }
}


handleinput(e){
this.setState({
  currentitem:{
    text:e.target.value,
    key:Date.now()
  }
})
}
deleteitem(key){
  const filtereditems=this.state.items.filter(item => item.key !==key);
 console.log(filtereditems);
 
  this.setState(
   {
     items:filtereditems
   }
 )

}

// updateitem(text,key){
//   const itemstate=this.state.items;
//   itemstate.map()

// }

  render(){
     return(
       <React.Fragment>
         <div className="App">
           <h2 className="mainheading">ToDo Application</h2>
        <form id="todo-form" onSubmit={this.additem}>
        <input type="text" placeholder="enter the text" value={this.state.currentitem.text}
        onChange={this.handleinput}/>
        <button type="submit">Add</button>


        </form>
        <TodoList itemstate={this.state.items} 
                  deleteitem={this.deleteitem} 
                  updateitem={this.updateitem} />
        </div> 

       </React.Fragment>
     )
  }



}
export default App;