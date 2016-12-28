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
      Firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
        Common.log('68', 'Email Success');
        return true;
      }, (error) => {
        Common.log(error.code, error.message);
        return false;
      });
    },

    // Sign up method
    signUp(email, password) {
      Firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
        let user = Firebase.auth().currentUser;
        if (user) {
          user.sendEmailVerification().then(() => {
            Common.log('68', 'Email Success');
            return true;
          }, (error) => {
            Common.log(error.code, error.message);
            return false;
          });
        }
      }, (error) => {
        Common.log(error.code, error.message);
        return false;
      });
    },

    // Sign out method
    signOut() {
      Firebase.auth().signOut().then(() => {
        Common.log('68', 'Email Success');
        return true;
      }, (error) => {
        Common.log(error.code, error.message);
        return false;
      });
    }

  }, // end of auth methods

  // Database wrapper
  DB: {

  } // end of db methods

};
