interface StarSign {
  name: string;
}

interface User {
  name: string;
  email: string;
  clerkUserId: string;
  starSign: string;
}

interface BirthChart {
  userEmail: string;
  birthDate: string;
  birthTime: string;
  birthPlace: string;
  ascendant: string;
  sunSign: string;
  moonSign: string;
}

interface FengShuiReading {
  userEmail: string;
  readingDate: string;
  propertyType: string;
  direction: string;
  analysis: string;
  recommendations: string;
}
