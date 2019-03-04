import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="body">

          <nav className="navbar-expand d-flex navbar-transparent-25 d-flex pt-2 pb-2">
            <a className="navbar-brand fs-24 pl-4 white" href="http://www.github.com/gr8fuldwg">Jon Josephson</a>
            {/* <a href="#"></a> */}
            <ul className="navbar-nav d-flex flex-fill justify-content-between pr-4 fs-22">
              <li className="nav-item dropdown ">
                <a className="nav-link ml-4 dropdown-toggle white" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Portfolio</a>
                <div className="dropdown-menu bg-dark">
                  <a className="dropdown-item white" href="https://pure-castle-46730.herokuapp.com/">Collaborative Weather App</a>
                  <div className="dropdown-divider"></div>
                  <h6 className="dropdown-header font-weight-bold">CSS-MIMICWORK </h6>
                  <a className="dropdown-item white" href="https://gr8fuldwg.github.io/css-mimicwork/">Mimicwork Homepage</a>
                  <a className="dropdown-item white" href="https://gr8fuldwg.github.io/css-mimicwork/spotify">Spotify</a>
                  <a className="dropdown-item white" href="https://gr8fuldwg.github.io/css-mimicwork/github-nav">Github-Nav</a>
                  <a className="dropdown-item white" href="https://gr8fuldwg.github.io/css-mimicwork/pinterest-page">Pinterest Page</a>
                  <a className="dropdown-item white" href="https://gr8fuldwg.github.io/css-mimicwork/youtube-sidenav">YouTube-SideNav</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item white" href="https://gr8fuldwg.github.io/lite-brite/">Lite-Brite Game</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item white" href="https://gr8fuldwg.github.io/chuck-jokes/">'Jokes' API</a>
                </div>
              </li>
              <li className="nav-item " data-toggle="modal" data-target="#exampleModalLong">
                <a className="nav-link margin-right-200 justify-content-center white" href="#">About Me</a>

                {/* <!-- Modal --> */}
                <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content d-flex justify-content-center">
                      <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        A creative web developer who is passionate about coding. Loves learning and implementing new techonologies while staying up to speed on modern computing. Graduate of <a  href="http://gainesvilledevacademy.com/">Gainesville Dev Academy</a> (GDEV), a fully immersive coding bootcamp. Let's discuss what you or your business needs!
                </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <a className="nav-link white" data-toggle="modal" data-target="#exampleModal" href="#">Contact</a>

                {/* Contact Modal */}

                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">

                      <div className="modal-header d-flex justfiy-content-center">
                        {/* <h3 className="modal-title">Contact</h3> */}

                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>

                      <div className="modal-body">

                        <h1 className="d-flex justify-content-center">Contact</h1>
                        <br />
                        <span className="d-flex justify-content-center">Email:</span>
                        <span className="d-flex justify-content-center">jonjosephson1@gmail.com</span>
                        <br />
                        <span className="d-flex justify-content-center">Cell:</span>
                        <span className="d-flex justify-content-center">352-219-3194</span>
                        <br />
                        <span className="d-flex justify-content-center">Location:</span>
                        <span className="d-flex justify-content-center">Gaineville, Fl, USA</span>
                        <br />

                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <svg height="32" className="octicon octicon-mark-github text-right" viewBox="0 0 16 16" version="1.1" width="32"
              aria-hidden="true">
              <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </nav>
        </div>

        <img className="circle-img d-flex justify-content-center mt-4 mb-2" />



        <section>
          <div className="d-flex justify-content-center shadow-lg">
            <h1 className="pl-3 mt-3 footer text-white text-center">Hi, I'm Jon ;)<br /> I develop computer software.</h1>
          </div>
        </section>

        <section className="App-footer navbar fixed-bottom  text-white">
          <div className="d-flex pl-4 pb-4">
            email: jonjosephson1@gmail.com 
          </div>
          <div className="d-flex pr-4 pb-4">
            <a className="text-white" href="tel: 3522193194">cell: 352-219-3194</a>
          </div>
        </section>

      </div>

    );
  }
}

export default App;
