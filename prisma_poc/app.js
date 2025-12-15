import express from "express";

import customerRoutes from "./routes/customer.routes.js";
import branchRoutes from "./routes/branch.routes.js";
import accountRoutes from "./routes/account.routes.js";
import transactionRoutes from "./routes/transaction.routes.js";
import loanRoutes from "./routes/loan.routes.js";
import loanPaymentRoutes from "./routes/loanPayment.routes.js";
// import employeeRoutes from "./routes/employee.routes.js";

const app = express();
app.use(express.json());

app.use("/customers", customerRoutes);
app.use("/branches", branchRoutes);
app.use("/accounts", accountRoutes);
app.use("/transactions", transactionRoutes);
app.use("/loans", loanRoutes);
app.use("/loan-payments", loanPaymentRoutes);
// app.use("/employees", employeeRoutes);

export default app;
