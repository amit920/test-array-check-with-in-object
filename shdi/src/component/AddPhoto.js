import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Header from '../component/Header';




class AddPhoto extends React.Component  {

  constructor(props){
    super(props);
    this.state ={
      optionImg:[
        {profileImg:'https://www.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png'},
        {profileImg:'https://www.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png'},
        {profileImg:'https://www.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png'},
        {profileImg:'https://www.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png'},
        {profileImg:'https://www.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png'},
        {profileImg:'https://www.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png'},
      ]
    }
  }

 imagesHandler = (e,i,v) => {

  let valueSom = {...this.state.optionImg}

  valueSom[i][v] = e.target.files
  

  const reader = new FileReader();
  reader.onload = () => {
    if(reader.readyState === 2)
    {
      this.setState({
        valueSom
      })
    }
  }
  reader.readAsDataURL(e.target.files[0])
 }

  render() {
    return( 
      <div className="bgcolor">
        <Header />
          <div className="gridspace">
            <div className="container">
              <form>
                  <div className="row">
                      {this.state.optionImg.map((i,item)=> (
                          <div className="col-6" key={item.i}>
                              <div className="userImageProfile">
                               <img src={this.state.optionImg[0].profileImg} alt="..."  />
                              </div>
                              <div className="inputarea">
                                <label>
                                  <i class="fa fa-upload" aria-hidden="true"></i>
                                  <p>Upload Your Photo</p>
                                  <input type="file" name="upload-image"  accept="image/*" 
                                    onChange={(e) => {this.imagesHandler (e,i);}} />
                                </label>
                              </div>
                        </div>
                      ))}
                    
                  </div>
                </form>
            </div>
          </div>
          <div className="buttonara">
                  <button>Update</button>
                </div>
       
       </div>
    )
  }
}
export default AddPhoto;
