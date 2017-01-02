//
// Common functions exist here
import { Alert } from 'react-native';

export default Common = {

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  },

  warn(code, message) {
    console.log(
      'Warning' + '\n' +
      'Code: ' + code + '\n' +
      'Message: ' + message
    );

    Alert.alert(
      code,
      message,
      [
        {text: 'OK', style: 'cancel'}
      ]
    );
  },

  error(code, message) {
    console.log(
      'Error' + '\n' +
      'Code: ' + code + '\n' +
      'Message: ' + message
    );

    Alert.alert(
      code,
      message,
      [
        {text: 'OK', style: 'cancel'}
      ]
    );
  },

  log(code, message) {
    console.log(
      'Log' + '\n' +
      'Code: ' + code + '\n' +
      'Message: ' + message
    );
  }

};
