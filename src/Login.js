
import { BrowserRouter, Route, Link } from "react-router-dom";

import React,{Component} from 'react'
import fire from './firebase'
class Login extends Component{
    constructor(props)
    {
      super(props)
      this.login=this.login.bind(this)
      this.signup=this.signup.bind(this)

      this.handleChange=this.handleChange.bind(this)
      this.state={
          email:"",
          password:""
      }
      
    }
    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log(u)
        }).catch((err)=>{
            console.log(err)
        })
    }

    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log(u)
        }).catch((err)=>{
            console.log(err)
        })
    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        return(
            <div className="form">
            <h2 style={{color:'white'}}>login form</h2>
                <form>

                   <div className="email">
                   <h5>Email</h5>
                   <input type="email"
                   id="email"
                   name="email"
                   placeholder="enter your Email"
                   onChange={this.handleChange}
                   value={this.state.email}/>
                   </div>
                   <div className="password">
                   <h5>password</h5>
                    <input type="password"
                    id="password"
                    name="password"
                    placeholder="enter password"
                    onChange={this.handleChange}
                    value={this.state.password}
                        />
                   </div>
                   <div className="button">
                        <button onClick={this.login}>Login</button>
                        <button onClick={this.signup}>Sign Up</button>
                        </div>
                </form>
            </div>
        )
    }
}

export default Login;