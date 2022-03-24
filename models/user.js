const bcrypt = require('bcrypt');
const admin = {
  id: Math.floor(Math.random() * 100),
  email: 'admin@gmail.com',
  password: bcrypt.hashSync('123456', 10),
};

function User({ id, email, password }) {
  this.id = id;
  this.email = email;
  this.password = password;
  return this;
}

User.findOne = function ({ username }) {
  if (username !== 'admin@gmail.com') return Promise.resolve(null);
  const user = new User(admin);
  return Promise.resolve(user);
};

User.findByPk = function (id) {
  if (admin.id === id) {
    const user = new User(admin);
    return Promise.resolve(user);
  }
  return Promise.resolve(null);
};

User.prototype.verifyPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = User;
