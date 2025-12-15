import prisma from "../prismaClient.js";

// export const getCustomerCount = async (req, res) => {
//   const count = await prisma.customers.aggregate({ _count: true });
//   res.json(count);
// };

export const getCustomerCount = async (req, res) => {
  const count = await prisma.customers.count();
  res.json(count);
};

// export const countCustomersByEmail = async (req, res) => {
//   const count = await prisma.customers.aggregate({
//     _count: {
//         email: true
//     }
//   });
//   res.json(count);
// };

export const countCustomersByEmail = async (req, res) => {
  const count = await prisma.customers.count({
    where: {
        email: { not: null}
    }
  });
  res.json(count);
};

export const createCustomer = async (req, res) => {
  const customer = await prisma.customers.create({ data: req.body });
  res.json(customer);
};

export const getAllCustomers = async (req, res) => {
  const customers = await prisma.customers.findMany();
  res.json(customers);
};

export const getCustomerById = async (req, res) => {
  const customer = await prisma.customers.findUnique({
    where: { customer_id: Number(req.params.id) },
  });
  res.json(customer);
};
