const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    transactionDate: {
      type: Date,
      immutable: true,
      default: () => Date.now(),
    },
    transactiontype: {
      type: String,
      required: true,
      enum: ["currency", "crypto"],
    },
    debit: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },
    credit: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },
    walletID: {
      type: mongoose.Types.ObjectId,
      ref: "Wallet",
      required: true,
    },
    portfolioID: {
      type: mongoose.Types.ObjectId,
      ref: "Portfolio",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", transactionSchema);
