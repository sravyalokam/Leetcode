import prisma from "../prismaClient.js";

export const createLoanPayment = async (req, res) => {
  const payment = await prisma.loan_payments.create({ data: req.body });
  res.json(payment);
};

export const getLoanPayments = async (req, res) => {
  const payments = await prisma.loan_payments.findMany();
  res.json(payments);
};
