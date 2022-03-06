import store from "../app/store";
import { auth } from "./firebaseService";
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
        .then(() =>
          dispatchUser(
            userAuth.user.uid,
            userAuth.user.email,
            displayName,
            photoURL
          )
        );
    });
}

function dispatchUser(id, email, displayName, photoURL) {
  store.dispatch(
    loginAction({
      uid: id,
      email: email,
      displayName: displayName,
      photoURL: photoURL,
    })
  );
}
