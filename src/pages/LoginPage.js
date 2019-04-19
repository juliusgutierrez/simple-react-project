import React, {Component} from 'react';
import './../login.css'
import validateInput from './../_shared/validations/loginValidation'

class LoginPage extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            username: "",
            password: "",
            errors: {},
            isLoading: false
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.isValid()) {
            this.setState({errors: {}, isLoading: true});
            //this.props.login(this.state);
        }
        console.log(this.state);
    }

    onChange(evt) {
        evt.preventDefault();
        const {name, value} = evt.target;
        this.setState({[name] : value});
    } 

    isValid() {
        console.log('isvalid');
        const {errors, isValid} = validateInput(this.state);

        if(!isValid) { //when has errors
            this.setState({errors});
        }
        return isValid;
    }


    render() {
        const {errors, username, password, isLoading } = this.state;
        return ( 
            <div className="loginBody">
                <div className="container">
                    <div className="d-flex justify-content-center h-100">
                        <div className="card">
                            <div className="card-header">
                                <h3>Sign In</h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit = {this.onSubmit}>
                                    
                                    { errors.username && 
                                        <div className="text-danger" role="alert">
                                            <small>{errors.username}</small>
                                        </div>
                                    }

                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="fas fa-user"></i>
                                            </span>
                                        </div>
                                        <input type="text" 
                                            className = "form-control"
                                            placeholder = "username"
                                            autoComplete = "off"
                                            name = "username"
                                            value = {username}
                                            onChange = {this.onChange}
                                            />
                                    </div>

                                    { errors.password && 
                                        <div className="text-danger" role="alert">
                                            <small>{errors.password}</small>
                                        </div>
                                    }
                                    
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-key"></i></span>
                                        </div>
                                        <input type="text" 
                                            className = "form-control"
                                            placeholder = "password"
                                            autoComplete = "off"
                                            name = "password"
                                            value = {password}
                                            onChange = {this.onChange}
                                            />
                                    </div>
                                    <div className="form-group">
                                        <button 
                                            className="btn btn-success px-4 float-right login-btn" 
                                            
                                            >
                                            Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage;