const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema(
  {
    assertName: {
      type: String,
      required: true,
    },
    assertType: {
      type: String,
      required: true,
      enum: ["stock", "crypto"],
    },
    assertCode: {
      type: String,
      uppercase: true,
      required: true,
    },
    assertValue: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    walletID: {
      type: mongoose.Types.ObjectId,
      ref: "Wallet",
      required: true,
    },
    transactionID: {
      type: mongoose.Types.ObjectId,
      ref: "Transaction",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
