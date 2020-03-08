exports.getFirstName = fullName => {
  return fullName.split(' ')[0];
};

exports.isValidPassword = password => {
  return password.length >= 8 && !password.toLowerCase().includes('password');
};
