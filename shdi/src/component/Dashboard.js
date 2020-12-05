import React from 'react';
import Header from '../component/Header';

import { Link } from 'react-router-dom';


class Dashboard extends React.Component  {

  constructor(props){
    super(props);
    this.state ={
      
    }
  }

  
  componentDidMount(){
    const token =  localStorage.getItem('token');
  
    if(token == null){
      window.location.href="/";
    }
  }


 
  render() {
    return( 
      <div className="bgcolor">
        <Header />
         
         <div className="pannel">
           <div className="container">
            <div className="row">            
              <div className="col-md-4 col-xs-12 col-sm-4">
                  <Link to="/ProfileDetail">
                    <div className="pannelgrid">
                      <div className="photoicon">
                        <div className="photoarea">
                          <span>5</span>
                          <i className="fa fa-picture-o" aria-hidden="true"></i>
                        </div>
                      </div>
                      <div className="figure">
                      <img src={require("../image/model.jpg")}
                          alt="..."  />
                      </div>
                      <div className="contentarea">
                        <div className="namearea">
                          <h3>Saw8394</h3>
                          <p>Last Seen At 1:40 PM</p>
                        </div>
                        <div className="half">
                            <p>28 Year 5'4"</p>
                            <p>Rawat</p>
                            <p>New Delhi</p>
                            <p>Uttrakhand</p>
                        </div>
                        <div className="half">
                            <p>Govt/Teacher</p>
                            <p>Rs. 7.5-10 Lakh</p>
                            <p>MBA/PGDM, B.com</p>
                            <p>Never Married</p>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </Link> 
                    <div className="requesyara">
                          <button>
                          <i className="fa fa-envelope" aria-hidden="true"></i>  
                            Send Request
                          </button>
                          <Link to="/profileDetail" className="viewDetails">
                          <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                            View Details
                          </Link>
                          <Link to="/profileDetail" className="viewDetails">
                          <i className="fa fa-comments" aria-hidden="true"></i>
                            Send Message
                          </Link>
                          <div className="clearfix"></div>
                    </div>
              </div>
              <div className="col-md-4 col-xs-12 col-sm-4">
                  <Link to="/ProfileDetail">
                    <div className="pannelgrid">
                      <div className="photoicon">
                        <div className="photoarea">
                          <span>5</span>
                          <i className="fa fa-picture-o" aria-hidden="true"></i>
                        </div>
                      </div>
                      <div className="figure">
                      <img src={require("../image/model.jpg")}
                          alt="..."  />
                      </div>
                      <div className="contentarea">
                        <div className="namearea">
                          <h3>Saw8394</h3>
                          <p>Last Seen At 1:40 PM</p>
                        </div>
                        <div className="half">
                            <p>28 Year 5'4"</p>
                            <p>Rawat</p>
                            <p>New Delhi</p>
                            <p>Uttrakhand</p>
                        </div>
                        <div className="half">
                            <p>Govt/Teacher</p>
                            <p>Rs. 7.5-10 Lakh</p>
                            <p>MBA/PGDM, B.com</p>
                            <p>Never Married</p>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </Link> 
                    <div className="requesyara">
                          <button>
                          <i className="fa fa-envelope" aria-hidden="true"></i>  
                            Send Request
                          </button>
                          <Link to="/profileDetail" className="viewDetails">
                          <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                            View Details
                          </Link>
                          <Link to="/profileDetail" className="viewDetails">
                          <i className="fa fa-comments" aria-hidden="true"></i>
                            Send Message
                          </Link>
                          <div className="clearfix"></div>
                    </div>
              </div>
              <div className="col-md-4 col-xs-12 col-sm-4">
                  <Link to="/ProfileDetail">
                    <div className="pannelgrid">
                      <div className="photoicon">
                        <div className="photoarea">
                          <span>5</span>
                          <i className="fa fa-picture-o" aria-hidden="true"></i>
                        </div>
                      </div>
                      <div className="figure">
                      <img src={require("../image/model.jpg")}
                          alt="..."  />
                      </div>
                      <div className="contentarea">
                        <div className="namearea">
                          <h3>Saw8394</h3>
                          <p>Last Seen At 1:40 PM</p>
                        </div>
                        <div className="half">
                            <p>28 Year 5'4"</p>
                            <p>Rawat</p>
                            <p>New Delhi</p>
                            <p>Uttrakhand</p>
                        </div>
                        <div className="half">
                            <p>Govt/Teacher</p>
                            <p>Rs. 7.5-10 Lakh</p>
                            <p>MBA/PGDM, B.com</p>
                            <p>Never Married</p>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </Link> 
                    <div className="requesyara">
                          <button>
                          <i className="fa fa-envelope" aria-hidden="true"></i>  
                            Send Request
                          </button>
                          <Link to="/profileDetail" className="viewDetails">
                          <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                            View Details
                          </Link>
                          <Link to="/profileDetail" className="viewDetails">
                          <i className="fa fa-comments" aria-hidden="true"></i>
                            Send Message
                          </Link>
                          <div className="clearfix"></div>
                    </div>
              </div>
              <div className="col-md-4 col-xs-12 col-sm-4">
                  <Link to="/ProfileDetail">
                    <div className="pannelgrid">
                      <div className="photoicon">
                        <div className="photoarea">
                          <span>5</span>
                          <i className="fa fa-picture-o" aria-hidden="true"></i>
                        </div>
                      </div>
                      <div className="figure">
                      <img src={require("../image/model.jpg")}
                          alt="..."  />
                      </div>
                      <div className="contentarea">
                        <div className="namearea">
                          <h3>Saw8394</h3>
                          <p>Last Seen At 1:40 PM</p>
                        </div>
                        <div className="half">
                            <p>28 Year 5'4"</p>
                            <p>Rawat</p>
                            <p>New Delhi</p>
                            <p>Uttrakhand</p>
                        </div>
                        <div className="half">
                            <p>Govt/Teacher</p>
                            <p>Rs. 7.5-10 Lakh</p>
                            <p>MBA/PGDM, B.com</p>
                            <p>Never Married</p>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </Link> 
                    <div className="requesyara">
                          <button>
                          <i className="fa fa-envelope" aria-hidden="true"></i>  
                            Send Request
                          </button>
                          <Link to="/profileDetail" className="viewDetails">
                          <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                            View Details
                          </Link>
                          <Link to="/profileDetail" className="viewDetails">
                          <i className="fa fa-comments" aria-hidden="true"></i>
                            Send Message
                          </Link>
                          <div className="clearfix"></div>
                    </div>
              </div>
            </div>
           </div>
         </div>
      </div>
    )
  }
}
export default Dashboard;
