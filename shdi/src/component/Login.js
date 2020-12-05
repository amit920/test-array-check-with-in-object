import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter , Router, Route, Switch } from 'react-router-dom';
import config from "../component/config";




class Login extends React.Component  {

  constructor(props){
    super(props);
    this.state ={
      email:"",
      password:"",
      message:"",
      popmessbox:false,
      token : null,
      login:false,
    }
    this.onchange = this.onchange.bind(this);
    this.loginHandle = this.loginHandle.bind(this)
  }     

 
onchange = (e) =>{
  this.setState({ [e.target.name]: e.target.value });
}
loginHandle = (e) =>{
  
  console.log("work");
  e.preventDefault();
  let { 
    email,
    password,
    } = this.state;

fetch(`${config.apiUrl}/logIn`, {
    method: "POST",
    headers: { 'Content-Type': 'application/json',
    'Accept': 'application/json' },
    body: JSON.stringify(this.state) 
   })
    .then((response) => response.json())
    .then((res) => {
            console.log('work', res);
            localStorage.setItem("res", JSON.stringify({ token: res.token }));    
            this.setState({message:res.message})
            if(res !== true){
              this.setState({popmessbox:true});
            }
            if(res.status == true){
              window.location.href = `/Dashboard`;
            }
            
    }
      
    )
}


  render() {
    return( 


      <div>
          <section className="bgAll relativebox">
            <div className={
              (this.state.popmessbox) ? "sedomess disp" : "sedomess"
            }
            >
              <p>{this.state.message}</p>
            </div>
              <div className="loginara">
                  <div className="innergridHeader">
                    <h3>Login Free</h3>
                    <p>And Find Your Partner</p>
                  </div>
                  <div className="loginbody">
                      <form onSubmit={this.loginHandle} autoComplete="off" >
                        <div className="formGrid">
                          <label>Email Id</label>
                          <input type="text" name="email" value={this.state.email} 
                          onChange={this.onchange} className="form-control" required/>
                        </div>
                        <div className="formGrid">
                          <label>   Password</label>
                          <input type="password" name="password" value={this.state.password} 
                          onChange={this.onchange} className="form-control"  required />
                        </div>
                        <p>Forgot Password</p>
                        <div className="buttonsubmit">
                          <button>Login</button>
                        </div>
                        <div className="registerbutton">
                          <Link to="/register">Register</Link>
                        </div>
                      </form>
                  </div>
              </div>
          </section>
      
      </div>
      
    )
  }
}
export default Login;
