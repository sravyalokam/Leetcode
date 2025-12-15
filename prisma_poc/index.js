// import express from "express";
// import prisma from "./prismaClient.js";

// const app = express();
// app.use(express.json());

// async function seedCustomer() {
//   await prisma.customers.create({
//     data: {
//       name: "pushpa",
//       email: "pushpa2003@gmail.com",
//       phone: "123"
//     }
//   });

//   const users = await prisma.customers.createMany({
//   data: [
//     { name: "Bob", email: "bob@example.com", phone: "30" },
//     { name: "Charlie", email: "charlie@example.com", phone: "28" },
//   ],
//   skipDuplicates: true,
// });

// }
// seedCustomer();


// app.get("/customers/count", async(req, res) => {
//     try{
//         const customers_count = await prisma.customers.aggregate({
//          _count: true
//         })
//         res.json(customers_count);
//     } catch(err) {
//         console.log("Error", err);
//     }
// })

// app.get("/branch/:id", async(req, res) => {
//     try {
//         const no_of_customers = await prisma.branches.findUnique({
//             where: { branch_id : Number(req.params.id) },
//             include: { accounts: true }
//         });
//         res.json({
//             _count: no_of_customers.accounts.length,
           
//         })
//     } catch(err) {
//         console.log("Error", err);
//     }
// })

// // Create customer
// app.post("/customers", async (req, res) => {
//   try {
//     const customer = await prisma.customers.create({
//       data: req.body,
//     });
//     res.json(customer);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Get all customers
// app.get("/customers", async (req, res) => {
//   try {
//     const customers = await prisma.customers.findMany();
//     res.json(customers);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Get customer by ID
// app.get("/customers/:id", async (req, res) => {
//   try {
//     const customer = await prisma.customers.findUnique({
//       where: { customer_id: Number(req.params.id) },
//     });
//     res.json(customer);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// /* ===========================
//    BRANCHES ROUTES
// =========================== */

// app.post("/branches", async (req, res) => {
//   try {
//     const branch = await prisma.branches.create({ data: req.body });
//     res.json(branch);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });


// app.get("/branches", async (req, res) => {
//   const branches = await prisma.branches.findMany({
//     include: {
//         accounts: true 
//     }
//   });
//   res.json(branches);
// });

// /* ===========================
//    ACCOUNTS ROUTES
// =========================== */

// app.post("/accounts", async (req, res) => {
//   try {
//     const account = await prisma.accounts.create({ data: req.body });
//     res.json(account);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.get("/accounts", async (req, res) => {
//   const accounts = await prisma.accounts.findMany({
//     include: {
//       customer: true,
//       branch: true,
//     },
//   });
//   res.json(accounts);
// });

// /* ===========================
//    TRANSACTIONS ROUTES
// =========================== */

// app.post("/transactions", async (req, res) => {
//   try {
//     const txn = await prisma.transactions.create({ data: req.body });
//     res.json(txn);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.get("/transactions", async (req, res) => {
//   const txns = await prisma.transactions.findMany();
//   res.json(txns);
// });

// /* ===========================
//    LOANS ROUTES
// =========================== */

// app.post("/loans", async (req, res) => {
//   try {
//     const loan = await prisma.loans.create({ data: req.body });
//     res.json(loan);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.get("/loans", async (req, res) => {
//   const loans = await prisma.loans.findMany();
//   res.json(loans);
// });

// /* ===========================
//    LOAN PAYMENTS ROUTES
// =========================== */

// app.post("/loan-payments", async (req, res) => {
//   try {
//     const payment = await prisma.loan_payments.create({ data: req.body });
//     res.json(payment);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.get("/loan-payments", async (req, res) => {
//   const payments = await prisma.loan_payments.findMany();
//   res.json(payments);
// });

// /* ===========================
//    EMPLOYEES ROUTES
// =========================== */

// app.post("/employees", async (req, res) => {
//   try {
//     const emp = await prisma.employees2.create({ data: req.body });
//     res.json(emp);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.get("/employees", async (req, res) => {
//   const emp = await prisma.employees2.findMany();
//   res.json(emp);
// });

// /* ===========================
//    START SERVER
// =========================== */

// app.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });

import app from "./app.js";

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
