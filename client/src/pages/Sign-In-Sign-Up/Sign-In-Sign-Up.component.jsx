import React from 'react';

import SignIn from '../../components/SignIn/SignIn.component';
import SignUp from '../../components/Sign-Up/SignUp.component';

import { SignInAndSignUpContainer } from './Sign-In-Sign-Up.styles';

const SignInAndSignUp = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUp;