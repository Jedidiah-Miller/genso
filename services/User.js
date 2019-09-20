import firebase, { firestore } from 'firebase';
import User from '../Models/User';

// const firestore = firebase.firestore();
const UsersCollection = firestore.collection('Users');


export var currentUser = () => firebase.auth().currentUser;

export var currUser = null;

export const setCurrUser = user => currUser = user;

export const _Auth = () => firebase.auth();

export const getCurrentUser = async () => {

  const uid = currentUser().uid;
  try {
    const user = await getUser(uid);
    currUser = user;
  } catch (e) {
    console.error('error getting user: ', e);
  }
}

const anonSignIn = async () => await firebase.auth().signInAnonymously();

export const createUser = async () => {

  try {
    const credential = await anonSignIn();
    const uid = credential.user.uid;
    const newUser = {
      isStupid: true,
      createdAt: Date.now()
    };

    await UsersCollection.doc(uid).set(newUser);

    newUser.uid = uid;

    return newUser;
  } catch (e) {
    console.error('error creating new user ', e);
  }
}


export const getUser = async uid => {

  try {
    const user = await UsersCollection.doc(uid).get();
    return new User(uid, user.data());
  } catch(e) {
    console.error('error getting user', uid);
    console.error(e);
    throw e;
  }
}
