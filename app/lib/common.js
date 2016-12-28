//
// Common functions exist here

export default Common = {

  validateEmail: (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  },

  warn: (code, message) => {
    console.warn(
      'Warning' + '\n' +
      'Code: ' + code + '\n' +
      'Message: ' + message
    );
  },

  error: (code, message) => {
    console.error(
      'Error' + '\n' +
      'Code: ' + code + '\n' +
      'Message: ' + message
    );
  },

  log: (code, message) => {
    console.log(
      'Log' + '\n' +
      'Code: ' + code + '\n' +
      'Message: ' + message
    );
  }

};
