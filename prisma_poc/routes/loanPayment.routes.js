import express from "express";
import {
  createLoanPayment,
  getLoanPayments,
} from "../controllers/loanPayment.controller.js";

const router = express.Router();

router.post("/", createLoanPayment);
router.get("/", getLoanPayments);

export default router;
