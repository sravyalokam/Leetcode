import express from "express";
import {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  getCustomerCount,
  countCustomersByEmail
} from "../controllers/customer.controller.js";

const router = express.Router();

router.get("/count", getCustomerCount);
router.get("/count-by-mail", countCustomersByEmail);
router.post("/", createCustomer);
router.get("/", getAllCustomers);
router.get("/:id", getCustomerById);

export default router;
