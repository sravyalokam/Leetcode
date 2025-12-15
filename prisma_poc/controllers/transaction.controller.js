import prisma from "../prismaClient.js";

export const createTransaction = async (req, res) => {
  const txn = await prisma.transactions.createMany({
    data: [
        {
            account_id: 1,
            amount: 2500.00,
            transaction_type: "CREDIT",
            transaction_date: new Date() 
        }
    ]
});
  res.json(txn);
};

export const getTransactions = async (req, res) => {
  const txns = await prisma.transactions.findMany();
  res.json(txns);
};

export const countTransactions = async (req, res) => {
    try {
        const txns = await prisma.transactions.count();
        res.json(txns);
    } catch(err) {
        console.log("Error", err);
    }
};

export const getMinimumTransactionAmount = async (req, res) => {
    try {
        const min_transaction_amount = await prisma.transactions.aggregate({
            _min: {
                amount: true
            }
        });
        res.json({minTransactionAmount: min_transaction_amount._min.amount})
    } catch(err) {
        console.log("Error", err);
    } 
}

export const getAverageTransactionAmountByAccount = async (req, res) => {
    try {
        const avg_transaction_amount = await prisma.transactions.aggregate({
            _avg: {
                amount: true
            }, where: {
                account_id: Number(req.params.id)
            }
        });
        res.json({AverageTransactionAmountByAccount: avg_transaction_amount._avg.amount})
    } catch(err) {
        console.log("Error", err);
    } 
}

export const getTodayTransactions = async (req, res) => {
    try {
        const now = new Date();

        const startOfTodayUTC = new Date(Date.UTC(
            now.getUTCFullYear(),
            now.getUTCMonth(),
            now.getUTCDate()
        ));

        const startOfTomorrowUTC = new Date(startOfTodayUTC);
        startOfTomorrowUTC.setUTCDate(startOfTomorrowUTC.getUTCDate() + 1);

        const count = await prisma.transactions.count({
            where: {
                transaction_date: {
                    gte: startOfTodayUTC,
                    lt: startOfTomorrowUTC
                }
            }
        });

        res.json({ todayTransactionCount: count });
    } catch (err) {
        console.log("Error", err);
        res.status(500).json({ error: "Something went wrong" });
    }
}



