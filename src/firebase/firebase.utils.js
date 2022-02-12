import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCk7D3-vLjVPz9gI346zGrMhXNhDLA7u8g",
    authDomain: "crown-d0471.firebaseapp.com",
    projectId: "crown-d0471",
    storageBucket: "crown-d0471.appspot.com",
    messagingSenderId: "424339589671",
    appId: "1:424339589671:web:8724dd1932f1a51e029c02",
    measurementId: "G-1D6T948QQL"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });;
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;