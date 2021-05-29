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
    const provider = new firebase.auth.GoogleAuthProvider();
    signInButton.onclick = ()=> auth.signInWithPopup(provider);
    signOutButton.onclick =()=>{ auth.signOut();
      document.querySelector('.login-style').remove();
    };

    auth.onAuthStateChanged(user=>{
      if(user){
      console.log('welcome',user.displayName);
      webPageBuilder();

      }
        else{
          console.log('sucks to suc2321k')
          

        }
      
    });

  };
  return{
    authLog
  }
})();


console.log(firebase);

login.authLog();