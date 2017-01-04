//
// Common functions exist here
import { Alert } from 'react-native';

// dismiss the keyboard
import dismissKeyboard from 'react-native-dismiss-keyboard';

export default Common = {

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  },

  dismissKeyboard() {
    dismissKeyboard();
  },

  warn(code, message) {
    console.log(`Warning\nCode: ${code}\nMessage: ${message}`);
    Alert.alert(
      code,
      message,
      [{text: 'OK', style: 'cancel'}]
    );
  },

  error(code, message) {
    console.log(`Error\nCode: ${code}\nMessage: ${message}`);
    Alert.alert(
      code,
      message,
      [{text: 'OK', style: 'cancel'}]
    );
  },

  log(code, message) {
    console.log(`Log\nCode: ${code}\nMessage: ${message}`);
  }

};
