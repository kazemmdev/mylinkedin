import store from "../app/store";
import firebase from "firebase/compat/app";
import { auth, db } from "./firebaseService";
import {
  login as loginAction,
  logout as logoutAction,
} from "../store/slices/userSlice";

export function fetchUser() {
  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatchUser(
          userAuth.uid,
          userAuth.email,
          userAuth.displayName,
          userAuth.photoURL
        );
      } else {
        store.dispatch(logoutAction());
        reject("unauthorized");
      }
    });
  });
}

export async function login(email, password) {
  await auth
    .signInWithEmailAndPassword(email, password)
    .then((userAuth) =>
      dispatchUser(
        userAuth.user.uid,
        userAuth.user.email,
        userAuth.user.displayName,
        userAuth.user.photoURL
      )
    );
}

export async function register(email, password, displayName, photoURL) {
  await auth
    .createUserWithEmailAndPassword(email, password)
    .then((userAuth) => {
      userAuth.user
        .updateProfile({
          displayName: displayName,
          photoURL: photoURL,
        })
        .then(() => {
          dispatchUser(
            userAuth.user.uid,
            userAuth.user.email,
            displayName,
            photoURL
          );
          setProfile(userAuth.user.uid, "", "");
        });
    });
}

export async function getProfile(uid) {
  let data = null;

  await db
    .collection("profiles")
    .where("user_uid", "==", uid)
    .get()
    .then((snapshot) =>
      snapshot.docs.map((doc) => (data = { uid: doc.id, ...doc.data() }))
    );

  return data;
}

export async function setProfile(uid, bio, picProfile) {
  const profile = await getProfile(uid);

  if (profile) {
    db.collection("profiles").doc(profile.uid).update({
      bio: bio,
      picProfile: picProfile,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  } else {
    db.collection("profiles").add({
      bio: bio,
      user_uid: uid,
      picProfile: picProfile,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  }
}

async function dispatchUser(uid, email, displayName, photoURL) {
  const profile = await getProfile(uid);

  store.dispatch(
    loginAction({
      uid: uid,
      email: email,
      displayName: displayName,
      photoURL: photoURL,
      bio: profile.bio,
      picProfile: profile.picProfile,
    })
  );
}
