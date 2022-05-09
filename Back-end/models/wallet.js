const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      default: 1000,
      min: 0,
    },
    cryptoAmt: {
      type: Number,
      default: 200,
      min: 0,
    },
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Wallet", walletSchema);
