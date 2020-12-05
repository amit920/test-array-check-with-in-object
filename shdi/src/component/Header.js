import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component  {

  constructor(props){
    super(props);
    this.state ={
      condition:false,
    }
  }

  slideClick = () =>{
    this.setState({ condition: !this.state.condition });
  }
  removeslideClick = () =>{
    this.setState({ condition: !this.state.condition });
  }




  

  render() {

    return( 
      <div>
         <div className="header">
           <div className={this.state.condition ? "navmain grid" : "navmain "}>
             <nav>
               <div className="profilearea">
                 <div className="mainproarea">
                    <Link to="/Profile">
                        <div className="leftphoto">
                              <img src={require("../image/model.jpg")}
                              alt="..."  />
                        </div>
                        <div className="rightContent">
                              <h3>hd3443</h3>
                              <p>
                                Edit Profile <i className="fa fa-pencil" aria-hidden="true"></i>  
                              </p>
                        </div>
                    </Link>
                 </div>
               </div>
               <ul className="gourl">
                 <li><a href="">Home</a></li>
                 <li><a href="">Search</a></li>
                 <li><a href="">Messages</a></li>
                 <li><a href="">Search by Id</a></li>
                 <li><a href="">Buy Membership</a></li>
                 <li><a href="">Contact Support</a></li>
                 <li><a href="">Profile Visitor</a></li>
               </ul>
             </nav>
           </div>
              <div className="upperAra">
                  <div className="hambruger" onClick={this.slideClick}>
                      <div className="topSlice"></div>
                      <div className="midSlice"></div>
                      <div className="bottomSlice"></div>
                  </div>
                  <div className="logo">
                      <img src={require("../image/logo.png")}
                       alt="..."  />
                  </div>
                  <div className="listcheck">
                    <ul>
                      <li><a href=""><i className="fa fa-envelope" aria-hidden="true"></i></a></li>
                      <li><a href=""><i className="fa fa-bell" aria-hidden="true"></i></a></li>
                    </ul>
                  </div>
                  <div className="clearfix"></div>
              </div>
      </div>
      <div className={this.state.condition ? "shade show" : "shade"} onClick={this.removeslideClick} ></div>
         </div> 
          
    )
  }
}
export default Dashboard;
