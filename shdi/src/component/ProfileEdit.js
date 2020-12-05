import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../component/Header';

class ProfileEdit extends React.Component  {

  constructor(props){
    super(props);
    this.state ={

    }
  }

 

  render() {
    return( 
      <div className="bgcolor">
        <Header />
          <div className="sterpace">
            <form>
            <div className="gridspace nopadder">
                <div className="pannelgrid padding">
                  
                  <h3>Anya Burgis</h3>
                  <div className="pannelhard">
                    <div className="textviewsleft">Age</div>
                    <div className="textviewleft">
                      <input type="date" className="form-control" />
                    </div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="pannelhard">
                    <div className="textviewsleft">Height</div>
                    <div className="textviewleft">
                    <select className="form-control">
                                <option>Select</option>
                                <option >5' 7"</option>
                                <option >4ft</option>
																<option >4ft 1in</option>
																<option >4ft 2in</option>
																<option >4ft 3in</option>
																<option >4ft 4in</option>
																<option >4ft 5in</option>
																<option >4ft 6in</option>
																<option >4ft 7in</option>
																<option >4ft 8in</option>
																<option >4ft 9in</option>
																<option >4ft 10in</option>
																<option >4ft 11in</option>
																<option >5ft</option>
																<option >5ft 1in</option>
																<option >5ft 2in</option>
																<option >5ft 3in</option>
																<option >5ft 4in</option>
																<option >5ft 5in</option>
																<option >5ft 6in</option>
																<option >5ft 7in</option>
																<option >5ft 8in</option>
																<option >5ft 9in</option>
																<option >5ft 10in</option>
																<option >5ft 11in</option>
																<option >6ft</option>
																<option >6ft 1in</option>
																<option >6ft 2in</option>
																<option >6ft 3in</option>
																<option >6ft 4in</option>
																<option >6ft 5in</option>
																<option >6ft 6in</option>
																<option >6ft 7in</option>
																<option >6ft 8in</option>
																<option >6ft 9in</option>
																<option >6ft 10in</option>
																<option >6ft 11in</option>
																<option >7ft</option>
																<option >7ft 1in</option>
																<option >7ft 2in</option>
																<option >7ft 3in</option>
																<option >7ft 4in</option>
																<option >7ft 5in</option>
                      </select>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="pannelhard">
                    <div className="textviewsleft">Marital Status</div>
                    <div className="textviewleft">
                      <select className="form-control">
                          <option >Never Married</option>
                          <option >Never Married</option>
                          <option >Divorcee</option>
                          <option >Widow</option>
                          <option >Widower</option>
                      </select>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="pannelhard">
                    <div className="textviewsleft">Community</div>
                    <div className="textviewleft">
                    <select className="form-control">
                      <option >Garhwali</option>
                      <option >Kumaoni</option>
										  <option >Garhwali</option>
										  <option >Jaunsari</option>
										  <option >Outside Uttarakhand</option>
                    </select>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="pannelhard">
                    <div className="textviewsleft">Belongs to</div>
                    <div className="textviewleft">
                    <select className="form-control">
                      <option>Select</option>
                      <option >Uttarkashi</option>
                      <option >Almora</option>
															  <option >Bageshwar</option>
															  <option >Chamoli</option>
															  <option >Champawat</option>
															  <option >Dehradun</option>
															  <option >Haridwar</option>
															  <option>Nainital</option>
															  <option >Pauri</option>
															  <option>Pithoragarh</option>
															  <option>Rudraprayag</option>
															  <option >Tehri</option>
															  <option>Udham S Nagar</option>
															  <option>Uttarkashi</option>
                                <option>Others</option>
                                </select>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="pannelhard">
                    <div className="textviewsleft">Lives in</div>
                    <div className="textviewleft">Dlelhi</div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="pannelhard">
                    <div className="textviewsleft">Education</div>
                    <div className="textviewleft">B.com</div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="pannelhard">
                    <div className="textviewsleft">Profession</div>
                    <div className="textviewleft">It</div>
                    <div className="clearfix"></div>
                  </div>
                  
                </div>
            </div>
            <div className="gridspace nopadder ">
                <div className="pannelgrid padding">
                  
                  <h3>About You</h3>
                  <div className="pannelhard">
                    <p>Lorem Ipsume max 400 min word 100 ya fir no limit</p>
                  </div>
                  <div className="pannelhard">
                    <div className="textviewsleft">Name</div>
                    <div className="textviewleft">Amit</div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="pannelhard">
                    <div className="textviewsleft">Last Name</div>
                    <div className="textviewleft">Rawat</div>
                    <div className="clearfix"></div>
                  </div>
                </div>
            </div>
            <div className="gridspace nopadder">
                <div className="pannelgrid padding">
                  
                  <h3>Education And Location</h3>
                  <div className="pannelhard">
                    <div className="textviewsleft">Profession</div>
                    <div className="textviewleft">It</div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="pannelhard">
                    <div className="textviewsleft">Job Sector</div>
                    <div className="textviewleft">Private</div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="pannelhard">
                    <div className="textviewsleft">Salary</div>
                    <div className="textviewleft">Rs 85,00,000 - 97,50,000 per year</div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="pannelhard">
                    <div className="textviewsleft">Education</div>
                    <div className="textviewleft">B.com</div>
                    <div className="clearfix"></div>
                  </div>
                </div>
            </div>
            <div className="gridspace nopadder">
                <div className="pannelgrid padding">
                  
                  <h3> Location & Origin</h3>
                  <div className="pannelhard">
                    <div className="textviewsleft">Community</div>
                    <div className="textviewleft">Ghrhwali</div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="pannelhard">
                    <div className="textviewsleft">Gotra</div>
                    <div className="textviewleft">kds</div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="pannelhard">
                    <div className="textviewsleft">Belongs to</div>
                    <div className="textviewleft">Uttarkashi</div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="pannelhard">
                    <div className="textviewsleft">Lives in?</div>
                    <div className="textviewleft">delhi</div>
                    <div className="clearfix"></div>
                  </div>
                </div>
            </div>
            <div className="gridspace nopadder">
                <div className="pannelgrid padding">
                  
                  <h3>Family Background</h3>
                  <div className="pannelhard">
                    <div className="textviewsleft">Father </div>
                    <div className="textviewleft">Rs rawat Govt. job</div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="pannelhard">
                    <div className="textviewsleft">Mother</div>
                    <div className="textviewleft">Deepa Rawat House Wife</div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="pannelhard">
                    <div className="textviewsleft">Brother</div>
                    <div className="textviewleft">9:00 Am</div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="pannelhard">
                    <div className="textviewsleft">Sister</div>
                    <div className="textviewleft">No</div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="pannelhard">
                    <div className="textviewsleft">About Family</div>
                    <div className="textviewleft">alskdjf a;ldskfj ;lkdsajf ;ldsakjf ;ljds a</div>
                    <div className="clearfix"></div>
                  </div>
                </div>
            </div>
            <div className="gridspace nopadder">
                <div className="pannelgrid padding">
                  
                  <h3>Lifestyle & Attributes </h3>
                  <div className="pannelhard">
                    <div className="textviewsleft">Marital Status</div>
                    <div className="textviewleft">Never Married</div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="pannelhard">
                    <div className="textviewsleft">Age</div>
                    <div className="textviewleft">500000</div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="pannelhard">
                    <div className="textviewsleft">Parent Number</div>
                    <div className="textviewleft">098098098887</div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="pannelhard">
                    <div className="textviewsleft">Height</div>
                    <div className="textviewleft">5.7</div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="pannelhard">
                    <div className="textviewsleft">Weight</div>
                    <div className="textviewleft">70 KG</div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="pannelhard">
                    <div className="textviewsleft">Body Type</div>
                    <div className="textviewleft">Average</div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="pannelhard">
                    <div className="textviewsleft">Complexion</div>
                    <div className="textviewleft">White</div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="pannelhard">
                    <div className="textviewsleft">Diet</div>
                    <div className="textviewleft">Vegitarien</div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="pannelhard">
                    <div className="textviewsleft">Drinks?</div>
                    <div className="textviewleft">No</div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="pannelhard">
                    <div className="textviewsleft">Smokes?</div>
                    <div className="textviewleft">No</div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="pannelhard">
                    <div className="textviewsleft">Special Cases?</div>
                    <div className="textviewleft">No</div>
                    <div className="clearfix"></div>
                  </div>
                </div>
            </div>
            <div className="gridspace nopadder">
                <div className="pannelgrid padding">
                  
                  <h3>Astro Info</h3>
                  <div className="pannelhard">
                    <div className="textviewsleft">Date of Birth</div>
                    <div className="textviewleft">29 Mar 1990</div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="pannelhard">
                    <div className="textviewsleft">Place of Birth</div>
                    <div className="textviewleft">Delhi</div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="pannelhard">
                    <div className="textviewsleft">Time of Birth</div>
                    <div className="textviewleft">10:3 Am</div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="pannelhard">
                    <div className="textviewsleft">Manglik?</div>
                    <div className="textviewleft">No</div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="pannelhard">
                    <div className="textviewsleft">Weight</div>
                    <div className="textviewleft">70 KG</div>
                    <div className="clearfix"></div>
                  </div>
                </div>
            </div>
            <div className="gridspace nopadder">
                <div className="pannelgrid padding">
                  
                  <h3>About Preferred Partner</h3>
                  <div className="pannelhard">
                    <div className="textviewsleft">Community</div>
                    <div className="textviewleft">29 Mar 1990</div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="pannelhard">
                    <div className="textviewsleft">Caste</div>
                    <div className="textviewleft">Delhi</div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="pannelhard">
                    <div className="textviewsleft">Marital Status</div>
                    <div className="textviewleft">10:3 Am</div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="pannelhard">
                    <div className="textviewsleft">Age</div>
                    <div className="textviewleft">No</div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="pannelhard">
                    <div className="textviewsleft">Height</div>
                    <div className="textviewleft">70 KG</div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="pannelhard">
                    <div className="textviewsleft">Manglik Status</div>
                    <div className="textviewleft">70 KG</div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="pannelhard">
                    <div className="textviewsleft">Education</div>
                    <div className="textviewleft">70 KG</div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="pannelhard">
                    <div className="textviewsleft">Profession</div>
                    <div className="textviewleft">70 KG</div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="pannelhard">
                    <div className="textviewsleft">Employed In</div>
                    <div className="textviewleft">70 KG</div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="pannelhard">
                    <div className="textviewsleft">Annual Income</div>
                    <div className="textviewleft">70 KG</div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="pannelhard">
                    <div className="textviewsleft">State Living In</div>
                    <div className="textviewleft">70 KG</div>
                    <div className="clearfix"></div>
                  </div>
                </div>
            </div>
          
            <div className="buttonara">
                    <button>Update</button>
                  </div>
                  </form>
           </div>
       </div>
    )
  }
}
export default ProfileEdit;
