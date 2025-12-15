import express from "express";
import {
  createAccount,
  getAccounts,
  countAccounts,
  countSavingsAccount,
  getTotalBalanceOfAccounts,
  getAverageAccountBalanace,
  getMaxAccountBalance,
  getAccountsSummary,
  groupByAccountTypes,
  orderByBalance,
  getAccountsWithCustomerAndBranch,
  
} from "../controllers/account.controller.js";

const router = express.Router();

router.post("/", createAccount);
router.get("/", getAccounts);
router.get("/count", countAccounts);
router.get("/count-savings-account", countSavingsAccount);
router.get("/total-balance", getTotalBalanceOfAccounts);
router.get("/avg-account-balance", getAverageAccountBalanace);
router.get("/max-account-balance", getMaxAccountBalance);
router.get("/summary", getAccountsSummary);
router.get("/order-by-balance", orderByBalance);
router.get("/group-by-type", groupByAccountTypes);
router.get("/with-customer-branch", getAccountsWithCustomerAndBranch);
export default router;
