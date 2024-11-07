import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const mhsData = [
    { npm: '20230001', nama: 'Ahmad Fauzi', kelas: 'TI A', no_hp: '081234567890', alamat: 'Jl. Merdeka No. 1' },
    { npm: '20230002', nama: 'Budi Santoso', kelas: 'TI B', no_hp: '081234567891', alamat: 'Jl. Kemerdekaan No. 2' },
    { npm: '20230003', nama: 'Citra Dewi', kelas: 'TI A', no_hp: '081234567892', alamat: 'Jl. Raya No. 3' },
    { npm: '20230004', nama: 'Dewi Lestari', kelas: 'TI C', no_hp: '081234567893', alamat: 'Jl. Pahlawan No. 4' },
    { npm: '20230005', nama: 'Eko Prabowo', kelas: 'TI B', no_hp: '081234567894', alamat: 'Jl. Indah No. 5' },
    { npm: '20230006', nama: 'Faisal Rahman', kelas: 'TI A', no_hp: '081234567895', alamat: 'Jl. Suka No. 6' },
    { npm: '20230007', nama: 'Gita Putri', kelas: 'TI C', no_hp: '081234567896', alamat: 'Jl. Cinta No. 7' },
    { npm: '20230008', nama: 'Hendra Wijaya', kelas: 'TI B', no_hp: '081234567897', alamat: 'Jl. Sejahtera No. 8' },
    { npm: '20230009', nama: 'Ika Wulandari', kelas: 'TI A', no_hp: '081234567898', alamat: 'Jl. Rukun No. 9' },
    { npm: '20230010', nama: 'Joko Susilo', kelas: 'TI C', no_hp: '081234567899', alamat: 'Jl. Damai No. 10' }
  ];

  // Menambahkan data mahasiswa
  for (const mhs of mhsData) {
    await prisma.mhs.create({
      data: mhs,
    });
  }

  console.log('10 data dummy mahasiswa telah berhasil ditambahkan!');
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  });
