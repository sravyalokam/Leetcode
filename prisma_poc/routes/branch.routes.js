import express from "express";
import {
  createBranch,
  getBranches,
  getBranchCustomerCount,
  getBranchCount,
  getBranchMinMax,
  getBranchesGroupedByCity,
  getBranchAggregateSummary,
  getBranchesPaginated,
  getCountByBranch
} from "../controllers/branch.controller.js";

const router = express.Router();

router.post("/", createBranch);

router.get("/count", getBranchCount);
router.get("/min-max", getBranchMinMax);
router.get("/group-by-city", getBranchesGroupedByCity);
router.get("/summary", getBranchAggregateSummary);

router.get("/", getBranches);
router.get("/paginated", getBranchesPaginated);
router.get("/:city", getCountByBranch)
router.get("/:id", getBranchCustomerCount);

export default router;
