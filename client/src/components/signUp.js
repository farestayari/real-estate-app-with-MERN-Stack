import React  from 'react';
const SignUp = () => {
    return(
    <div className="signup-form header-transparent " id="signup" tabindex="-1" role="dialog" aria-labelledby="sign-up" aria-hidden="true">
        <div className= "login-pop-form" role="document">
            <div id="sign-up">
                <div>
                    <h4>Sign Up</h4>
                    <div className="login-form">
                        <form>
                            
                            <div className="row">
                                
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <div className="input-with-icon">
                                            <input type="text" className="form-control" placeholder="Full Name"/>
                                            <i className="ti-user"></i>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <div className="input-with-icon">
                                            <input type="email" className="form-control" placeholder="Email"/>
                                            <i className="ti-email"></i>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <div className="input-with-icon">
                                            <input type="text" className="form-control" placeholder="Username"/>
                                            <i className="ti-user"></i>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <div className="input-with-icon">
                                            <input type="password" className="form-control" placeholder="*******"/>
                                            <i className="ti-unlock"></i>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <div className="input-with-icon">
                                            <input type="password" className="form-control" placeholder="123 546 5847"/>
                                            <i className="lni-phone-handset"></i>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <div className="input-with-icon">
                                            <select className="form-control">
                                                <option>As a Customer</option>
                                                <option>As a Agent</option>
                                                <option>As a Agency</option>
                                            </select>
                                            <i className="ti-briefcase"></i>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="form-group">
                                <button type="submit" className="btn btn-md full-width btn-theme-light-2 rounded">Sign Up</button>
                            </div>
                        
                        </form>
                    </div>
                    <div className="modal-divider"><span>Or login via</span></div>
                    <div className="social-login mb-3">
                        <ul>
                            <li><a href="#" className="btn connect-fb"><i className="ti-facebook"></i>Facebook</a></li>
                            <li><a href="#" className="btn connect-google"><i className="ti-google"></i>Google+</a></li>
                        </ul>
                    </div>
                    <div className="text-center">
                        <p className="mt-5"><i className="ti-user mr-1"></i>Already Have An Account? <a href="#" className="link">Go For LogIn</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
}
export default SignUp;