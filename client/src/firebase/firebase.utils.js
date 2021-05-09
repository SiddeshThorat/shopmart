import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyDfJHMY1-C1CL8sWxTQwrOjy9LByuPf7JI",
    authDomain: "shopmart-8c7b6.firebaseapp.com",
    projectId: "shopmart-8c7b6",
    storageBucket: "shopmart-8c7b6.appspot.com",
    messagingSenderId: "126239807750",
    appId: "1:126239807750:web:eca0f0e398d0c04f8c6687",
    measurementId: "G-LB9ZWY373K"
  };

export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  
  const batch  = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    //collectionRef.doc() gices unique id that particular content, we can do collectionRef.doc(obj.title) inorder to set key to that particular title
    batch.set(newDocRef,obj);
  })

  return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollections = collections.docs.map(doc => {
    const {title,items} = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })
  return transformedCollections.reduce((accumulator,collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  } , {})
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  //returns when firestore library returns null object
  //userAuth is null when user is not logged in  
  if(!userAuth) return; 
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  //This condition is used to check whether the user already exists
  // in database or not, If not then we set it with following values
  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })

    }catch(error){
      console.log("error creating user =>",error)
    }

  }
 return userRef;
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;


