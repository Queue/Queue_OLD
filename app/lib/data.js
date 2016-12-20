//
// Data abstraction - using Firebase but
// should be able to swap out other 
// data models.

import * as firebase from 'firebase';
import Creds from './creds';

const Firebase = firebase.initializeApp(Creds.firebase);

export default Data = {
  firebase: Firebase
};
