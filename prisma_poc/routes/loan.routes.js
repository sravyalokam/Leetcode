import express from "express";
import {
  createLoan,
  getLoans,
  getTotalLoanIssuedToCustomer
} from "../controllers/loan.controller.js";

const router = express.Router();

router.post("/", createLoan);
router.get("/", getLoans);
router.get("/:id", getTotalLoanIssuedToCustomer);

export default router;
