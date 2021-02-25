

import React,{Component} from 'react'
import fire from './firebase'
import Task from './task2/task2'
class Home extends Component{
    constructor(props)
    {
      super(props)
      this.state={
        
      }
      
    }
    logout(){
        fire.auth().signOut()
    }

    render(){
        return(
            <div className="home">
               <Task/>
               <button onClick={this.logout}>logout</button>
            </div>
        )
    }
}

export default Home;