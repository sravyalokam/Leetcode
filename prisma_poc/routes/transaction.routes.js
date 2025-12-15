import express from "express";
import {
  createTransaction,
  getTransactions,
  countTransactions,
  getMinimumTransactionAmount,
  getAverageTransactionAmountByAccount,
  getTodayTransactions
} from "../controllers/transaction.controller.js";

const router = express.Router();

router.post("/", createTransaction);
router.get("/", getTransactions);
router.get("/count", countTransactions);
router.get("/min-transaction-amount", getMinimumTransactionAmount);
router.get("/today-transactions", getTodayTransactions);
router.get("/avg-transaction/:id", getAverageTransactionAmountByAccount);


export default router;
