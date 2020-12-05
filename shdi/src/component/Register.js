import React from 'react';
import config from "../component/config";


class Register extends React.Component  {

  
  constructor(props){
    super(props);
    this.state ={
      name:"",
      email:"",
      mobile:"",
      password:"",
    }
    this.registerHandler = this.registerHandler.bind(this);
    this.onChange = this.onChange.bind(this);
  }  

  onChange = e => {   
    this.setState({ [e.target.name]: e.target.value });
  };

  registerHandler (e) {
    console.log("work");
    e.preventDefault();
    let { name,
        email,
        mobile,
        password,
        } = this.state;

    fetch(`${config.apiUrl}/signup`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json',
        'Accept': 'application/json' },
        body: JSON.stringify(this.state)
       })
        .then((response) => response.json())
        .then((res) => {
                console.log('work', res);
                localStorage.setItem('token', res.tokan);
               
        })
  }

  render() {
    return( 
      <div>
          <section className="bgAll">
              <div className="loginara">
                  <div className="innergridHeader">
                    <h3>Register Free</h3>
                    <p>And Find Your Partner</p>
                  </div>
                  <div className="loginbody">
                      <form onSubmit={this.registerHandler} autoComplete="off" >
                        <div className="formGrid">
                          <label>Name</label>
                          <input type="text" 
                          name="name" 
                          value={this.state.name} 
                          onChange={this.onChange} 
                          className="form-control" />
                        </div>

                       
                        <div className="formGrid">
                          <label> Email</label>
                          <input type="email" name="email" 
                          value={this.state.email} 
                          onChange={this.onChange} 
                          className="form-control" />
                        </div>
                        <div className="formGrid">
                          <label>Phone</label>
                          <input type="number" name="mobile"
                          value={this.state.mobile} 
                          onChange={this.onChange} 
                          className="form-control" />
                        </div>
                        <div className="formGrid">
                          <label>Password</label>
                          <input type="password" name="password" 
                          value={this.state.password} 
                          onChange={this.onChange} 
                          className="form-control" />
                        </div>
                       
                        <div className="buttonsubmit">
                          <button>Submit</button>
                        </div>
                      </form>
                      <br></br>
                  </div>
                
              </div>
          </section>
      </div>
    )
  }
}
export default Register;
