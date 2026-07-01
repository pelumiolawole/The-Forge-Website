import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, phone, address } = await req.json();

    if (!email || !firstName || !lastName || !phone || !address) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const groupId = process.env.SENDER_GROUP_ID ?? "bqoKx7";

    const senderRes = await fetch("https://api.sender.net/v2/subscribers", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.SENDER_API_KEY}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        firstname: firstName,
        lastname: lastName,
        groups: [groupId],
        fields: {
          phone,
          address,
        },
        tags: ["nigeria-order"],
      }),
    });

    if (!senderRes.ok) {
      const body = await senderRes.text();
      console.error("Sender.net error:", senderRes.status, body);
      return NextResponse.json({ error: "Failed to register order" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Nigeria order error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
