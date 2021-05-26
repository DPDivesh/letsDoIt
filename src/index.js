import {webPageBuilder} from './webPageBuilder';

const login =(()=>{
  const authLog = ()=>{
    const auth = firebase.auth(); 
    const pageBody = document.body;
    const loginCenter = document.createElement('div');
    loginCenter.className='login-style';
    const signInButton = document.createElement('button');
    const signOutButton =document.createElement('button');
    signInButton.className = 'signInButton';
    signOutButton.className = 'signOutButton';
    loginCenter.append(signInButton);
    loginCenter.append(signOutButton);
    pageBody.appendChild(loginCenter);
    signInButton.onclick = ()=> auth.signInWithPopup(provider);
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.onAuthStateChanged();
    webPageBuilder();

  };
  return{
    authLog
  }
})();


console.log(firebase);

login.authLog();