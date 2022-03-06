import firebase from "firebase/compat/app";
import moment from "moment";
import { db } from "./firebaseService";

export async function posts() {
  const posts = [];

  await db
    .collection("posts")
    .orderBy("timestamp", "desc")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        posts.push({
          id: doc.id,
          userName: doc.data().user_name,
          userPhoto: doc.data().user_photo,
          body: doc.data().body,
          likes: doc.data().likes,
          time: moment(doc.data().timestamp.toDate()).fromNow(),
        });
      });
    });

  return posts;
}

export function save(user, body) {
  db.collection("posts").add({
    body: body,
    user_name: user.displayName,
    user_photo: user.photoURL,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    likes: 0,
  });
}

export function like(user, post) {}
