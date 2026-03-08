// Sender.net API integration
// Add your API key to .env.local first

const SENDER_API_KEY = process.env.SENDER_API_KEY;
const SENDER_API_URL = process.env.SENDER_API_URL || "https://api.sender.net/v2";

export async function addSubscriber(email: string, fields?: Record<string, string>) {
  const response = await fetch(`${SENDER_API_URL}/subscribers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${SENDER_API_KEY}`,
    },
    body: JSON.stringify({
      email,
      ...fields,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to add subscriber");
  }

  return response.json();
}
