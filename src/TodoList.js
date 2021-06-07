import React from 'react';
import "./TodoListStyle.css";

class TodoList extends React.Component{
state={
    isupdating: false
};

togglefun=()=>{
    this.setState({
        isupdating:!this.state.isupdating     
    });
}
    render(props){
       const myitems=this.props.itemstate;
       const listofitems=myitems.map(items=>{
           return(
               <div className="lists" key={items.key}>
                <h4>{items.text}  
                 <span><button className="delete" onClick={()=>this.props.deleteitem(items.key)}>Delete</button> 
                  <span><button className="update" onClick={this.togglefun} >Update</button></span> </span>
               
                 </h4>
               </div>
           )
       })

       if(this.state.isupdating == true){
           return "will be updating";
       }
       
       return(
            <div>
                 {listofitems}
            </div>
        )



    }

}
export default TodoList;