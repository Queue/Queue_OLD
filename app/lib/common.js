//
// Common functions exist here

export default Common = {

  validateEmail: (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  },

  warn: (code, message) => {
    console.warn(
      'ERROR' + '\n' +
      'Code: ' + code + '\n' +
      'Message: ' + message
    );
  },

  error: (code, message) => {
    console.error(
      'ERROR' + '\n' +
      'Code: ' + code + '\n' +
      'Message: ' + message
    );
  },

  log: (code, message) => {
    console.log(
      'ERROR' + '\n' +
      'Code: ' + code + '\n' +
      'Message: ' + message
    );
  }

};

