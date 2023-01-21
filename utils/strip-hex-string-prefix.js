function stripHexStringPrefix(hex) {
    if (!hex) {
      return hex
    }
  
    if (hex.slice(0, 2) === '0x') {
      return hex.slice(2);
    } else {
      return hex;
    }
  }

  module.exports = stripHexStringPrefix;