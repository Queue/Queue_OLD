//
// Data abstraction - using Firebase but
// should be able to swap out other database, authentication and filesystem logic,
// functions and models in one place.

import * as firebase from 'firebase';
import Creds from './creds';
import Common from './common';

const Firebase = firebase.initializeApp(Creds.firebase);

export default Data = {

  // Authentication methods
  Auth: {

    // get user
    user() {
      return Firebase.auth().currentUser;
    },

    // Sign in method
    signIn(email, password) {
      // return the promise
      Firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
        Common.log('Success', 'Email Success');
      }, (error) => {
        Common.log(error.code, error.message);
      });
    },

    // Sign up method
    signUp(email, password) {
      Firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
        let user = Firebase.auth().currentUser;
        if (user) {
          user.sendEmailVerification().then(() => {
            Common.log('Success', 'Email Success');
          }, (error) => {
            Common.log(error.code, error.message);
          });
        }
      }, (error) => {
        Common.log(error.code, error.message);
      });
    },

    // Sign out method
    signOut() {
      Firebase.auth().signOut().then(() => {
        Common.log('Success', 'Email Success');
      }, (error) => {
        Common.log(error.code, error.message);
      });
    },

    // Reset pass email method
    resetPassEmail(email) {
      Firebase.auth().sendPasswordResetEmail(emailAddress).then(() => {
        Common.log('Success', 'Email Success');
      }, (error) => {
        Common.log(error.code, error.message);
      });
    }

  }, // end of auth methods

  // Database wrapper
  DB: {

  } // end of db methods

};
