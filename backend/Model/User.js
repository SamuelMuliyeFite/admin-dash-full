const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      default: 'user',
    },

    verified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
userSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
userSchema.method({
  authenticate: function (userpassword) {
    return bcrypt.compareSync(userpassword, this.password);
  },
});
module.exports = mongoose.model('User', userSchema);
