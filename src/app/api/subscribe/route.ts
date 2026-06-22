import { NextRequest, NextResponse } from "next/server";

const SENDER_API_KEY = process.env.SENDER_API_KEY;

const GROUP_IDS: Record<string, string> = {
  newsletter: "e5wB0A",
  waitlist: "bYYgWK",
  book: "bYYgWK",
};

interface SubscribePayload {
  email: string;
  firstName?: string;
  list?: keyof typeof GROUP_IDS;
}

export async function POST(req: NextRequest) {
  try {
    const { email, firstName, list = "newsletter" }: SubscribePayload = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    if (!SENDER_API_KEY) {
      return NextResponse.json({ error: "Service unavailable" }, { status: 503 });
    }

    const groupId = GROUP_IDS[list] ?? GROUP_IDS.newsletter;

    const res = await fetch("https://api.sender.net/v2/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SENDER_API_KEY}`,
      },
      body: JSON.stringify({
        email,
        firstname: firstName || undefined,
        groups: [groupId],
      }),
    });

    if (!res.ok && res.status !== 409) {
      const err = await res.text();
      console.error("Sender error:", err);
      return NextResponse.json({ error: "Subscription failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Subscribe route error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
