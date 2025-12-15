import prisma from "../prismaClient.js";


export const createBranch = async (req, res) => {
  try {
    const branch = await prisma.branches.create({ data: req.body });
    res.status(201).json(branch);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const getBranches = async (req, res) => {
  try {
    const branches = await prisma.branches.findMany({
      include: { accounts: true },
    });
    res.json(branches);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const getBranchCount = async (req, res) => {
  try {
    const count = await prisma.branches.count();
    res.json({ count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const getCountByBranch = async (req, res) => {
    try {
        const city = req.params.city;

        const count_by_branch = await prisma.branches.count({
            where: {
                city: city
            }
        })
        res.json(count_by_branch);
    } catch(err) {
        console.log("Error", err);
    }
}


export const getBranchCustomerCount = async (req, res) => {
  try {
    const branch = await prisma.branches.findUnique({
      where: { branch_id: Number(req.params.id) },
      include: { accounts: true },
    });

    if (!branch) {
      return res.status(404).json({ message: "Branch not found" });
    }

    res.json({
      branch_id: branch.branch_id,
      customers: branch.accounts.length,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const getBranchMinMax = async (req, res) => {
  try {
    const result = await prisma.branches.aggregate({
      _min: { branch_id: true },
      _max: { branch_id: true },
    });

    res.json({
      min_branch_id: result._min.branch_id,
      max_branch_id: result._max.branch_id,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const getBranchesGroupedByCity = async (req, res) => {
  try {
    const result = await prisma.branches.groupBy({
      by: ["city"],
      _count: { branch_id: true },
    });

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const getBranchAggregateSummary = async (req, res) => {
  try {
    const aggregate = await prisma.branches.aggregate({
      _count: { branch_id: true },
      _min: { branch_id: true },
      _max: { branch_id: true },
    });

    res.json({
      total_branches: aggregate._count.branch_id,
      min_branch_id: aggregate._min.branch_id,
      max_branch_id: aggregate._max.branch_id,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const getBranchesPaginated = async (req, res) => {
  try {
   
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;

   
    const skip = (page - 1) * limit;

  
    const branches = await prisma.branches.findMany({
      skip,
      take: limit,
      include: { accounts: true },
    });

 
    const total = await prisma.branches.count();


    res.json({
      page,
      limit,
      totalRecords: total,
      totalPages: Math.ceil(total / limit),
      data: branches,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
