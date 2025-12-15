import prisma from "../prismaClient.js";

export const createLoan = async (req, res) => {
  const loan = await prisma.loans.create({ data: req.body });
  res.json(loan);
};

export const getLoans = async (req, res) => {
  const loans = await prisma.loans.findMany();
  res.json(loans);
};

export const getTotalLoanIssuedToCustomer = async (req, res) => {
    try{
        const customerid = Number(req.params.id);
        const total_loan_amount = await prisma.loans.aggregate({
            _sum: {
                amount: true
            }, where: {
                customer_id: customerid
            }
        })
        res.json({totalLoanAmountToCustomer:total_loan_amount});
    } catch(err) {
        console.log("Error", err);
    }
}