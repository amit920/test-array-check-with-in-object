import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import config from "../component/config";




class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      myObj: [
        {
          heading: 'Portugal',
          id: 0,
          chk: false,
          list: [
            { name: 'aasiya', val: "Aasiya Jayavant", check: false, id: 0 },
            { name: 'luvleen', val: "Luvleen Lawrence", check: false, id: 1 },
            { name: 'rey', val: "Rey Miboume", check: false, id: 2 },
            { name: 'cayla', val: "Cayla Brister ", check: false, id: 3 },
          ]
        },
        {
          heading: 'Nicaragua',
          id: 1,
          chk: false,
          list: [
            { name: 'deveedaas', val: "Deveedaas Nandi ", check: false, id: 5 },
            { name: 'oasey', val: "Aasiya Jayavant", check: false, id: 6 },
            { name: 'xenie', val: "Xenie Dolezelova", check: false, id: 7 },
            { name: 'ezequiel', val: "Ezequiel Dengra", check: false, id: 8 },
          ]
        },
        {
          heading: 'Marshall Island',
          id: 2,
          chk: false,
          list: [
            { name: 'aaron ', val: "Aaron Almaraz ", check: false, id: 9 },
            { name: 'jelena', val: "jelena Denisova", check: false, id: 10 },
          ]
        }
      ]
    }
  }

  checkEvent(resId, objId) {
    this.state.myObj[resId].list[objId].check = !this.state.myObj[resId].list[objId].check;
    
    var zz = this.state.myObj[resId].list.map(res => {
      if (res.check) {
        return true;
      }
    })
    this.state.myObj[resId].chk = zz.includes(true)
    
    this.setState({obj:this.state.obj})
  }



  render() {
    return (
      <div>
        <section className="bgAll relativebox">
          <div>
            <div className="header">
              <div className="container">
                <div className="head">
                  <div className="logo">Logo</div>
                  <nav className="nav">
                    <ul>
                      <li>Home</li>
                      <li>My Portfolio</li>
                      <li>Clients</li>
                      <li>Get in Touch</li>
                    </ul>
                  </nav>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="formarea"  >
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-xs-6 col-sm-6">
                  <div className="whiteshater">
                    {
                      this.state.myObj.map((res, i) => (
                        <div key={i} className="pannerlbox">
                          <h1>{res.heading}</h1>
                          {
                            res.list.map((obj, j) => (
                              <ul key={j} className="itemlist">
                                <li>
                                  <label>
                                    < input type="checkbox"
                                      name="obj.name"
                                      checked={obj.check}
                                      onChange={this.checkEvent.bind(this, res.id, j)}
                                    />
                                    {obj.val}
                                  </label>
                                </li>
                              </ul>
                            ))
                          }
                        </div>
                      ))
                    }


                  </div>
                </div>
                <div className="col-md-6 col-xs-6 col-sm-6">
                  <div className="pannerlbox slater">
                    <div className="whiteshater">
                      {
                        this.state.myObj.map((res, i) => (
                          <div key={i} className="pannerlbox">
                            {(res.chk == true) ?
                              (
                                <h1>
                                  {res.heading}
                                </h1>
                              ) : null
                            }
                            {
                              res.list.map((obj, j) => (
                                (obj.check == true) ?
                                  (
                                    <div className="dkds">
                                      {obj.val}
                                      <span className="workkx" onClick={this.checkEvent.bind(this, res.id, j)}>x</span>
                                    </div>
                                  )
                                  : null
                              ))
                            }
                          </div>
                        ))
                      }


                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

      </div >

    )
  }
}
export default Login;
