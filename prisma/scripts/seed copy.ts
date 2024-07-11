// const { PrismaClient } = require("@prisma/client");
// import sampleData from "./sampleData.json";
// const prisma = new PrismaClient();

// interface StarSign {
//   name: string;
// }

// interface User {
//   name: string;
//   email: string;
//   clerkUserId: string;
//   starSign: string;
// }

// interface BirthChart {
//   userEmail: string;
//   birthDate: string;
//   birthTime: string;
//   birthPlace: string;
//   ascendant: string;
//   sunSign: string;
//   moonSign: string;
// }

// interface FengShuiReading {
//   userEmail: string;
//   readingDate: string;
//   propertyType: string;
//   direction: string;
//   analysis: string;
//   recommendations: string;
// }

// async function main() {
// Insert StarSigns
// for (const starSign of sampleData.starSigns) {
//   await prisma.starSign.upsert({
//     where: { name: starSign.name },
//     update: {},
//     create: { name: starSign.name },
//   });
// }

// // Insert Users
// for (const user of sampleData.users) {
//   const starSign = await prisma.starSign.findUnique({
//     where: { name: user.starSign },
//   });
//   if (!starSign) {
//     console.error(`StarSign not found: ${user.starSign}`);
//     continue;
//   }
//   await prisma.user.upsert({
//     where: { email: user.email },
//     update: {},
//     create: {
//       name: user.name,
//       email: user.email,
//       clerkUserId: user.clerkUserId,
//       starSignId: starSign.id,
//     },
//   });
// }

// Insert BirthCharts
// for (const chart of sampleData.birthCharts) {
//   const user = await prisma.user.findUnique({
//     where: { email: chart.userEmail },
//   });
//   if (!user) {
//     console.error(`User not found: ${chart.userEmail}`);
//     continue;
//   }
//   await prisma.birthChart.upsert({
//     where: { userId: user.id },
//     update: {},
//     create: {
//       userId: user.id,
//       birthDate: new Date(chart.birthDate),
//       birthTime: new Date(chart.birthTime),
//       birthPlace: chart.birthPlace,
//       ascendant: chart.ascendant,
//       sunSign: chart.sunSign,
//       moonSign: chart.moonSign,
//     },
//   });
// }

//   for (const consultation of sampleData.consultations) {
//     try {
//       await prisma.consultation.create({
//         data: {
//           date: new Date(consultation.date),
//           topic: consultation.topic,
//           notes: consultation.notes,
//           recommendations: consultation.recommendations,
//           userId: consultation.userId, // 直接使用 userId 而不是嵌套的 user 對象
//         },
//       });
//       console.log(`成功插入諮詢數據: ID ${consultation.id}`);
//     } catch (error) {
//       console.error(`插入諮詢數據失敗: ID ${consultation.id}`, error);
//     }
//   }

//   console.log("諮詢數據插入完成");

//   // Insert FengShuiReadings
//   for (const reading of sampleData.fengShuiReadings) {
//     const user = await prisma.user.findUnique({
//       where: { email: reading.userEmail },
//     });
//     if (!user) {
//       console.error(`User not found: ${reading.userEmail}`);
//       continue;
//     }
//     await prisma.fengShuiReading.create({
//       data: {
//         userId: user.id,
//         readingDate: new Date(reading.readingDate),
//         propertyType: reading.propertyType,
//         direction: reading.direction,
//         analysis: reading.analysis,
//         recommendations: reading.recommendations,
//       },
//     });
//   }
//   console.log("Data insertion completed.");
// }

// main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
