import React from "react";
import FormInput from "../form-input/form-input.component";
import './sign-in.style.scss';
import CustomButton from "../custom-button/costume-button.component";
import { signInWithGoogle } from '../../firebase/firebase.utils'


class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',

        }
    }


    HandleSubmit = event => {
        event.preventDefault()
        this.setState({ email: '', password: '' })
    };

    handleChange = event => {
        const { value, name } = event.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account.</h2>
                <span>Sign in using email</span>
                <form onSubmit={this.HandleSubmit}>
                    <FormInput label='Email' type="email" name="email" value={this.state.email} required handleChange={this.handleChange} />
                    <FormInput label='Password' type="password" name="password" value={this.state.password} required handleChange={this.handleChange} />

                    <div className="button">
                        <CustomButton type="submit" value='submit form'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignin>sign in with google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;