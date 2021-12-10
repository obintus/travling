import React, { Component } from 'react'
import './Style.css'

class LandingPage extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 d-lg-none d-block">
                        <img className="right-background" src={require('./images/side-right.png')} alt="Right Section" />
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="form-cover">
                            <h1 className="form-headings">Travling!</h1>
                            <div className="main-form">
                                <form>
                                    <h2 className="form-name">Masuk</h2>
                                    <span className="name-span">Daftar</span>

                                    <input type="text" placeholder="Nomor Ponsel ata Email" className="form-inputs" />
                                    <input type="password" placeholder="Kata Sandi" class="form-inputs form-password" />
                                    <i className="fa fa-eye" id="togglePassword"></i>

                                    <button type="submit" class="submit-button">MASUK</button>

                                    <small class="forgot-password">Lupa Kata Saudi? <a href="">Klik disini</a></small>
                                </form>

                                <div className="signup-cover">
                                    <p className="signup-text">--------------- ata masuk dengan -------------------</p>
                                    <a href="" className="socials"><i class="fa fa-google"></i> Google</a>
                                    <a href="" className="socials"><i class="fa fa-facebook"></i> Facebook</a>
                                </div>
                            </div>

                            <p className="copyright-sign">&copy; 2021 Travling. All Rights Reserved</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="landingsection">
                            <img className="right-background hidden" src={require('./images/side-right.png')} alt="Right Section" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage;
