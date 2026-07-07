// Client marquee data. The homepage marquee renders ONLY entries with
// verified: true — flip the flag per name once the engagement can be
// substantiated. With zero verified entries the marquee section is
// replaced by the CredentialBand.
// IIC Networks is intentionally absent: it is a founder credential,
// not a client, and lives in content/credentials.ts.
export type Client = {
  name: string;
  initials: string;
  verified: boolean;
};

export const CLIENTS: Client[] = [
  { name: "Seven30 Real Estate",     initials: "S3", verified: false },
  { name: "Eyitayo Agri Hub",        initials: "EA", verified: false },
  { name: "Eden Designs",            initials: "ED", verified: false },
  { name: "Aphrodite",               initials: "AP", verified: false },
  { name: "Zoe Choosers Foundation", initials: "ZC", verified: false },
  { name: "Dear Auntie Funmi",       initials: "AF", verified: false },
  { name: "Suprano Clothing",        initials: "SC", verified: false },
  { name: "Northgate Group",         initials: "NG", verified: false },
  { name: "Vantage & York",          initials: "VY", verified: false },
  { name: "Trellis Capital",         initials: "TC", verified: false },
  { name: "Greyfield & Co",          initials: "GF", verified: false },
  { name: "Stonehaven",              initials: "SH", verified: false },
  { name: "Edgecore",                initials: "EC", verified: false },
];
