import prisma from "../prismaClient.js";

export const createAccount = async (req, res) => {
  const account = await prisma.accounts.create({ data: req.body });
  res.json(account);
};

export const getAccounts = async (req, res) => {
  const accounts = await prisma.accounts.findMany({
    include: { customer: true, branch: true },
  });
  res.json(accounts);
};

export const countAccounts = async (req, res) => {
    try {
        const accounts_count = await prisma.accounts.count();
        res.json(accounts_count);
    } catch(err) {
        console.log("Error", err);
    } 
}

export const countSavingsAccount = async (req, res) => {
    try {
        const saving_accounts_count = await prisma.accounts.count({
            where :{
                account_type: 'Savings'
            }
        });
        res.json({savingsAccountCount: saving_accounts_count})
    } catch(err) {
        console.log("Error", err);
    } 
}

export const getTotalBalanceOfAccounts = async (req, res) => {
    try {
        const total_accounts_balance = await prisma.accounts.aggregate({
            _sum: {
                balance: true
            }
        });
        res.json({TotalAccountsBalance: total_accounts_balance})
    } catch(err) {
        console.log("Error", err);
    } 
}

export const getAverageAccountBalanace = async (req, res) => {
    try {
        const avg_acc_balance = await prisma.accounts.aggregate({
            _avg: {
                balance: true
            }
        });
        res.json({AverageAccountsBalance: avg_acc_balance})
    } catch(err) {
        console.log("Error", err);
    } 
}

export const getMaxAccountBalance = async (req, res) => {
    try {
        const max_acc_balance = await prisma.accounts.aggregate({
            _max: {
                balance: true
            }
        });
        res.json({MaxAccountsBalance: max_acc_balance._max.balance})
    } catch(err) {
        console.log("Error", err);
    } 
}

export const getAccountsSummary = async (req, res) => {
    try {
        const summary = await prisma.accounts.aggregate({
            _count: true,
            _avg: { balance: true},
            _max: { balance: true},
            _min: { balance: true},
        })
        res.json({TotalCount: summary._count,
            Average: summary._avg,
            Min: summary._min,
            Max: summary._max
        })

    } catch(err) {
        console.log("Error", err);
    }
}

export const groupByAccountTypes = async (req, res) => {
    try {

        const group_by_account = await prisma.accounts.groupBy({
            by: ['account_type'],
            _count: {
                account_id: true           
            }
        })
        res.json({groupByAccounts:group_by_account})
    } catch(err) {
        console.log("Error", err);
    }
}

export const orderByBalance = async (req, res) => {
    try {
        const order_by_balance = await prisma.accounts.findMany({
            orderBy: {
                balance: 'desc'
            }
        })
        res.json({orderByBalance: order_by_balance})
    } catch(err) {
        console.log("Error", err);
    }
}

export const getAccountsWithCustomerAndBranch = async (req, res) => {
  try {
    const accounts = await prisma.accounts.findMany({
      include: {
        customer: true,
        branch: true
      }
    });
    res.json(accounts);
  } catch (err) {
    console.log("Error", err);
  }
};