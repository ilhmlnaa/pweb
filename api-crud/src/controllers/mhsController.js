import { PrismaClient } from "@prisma/client";
import response from "../utils/response.js";

const prisma = new PrismaClient();

export const getMhs = async (req, res) => {
  try {
    const result = await prisma.mhs.findMany();
    response(200, result, "OK", res);
  } catch (error) {
    response(500, null, error.message, res);
  }
};

export const getMhsByNpm = async (req, res) => {
  const { npm } = req.params;

  if (!npm) {
    return response(400, null, "NPM query is required", res);
  }

  try {
    const result = await prisma.mhs.findUnique({
      where: {
        npm: npm,
      },
    });

    if (!result) {
      response(404, null, "Data not found", res);
      return;
    }

    response(200, result, "OK", res);
  } catch (error) {
    response(500, null, error.message, res);
  }
};

export const createMhs = async (req, res) => {
  const { npm, nama, kelas, no_hp, alamat } = req.body;

  if (!npm || !nama || !kelas || !no_hp || !alamat) {
    response(400, null, "All fields must be filled", res);
    return;
  }

  try {
    const result = await prisma.mhs.create({
      data: {
        npm: npm,
        nama: nama,
        kelas: kelas,
        no_hp: no_hp,
        alamat: alamat,
      },
    });
    response(201, result, "OK", res);
  } catch (error) {
    response(500, null, error.message, res);
  }
};

export const updateMhs = async (req, res) => {
  const { npm } = req.params;
  const { nama, kelas, no_hp, alamat } = req.body;

  if (!npm) {
    return response(400, null, "NPM query is required", res);
  }

  if (!nama || !kelas || !no_hp || !alamat) {
    return response(400, null, "All fields must be filled", res);
  }

  try {
    const result = await prisma.mhs.update({
      where: {
        npm: parseInt(npm),
      },
      data: {
        nama: nama,
        kelas: kelas,
        no_hp: no_hp,
        alamat: alamat,
      },
    });

    response(200, result, "OK", res);
  } catch (error) {
    if (error.code === "P2025") {
      response(404, null, "Data not found", res);
    } else {
      response(500, null, error.message, res);
    }
  }
};

export const deleteMhs = async (req, res) => {
  const { npm } = req.params;

  if (!npm) {
    return response(400, null, "NPM params is required", res);
  }

  try {
    const result = await prisma.mhs.delete({
      where: {
        npm: npm,
      },
    });

    if (!result) {
      response(404, null, "Data not found", res);
      return;
    }

    response(200, result, "OK", res);
  } catch (error) {
    if (error.code === "P2025") {
      response(404, null, "Data not found", res);
    } else {
      response(500, null, error.message, res);
    }
  }
};
