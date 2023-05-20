import React, { useContext } from 'react'
import { GoogleAuthProvider, signInWithPopup, signOut, getAuth } from "firebase/auth";
import { UserContext } from '../context/userContext'
import { app} from '../services/db';
// Import the functions you need from the SDKs you need


//

const provider = new GoogleAuthProvider();
const auth = getAuth(app)



export default function CurrentUser() {

    const {currentUser} = useContext(UserContext)
    console.log(currentUser)
  
    const login = () => {    
      signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        //const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        
      // setUser(user)
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });  
    }
  
    const logout = ()=>{
      
      signOut(auth).then(() => {
        
       //setUser({})
      }).catch((error) => {
        // An error happened.
      });
    }
  return (
    <div className='d-flex align-items-center'>
        
        { !currentUser ?
        <>
            
            <button className='btn btn-light bckg-color-primary' onClick={login}>Login</button>
        </>
                :
                <>
                <img className='user-picture' src={`${currentUser.photoURL}`}></img>
                <button className='btn btn-light bckg-color-primary' onClick={logout}>Logout</button>
                </>
            }  
    </div>
  )
}
