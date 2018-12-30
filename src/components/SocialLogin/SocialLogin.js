import React, { Component } from 'react'
import { GoogleLogin } from 'react-google-login';
import TwitterLogin from 'react-twitter-auth';
import googleIcon from '../../images/icons/google.png'
// import FacebookLogin from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import './Sociallogin.scss';

export default class SocialLogin extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userData: {}
        }

        this.logUserOut = this.logUserOut.bind(this)
    }

    onFailed(resp) { console.log(resp) }

    onSuccess(resp) { console.log(resp) }

    componentClicked(e) {
        console.log(e);

    }

    componentDidMount() {
        const userData = JSON.parse(localStorage.getItem('social'));

        if (!userData) {
            // ENABLE POP OUT
            return this.setState({ message: "You are not logged in" })
        }

        if (userData) {
            return this.setState({ userData })
        }
    }

    logUserOut() {
        localStorage.removeItem('social')
        this.setState({ userData: [] })
    }

    // <TwitterLogin loginUrl="http://localhost:4000/api/v1/auth/twitter"
    // onFailure={this.onFailed} onSuccess={this.onSuccess}
    // requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse" />

    render() {
        const responseGoogle = (response) => {
            console.log(response);
            localStorage.setItem('social', JSON.stringify(response))
            this.setState({ userData: response })
        }

        const loggedUser = this.state.userData ? this.state.userData.profileObj : '';

        const componentClicked = (res) => {
            console.log(res);

        }

        const responseFacebook = (res) => {
            console.log('FBRESPO', responseFacebook);

        }

        return (
            <div className="social--login">
                <FacebookLogin
                    appId="209211756650633"
                    autoLoad={true}
                    fields="name,email,picture"

                    onClick={componentClicked}
                    callback={responseFacebook}
                    icon="icon-facebook"
                    render={renderProps => (
                        <button className="button--facebook" onClick={renderProps.onClick}> Login With Facebook </button>
                    )}
                />
                <GoogleLogin
                    clientId="431810918658-gedmt7omgjmlk18vgb50g2eqjvr8ln4q.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    render={renderProps => (
                        <button className="button--google" onClick={renderProps.onClick}>
                            <img className="google__login--image" src={googleIcon} alt="" />
                            <span className="google__text"> Login with Google</span>
                        </button>
                    )}
                />


                <div>
                    {loggedUser && (
                        <div className="container--flex comments__header-format">
                            <img className="form-comments__avatar" src="https://lh6.googleusercontent.com/-S0uKoBOmR4c/AAAAAAAAAAI/AAAAAAAADIs/HfTIwyQkpF4/s96-c/photo.jpg" alt="" />

                            <span className="comments__user" >{loggedUser.givenName} {loggedUser.familyName}</span>

                            <span className="link" onClick={this.logUserOut} >LOGOUT</span>
                        </div>

                    )
                    }
                </div>

            </div>
        )
    }
}
