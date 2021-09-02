/*jshint esversion: 7 */
const fs = require('fs');
const vExists = require ('./v_exists')

// check if directory exists
const vIsFile = (path = null) => {

  if (path === null ) {
    console.warn("\nERROR: Function missing params >> vIsFile(path => NULL) :: path can not be empty value \n");
    return false;
  } else {

    if (vExists(path)){
      var helpIsDir = fs.lstatSync(path).isFile();
      return helpIsDir;
    } else {
      return false;
    }

  }

};

module.exports = vIsFile;

