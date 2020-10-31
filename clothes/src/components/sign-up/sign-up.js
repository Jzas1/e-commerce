import React from 'react';

import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'

import { auth, createUserProfileDocument } from '../firebase/firebase.utils'

import './sign-up.scss';

class SignUp extends React.Component {
    constructor(){
        super()

        this.state ={
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault()

        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword){
            alert("Passwords don't match")
            return;
        }


        try {
        const { user } = await auth.createUserWithEmailAndPassword(email, password);

       await createUserProfileDocument(user, {displayName})

       this.state ={
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }




        } catch (error){
            console.error(error)
        }
    }
    handleChage = e => {
        const { name, value } = e.target

        this.setState({[name]: value})
    }

    render(){
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                     type='text'
                     name='displayName'
                     value={displayName}
                     onChange={this.handleChage}
                     label='Display Name'
                     required
                     />
                    <FormInput
                     type='email'
                     name='email'
                     value={email}
                     onChange={this.handleChage}
                     label='email'
                     required
                     />
                    <FormInput
                     type='password'
                     name='password'
                     value={password}
                     onChange={this.handleChage}
                     label='password'
                     required
                     />
                    <FormInput
                     type='password'
                     name='confirmPassword'
                     value={confirmPassword}
                     onChange={this.handleChage}
                     label='confirm password'
                     required
                     />
                     <CustomButton type='submit'>Sign UP</CustomButton>

                </form>

            </div>
        )

    }
}

export default SignUp