import React from 'react';
import Header from '../component/Header';
class Profile extends React.Component  {

  constructor(props){
    super(props);
    this.state ={

    }
  }

 

  render() {
    return( 
      <div className="bgcolor">
        <Header />
            <div className="whitebg">
              <form>
              <div className="formGrid ">
                  <label>City/State.</label>
                 <input type="text" name="email" value={this.state.email} 
                   onChange={this.onchange} className="form-control" />
              </div>
              <div className="gricfirst">
                    <div className="formGrid girdhalf">
                        <label>Min Age.</label>
                      <input type="text" name="email" value={this.state.email} 
                        onChange={this.onchange} className="form-control" />
                    </div>
                    <div className="formGrid girdhalf">
                      <label>Max Age.</label>
                    <input type="text" name="email" value={this.state.email} 
                      onChange={this.onchange} className="form-control" />
                  </div>
                  <div className="formGrid girdhalf">
                      <label>Min Height.</label>
                    <input type="text" name="email" value={this.state.email} 
                      onChange={this.onchange} className="form-control" />
                  </div>
                  <div className="formGrid girdhalf">
                      <label>Max Height.</label>
                    <input type="text" name="email" value={this.state.email} 
                      onChange={this.onchange} className="form-control" />
                  </div>
              </div>
              <div className="formGrid ">
                  <label>Religion.</label>
                 <input type="text" name="email" value={this.state.email} 
                   onChange={this.onchange} className="form-control" />
              </div>
              <div className="formGrid ">
                  <label>Caste.</label>
                 <input type="text" name="email" value={this.state.email} 
                   onChange={this.onchange} className="form-control" />
              </div>
              <div className="gricfirst">
                  <div className="formGrid girdhalf">
                      <label>Min Income.</label>
                    <input type="text" name="email" value={this.state.email} 
                      onChange={this.onchange} className="form-control" />
                  </div>
                  <div className="formGrid girdhalf">
                      <label>Max Income.</label>
                    <input type="text" name="email" value={this.state.email} 
                      onChange={this.onchange} className="form-control" />
                  </div>
                  <div className="clearfix"></div>
              </div>
              <div className="moreoption">
                More Option <span><i class="fa fa-plus" aria-hidden="true"></i></span>
              </div>
              <div className="onshobox">
                  <div className="gricfirst">
                      <div className="formGrid ">
                          <label>Select Manglik Status.</label>
                        <input type="text" name="email" value={this.state.email} 
                          onChange={this.onchange} className="form-control" />
                      </div>
                      <div className="formGrid ">
                          <label>Select Education.</label>
                        <input type="text" name="email" value={this.state.email} 
                          onChange={this.onchange} className="form-control" />
                      </div>
                      <div className="formGrid ">
                          <label>Select Occupation.</label>
                        <input type="text" name="email" value={this.state.email} 
                          onChange={this.onchange} className="form-control" />
                      </div>
                      <div className="clearfix"></div>
                  </div>
              </div>
              </form>
                <div className="buttonara fiexed">
                  <button>Update</button>
                </div>
            </div>

       </div>
    )
  }
}
export default Profile;
