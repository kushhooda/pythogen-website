import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    const date = new Date().toISOString();
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

    // Log to Vercel Runtime Logs so they are always accessible
    console.log(`[NEWSLETTER SUBSCRIBE] ${date} - New Subscriber: ${email}`);

    // If a webhook is configured, send it there
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: `🎉 **New Newsletter Subscriber!**\n**Email:** \`${email}\`\n**Time:** ${date}`
        }),
      });
    } else {
      console.warn("DISCORD_WEBHOOK_URL is not set. Emails are only being logged to Vercel Runtime Logs.");
    }

    return NextResponse.json({ success: true, message: "Subscribed successfully" });
  } catch (error) {
    console.error("Newsletter error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe" },
      { status: 500 }
    );
  }
}
