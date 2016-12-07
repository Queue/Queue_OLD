//
// Firebase connector

import * as firebase from 'firebase';
import Creds from './creds';

export default Firebase = firebase.initializeApp(Creds.firebase);
