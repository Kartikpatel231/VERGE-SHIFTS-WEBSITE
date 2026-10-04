export default async (req) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ message: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const { name, email, subject, message } = await req.json();

    if (
      !name?.trim() ||
      !email?.trim() ||
      !subject?.trim() ||
      !message?.trim()
    ) {
      return new Response(
        JSON.stringify({ message: "All fields are required." }),
        { status: 400 },
      );
    }

    const apiKey = Netlify.env.get("RESEND_API_KEY");

    if (!apiKey) {
      throw new Error("Email API key is not configured.");
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "VERGE SHIFTS Website <connect@vergeshifts.com>",
        to: ["kartik.p@fjtco.com", "arun@fjtco.com", "ria@vergeshifts.com"],
        reply_to: email.trim(),
        subject: `Website Enquiry: ${subject}`,
        html: `
          <h2>New Website Enquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
        `,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Resend error:", result);

      return new Response(
        JSON.stringify({ message: "Unable to send your message." }),
        { status: 502 },
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Your message has been sent successfully.",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    console.error("Contact function error:", error);

    return new Response(
      JSON.stringify({
        message: "Something went wrong. Please try again later.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
};

function escapeHtml(value) {
  return String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[char],
  );
}
