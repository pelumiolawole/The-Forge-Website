import { NextRequest, NextResponse } from "next/server";

const SENDER_API_KEY = process.env.SENDER_API_KEY;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const PETTY_AUDIT_GROUP_ID = "e5wB0A";

// ─── TYPES ────────────────────────────────────────────────────────────────────

interface AuditPayload {
  email: string;
  firstName?: string;
  identityType: string;
  emailKey: string;
  domainScores: number[];
  total: number;
}

// ─── TOP 3 BLOCKERS BY TYPE ───────────────────────────────────────────────────

const blockers: Record<string, { title: string; body: string }[]> = {
  overthinker: [
    {
      title: "Analysis paralysis masking as thoroughness",
      body: "You are not preparing. You are protecting yourself from the exposure that comes with committing. Every extra round of analysis is a way of staying in the space where you cannot yet fail.",
    },
    {
      title: "Identity tied to being the one who gets it right",
      body: "When being right is who you are, every decision becomes ego-threatening. You cannot afford to act until you are certain — and certainty never comes, because you have built a self-concept that cannot survive being wrong.",
    },
    {
      title: "Momentum erosion through delayed commitment",
      body: "Every time you delay a decision that could have been made, you send yourself a signal: I am not the kind of person who acts. That signal accumulates. Over time, the identity of the overthinker becomes self-reinforcing.",
    },
  ],
  performer: [
    {
      title: "Self-concept dependent on external performance",
      body: "Your sense of who you are is built on what others see. When the audience is gone, so is the certainty. This is not confidence. It is an identity that requires constant refuelling.",
    },
    {
      title: "Disappearing when the room is not watching",
      body: "The version of you that shows up for others is extraordinary. The version that shows up for yourself is inconsistent at best. The gap is widening and the cost is accumulating.",
    },
    {
      title: "Chronic role engulfment",
      body: "The roles you play have become so central that there is very little left when they are removed. When the role ends — and every role ends — what remains is the question you have been performing around.",
    },
  ],
  avoider: [
    {
      title: "Productive busyness as emotional avoidance",
      body: "The activity is real. The output is real. The avoidance is also real. What you are staying too busy to face is the question that keeps resurfacing when the noise drops.",
    },
    {
      title: "The story that busyness equals worth",
      body: "When self-worth is tied to output, slowing down feels dangerous. Rest becomes guilt. Empty space becomes anxiety. The busyness is not just avoidance — it is your current definition of being enough.",
    },
    {
      title: "The essential work never gets touched",
      body: "You are busy with real things. But the things that would actually change your trajectory keep getting moved. Not because you forgot them. Because facing them feels more threatening than carrying them.",
    },
  ],
  drifter: [
    {
      title: "Identity without a fixed centre",
      body: "You move well when the conditions are right. When they shift, so do you. The drifting is not aimlessness — it is the absence of an identity stable enough to hold you on course when motivation is absent.",
    },
    {
      title: "Potential as a permanent holding position",
      body: "As long as you have not fully committed, you cannot be fully evaluated. The drift protects your potential by never fully testing it. But untested potential does not compound. It just ages.",
    },
    {
      title: "The narrative has no protagonist",
      body: "The story you tell about your life lacks a clear main character with a clear direction. Things happen to you. Circumstances shift you. What is missing is the chapter where you decide who is steering.",
    },
  ],
};

// ─── TYPE DESCRIPTIONS ────────────────────────────────────────────────────────

const typeDescriptions: Record<string, { headline: string; body: string; accentColor: string }> = {
  overthinker: {
    headline: "The Overthinker",
    body: "You are intelligent, capable, and you know it. The problem is that your mind has become a prison built entirely out of possibility. You can see every angle, anticipate every obstacle, and construct every contingency — which is exactly why nothing moves. The analysis is not the work. It is the avoidance of the work.",
    accentColor: "#008E97",
  },
  performer: {
    headline: "The Performer",
    body: "You are extraordinary at showing up for others. In every room, every relationship, every role — you deliver. The gap no one sees is between that version of you and the one that exists when the audience is gone. You have become so good at being what others need that you have lost reliable access to what you actually are.",
    accentColor: "#C8963E",
  },
  avoider: {
    headline: "The Avoider",
    body: "Your calendar is full. Your to-do list is long. You are always in motion. And somehow the things that would actually change your life keep getting pushed to next week. This is not a time management problem. Busyness is your most sophisticated defence mechanism. You are not lazy. You are hiding in plain sight.",
    accentColor: "#008E97",
  },
  drifter: {
    headline: "The Drifter",
    body: "You are capable. People around you know it. You probably know it too. And yet something keeps you from fully committing to a direction and holding it. The issue is not effort or intelligence. It is that you have not yet built an identity strong enough to keep you anchored when the motivation fades. Potential without direction is just noise.",
    accentColor: "#C8963E",
  },
};

// ─── BAR HTML HELPER ─────────────────────────────────────────────────────────

function scoreBar(label: string, score: number, color: string): string {
  const pct = Math.round((score / 25) * 100);
  const remainPct = 100 - pct;
  return `
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
      <tr><td>
        <p style="margin:0 0 6px;font-family:Arial,sans-serif;font-size:13px;color:#6B7280;">${label}</p>
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td width="${pct}%" style="height:8px;background-color:${color};border-radius:${remainPct > 0 ? "4px 0 0 4px" : "4px"};"></td>
            ${remainPct > 0 ? `<td style="height:8px;background-color:#E5E5E5;border-radius:0 4px 4px 0;"></td>` : ""}
          </tr>
        </table>
        <p style="margin:4px 0 0;font-family:Arial,sans-serif;font-size:12px;color:#9CA3AF;">${score} / 25</p>
      </td></tr>
    </table>`;
}

// ─── BLOCKER HTML HELPER ──────────────────────────────────────────────────────

function blockerItem(num: string, title: string, body: string, color: string): string {
  return `
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
      <tr><td style="border-left:4px solid ${color};padding-left:20px;">
        <p style="margin:0 0 6px;font-family:Georgia,serif;font-size:16px;font-weight:700;color:#0A0A0A;">${num}. ${title}</p>
        <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;line-height:1.7;color:#6B7280;">${body}</p>
      </td></tr>
    </table>`;
}

// ─── BUILD EMAIL HTML ─────────────────────────────────────────────────────────

function buildEmailHtml(payload: AuditPayload): string {
  const { firstName, emailKey, domainScores, total } = payload;
  const typeInfo = typeDescriptions[emailKey] ?? typeDescriptions.drifter;
  const typeBlockers = blockers[emailKey] ?? blockers.drifter;
  const domainNames = ["Self-Concept", "Habits", "Relationships", "Environment", "Narrative"];
  const name = firstName ? firstName : "there";

  const domainBars = domainScores
    .map((score, i) => scoreBar(domainNames[i], score, i % 2 === 0 ? "#008E97" : "#C8963E"))
    .join("");

  const blockerItems = typeBlockers
    .map((b, i) => blockerItem(`0${i + 1}`, b.title, b.body, typeInfo.accentColor))
    .join("");

  const totalLabel =
    total >= 100
      ? "Strong foundation across most domains."
      : total >= 75
      ? "Some clear strengths with specific gaps to address."
      : "Significant patterns present across multiple domains.";

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Your Petty Audit Results</title>
</head>
<body style="margin:0;padding:0;background-color:#F7F4EF;font-family:Georgia,serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F7F4EF;">
<tr><td align="center" style="padding:40px 20px;">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

  <tr><td style="background-color:#0A0A0A;padding:32px 40px;border-radius:12px 12px 0 0;">
    <p style="margin:0;font-family:Arial,sans-serif;color:#008E97;font-size:12px;letter-spacing:3px;text-transform:uppercase;">The Petty Audit</p>
    <h1 style="margin:12px 0 0;font-family:Georgia,serif;color:#ffffff;font-size:28px;font-weight:700;line-height:1.2;">Your Results Are In.</h1>
  </td></tr>

  <tr><td style="background-color:${typeInfo.accentColor};padding:24px 40px;">
    <p style="margin:0;color:rgba(255,255,255,0.8);font-size:12px;letter-spacing:2px;text-transform:uppercase;font-family:Arial,sans-serif;">Your Identity Type</p>
    <h2 style="margin:8px 0 0;font-family:Georgia,serif;color:#ffffff;font-size:32px;font-weight:700;">${typeInfo.headline}</h2>
  </td></tr>

  <tr><td style="background-color:#ffffff;padding:40px;">
    <p style="margin:0 0 20px;font-family:Georgia,serif;font-size:18px;line-height:1.7;color:#0A0A0A;">${name}, your audit results are clear.</p>
    <p style="margin:0 0 20px;font-family:Arial,sans-serif;font-size:15px;line-height:1.8;color:#4B4B4B;">${typeInfo.body}</p>
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F7F4EF;border-radius:8px;">
      <tr><td style="padding:16px 20px;">
        <p style="margin:0;font-family:Arial,sans-serif;font-size:13px;color:#6B7280;">Overall score: <strong style="color:#0A0A0A;">${total} / 125</strong> &nbsp;·&nbsp; ${totalLabel}</p>
      </td></tr>
    </table>
  </td></tr>

  <tr><td style="background-color:#F0FAFB;padding:40px;">
    <p style="margin:0 0 24px;font-family:Georgia,serif;font-size:20px;font-weight:700;color:#0A0A0A;">Your 5 Domain Scores</p>
    ${domainBars}
  </td></tr>

  <tr><td style="background-color:#ffffff;padding:40px;">
    <p style="margin:0 0 8px;font-family:Georgia,serif;font-size:20px;font-weight:700;color:#0A0A0A;">Your Top 3 Identity-Level Blockers</p>
    <p style="margin:0 0 28px;font-family:Arial,sans-serif;font-size:14px;line-height:1.7;color:#9CA3AF;">These are the patterns costing you the most right now, connected to the identity layer underneath each one.</p>
    ${blockerItems}
  </td></tr>

  <tr><td style="background-color:#0A0A0A;padding:40px;border-radius:0 0 12px 12px;">
    <p style="margin:0 0 8px;font-family:Arial,sans-serif;color:#008E97;font-size:12px;letter-spacing:2px;text-transform:uppercase;">Your Next Step</p>
    <h3 style="margin:0 0 16px;font-family:Georgia,serif;color:#ffffff;font-size:22px;font-weight:700;">The patterns are named. Now they need to be dismantled.</h3>
    <p style="margin:0 0 24px;font-family:Arial,sans-serif;font-size:15px;line-height:1.7;color:rgba(255,255,255,0.6);">
      Petty Little Things goes deep on your specific pattern type — where it comes from, what it is protecting, and the identity shift required to move past it.
    </p>
    <table cellpadding="0" cellspacing="0" style="margin-bottom:12px;">
      <tr><td style="background-color:#C8963E;border-radius:8px;">
        <a href="https://pelumiolawole.com/book" style="display:inline-block;padding:14px 28px;font-family:Arial,sans-serif;font-size:15px;font-weight:700;color:#0A0A0A;text-decoration:none;">Get Petty Little Things →</a>
      </td></tr>
    </table>
    <table cellpadding="0" cellspacing="0">
      <tr><td style="border:2px solid rgba(255,255,255,0.15);border-radius:8px;">
        <a href="https://pelumiolawole.com/forge-program" style="display:inline-block;padding:12px 24px;font-family:Arial,sans-serif;font-size:14px;font-weight:600;color:rgba(255,255,255,0.7);text-decoration:none;">Learn about The Forge Program →</a>
      </td></tr>
    </table>
    <p style="margin:28px 0 0;font-family:Arial,sans-serif;font-size:13px;color:rgba(255,255,255,0.3);">
      © Pelumi Olawole &nbsp;·&nbsp;
      <a href="https://pelumiolawole.com" style="color:rgba(255,255,255,0.3);text-decoration:none;">pelumiolawole.com</a>
    </p>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}

// ─── ROUTE HANDLER ────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const payload: AuditPayload = await req.json();
    const { email, firstName, identityType, emailKey, domainScores, total } = payload;

    if (!email || !identityType || !domainScores || domainScores.length !== 5) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    if (!SENDER_API_TOKEN) {
      return NextResponse.json({ error: "Missing API token" }, { status: 500 });
    }

    // 1. Add subscriber to Petty Audit group with custom fields
    const subscriberRes = await fetch("https://api.sender.net/v2/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SENDER_API_KEY}`,
      },
      body: JSON.stringify({
        email,
        firstname: firstName || undefined,
        groups: [PETTY_AUDIT_GROUP_ID],
        fields: {
          identity_type: identityType,
          total_score: String(total),
          self_concept_score: String(domainScores[0]),
          habits_score: String(domainScores[1]),
          relationships_score: String(domainScores[2]),
          environment_score: String(domainScores[3]),
          narrative_score: String(domainScores[4]),
        },
      }),
    });

    if (!subscriberRes.ok) {
      const err = await subscriberRes.text();
      console.error("Sender subscriber error:", err);
    }

    // 2. Build and send transactional report email via Resend
    const emailHtml = buildEmailHtml(payload);

    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Pelumi Olawole <coach@pelumiolawole.com>",
        to: [email],
        subject: `Your Petty Audit Results — ${identityType}`,
        html: emailHtml,
        text: `Your Petty Audit Results\n\nIdentity Type: ${identityType}\n\nYour full breakdown is in the HTML version of this email.\n\nVisit https://pelumiolawole.com to learn more.`,
      }),
    });

    if (!emailRes.ok) {
      const err = await emailRes.text();
      console.error("Resend email error:", err);
      return NextResponse.json({ error: "Email send failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("Audit report route error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}