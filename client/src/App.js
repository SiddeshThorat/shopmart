import { Switch,Route,Redirect } from 'react-router-dom';
import Header from './components/Header/Header.component';
import React,{useEffect,lazy, Suspense} from 'react';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {connect} from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import Spinner from './components/Spinner/Spinner.component';
import ErrorBoundaries from './components/Error-Boundaries/ErrorBoundaries.component';
import {default as Footer} from './components/Footer/Footer.component';
import ModalBox from './components/ModalBox/ModalBox.component';
import { selectModalBoxHidden } from './redux/cart/cart.selectors';
import SuccessPopUpBox from './components/SuccessPopUpBox/SuccessPopUpBox.component';
import { selectIsSignOutSuccess } from './redux/user/user.selectors';
//Implementation of using React lazy + Suspense in order to achieve Code-Splitting
const Homepage = lazy(() => import('./pages/Homepage/Homepage.component'))
const Shoppage = lazy(() => import( './pages/Shoppage/Shoppage.component'))
const Checkoutpage = lazy(() => import('./pages/Checkoutpage/Checkoutpage.component'))
const SignInSignOut = lazy(() => import('./pages/Sign-In-Sign-Up/Sign-In-Sign-Up.component'))


const App = ({ setCurrentUser, currentUser, isModalHidden, isSignOutSuccess }) => {
      useEffect(() => {
        //useEffect works as componentDidMount() her
       const unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
         
         if(userAuth){
           const userRef = await createUserProfileDocument(userAuth);
         
           userRef.onSnapshot(snapShot => {
             setCurrentUser({
                 id: snapShot.id,
                 ...snapShot.data()
               });
           });
         }
         setCurrentUser(userAuth);
        
       })

       //useEffect as componentWillUnmount() here
       return () => {
        unSubscribeFromAuth()
       }

    },[ setCurrentUser]);

    return (
        <>  
          <Header/>
          { isModalHidden ? null : 
           (
           <ModalBox>
              Please Login before proceeding
            </ModalBox>
           )  
          }
          {
            isSignOutSuccess ? <SuccessPopUpBox>Sign out Successful</SuccessPopUpBox> : null
          }
          <Switch>
            <ErrorBoundaries>
                <Suspense fallback={<Spinner />}>
                  <Route exact path='/' component={Homepage} />
                  <Route path='/shop' component={Shoppage} />
                  <Route exact path='/checkout' component={Checkoutpage} />
                  <Route exact path='/sign-in-sign-out' render={() => 
                    (currentUser ?
                    (<Redirect to='/' />)
                    : (<SignInSignOut />))
                  }
                  />
                </Suspense>
            </ErrorBoundaries> 
          </Switch>
          <Footer />
        </>  
      );
  }

  

  const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isModalHidden: selectModalBoxHidden,
    isSignOutSuccess: selectIsSignOutSuccess
  })

  const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
  })

export default connect(mapStateToProps,mapDispatchToProps)(App);
