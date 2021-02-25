import React ,{ Component } from 'react'
import './App.css';
import Home from './Home'
import Login from './Login'
import fire from './firebase'

class App extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      user:{}
    }
  }
componentDidMount(){
  this.authListner();
}

  authListner(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user)
      {
        this.setState({user})
      }
      else
      {
        this.setState({user:null})
      }
    })
  }
  render(){
    return (
      <div className="App">
        {this.state.user ? (<Home/>) :(<Login/>)}
      </div>
    );
  }
  
}

export default App;
