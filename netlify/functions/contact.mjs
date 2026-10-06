export default async (req) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ message: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const { name, email, organization, organizationWebsite, subject, message } =
      await req.json();

    // Validate required fields
    if (
      !name?.trim() ||
      !email?.trim() ||
      !organization?.trim() ||
      !subject?.trim() ||
      !message?.trim()
    ) {
      return new Response(
        JSON.stringify({
          message: "All required fields must be filled.",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const apiKey = Netlify.env.get("RESEND_API_KEY");

    if (!apiKey) {
      throw new Error("Email API key is not configured.");
    }

    /*
     * =========================================================
     * 1. SEND INTERNAL EMAIL TO VERGE SHIFTS TEAM
     * =========================================================
     */

    const internalResponse = await fetch("https://api.resend.com/emails", {
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
            <div style="
              font-family: Arial, Helvetica, sans-serif;
              max-width: 700px;
              margin: 0 auto;
              padding: 30px;
              color: #333333;
              line-height: 1.6;
            ">

              <h2 style="
                margin-bottom: 25px;
                color: #222222;
              ">
                New Website Enquiry
              </h2>

              <p>
                A new enquiry has been submitted through the
                Verge Shifts website.
              </p>

              <hr style="
                border: none;
                border-top: 1px solid #dddddd;
                margin: 25px 0;
              " />

              <p>
                <strong>Name:</strong><br>
                ${escapeHtml(name)}
              </p>

              <p>
                <strong>Email:</strong><br>
                ${escapeHtml(email)}
              </p>

              <p>
                <strong>Organization:</strong><br>
                ${escapeHtml(organization)}
              </p>

              <p>
                <strong>Organization Website:</strong><br>
                ${
                  organizationWebsite?.trim()
                    ? `<a
                        href="${escapeHtml(organizationWebsite)}"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ${escapeHtml(organizationWebsite)}
                      </a>`
                    : "Not provided"
                }
              </p>

              <p>
                <strong>Subject:</strong><br>
                ${escapeHtml(subject)}
              </p>

              <p>
                <strong>Message:</strong>
              </p>

              <div style="
                background: #f7f7f7;
                padding: 18px;
                border-radius: 6px;
                margin-top: 10px;
              ">
                ${escapeHtml(message).replace(/\n/g, "<br>")}
              </div>

              <hr style="
                border: none;
                border-top: 1px solid #dddddd;
                margin: 30px 0 20px;
              " />

              <p style="
                font-size: 13px;
                color: #777777;
              ">
                This enquiry was submitted through the
                Verge Shifts website contact form.
              </p>

            </div>
          `,
      }),
    });

    const internalResult = await internalResponse.json();

    if (!internalResponse.ok) {
      console.error("Internal email Resend error:", internalResult);

      return new Response(
        JSON.stringify({
          message: "Unable to send your message.",
        }),
        {
          status: 502,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    /*
     * =========================================================
     * 2. SEND THANK-YOU EMAIL TO WEBSITE VISITOR
     * =========================================================
     */

    const thankYouResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",

      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        from: "VERGE SHIFTS <connect@vergeshifts.com>",

        to: [email.trim()],

        reply_to: "connect@vergeshifts.com",

        subject: "Thank You for Contacting Verge Shifts",

        html: `
            <div style="
              font-family: Arial, Helvetica, sans-serif;
              max-width: 650px;
              margin: 0 auto;
              padding: 40px 30px;
              color: #333333;
              line-height: 1.7;
            ">

              <h2 style="
                color: #222222;
                margin-bottom: 25px;
              ">
                Thank You for Contacting Verge Shifts
              </h2>

              <p>
                Dear ${escapeHtml(name)},
              </p>

              <p>
                Thank you for reaching out to
                <strong>Verge Shifts</strong>.
              </p>

              <p>
                We have received your message successfully and
                appreciate you taking the time to connect with us.
              </p>

              <p>
                Our team will review your enquiry and
                <strong>Verge Shifts will connect with you shortly</strong>.
              </p>

              <p>
                We look forward to learning more about your
                requirements and exploring how we can support
                your transformation journey.
              </p>

              <div style="
                margin: 30px 0;
                padding: 20px;
                background: #f7f7f7;
                border-left: 4px solid #333333;
              ">
                <p style="margin: 0;">
                  <strong>Your enquiry</strong>
                </p>

                <p style="margin-bottom: 5px;">
                  <strong>Subject:</strong>
                  ${escapeHtml(subject)}
                </p>

                <p style="margin: 0;">
                  <strong>Organization:</strong>
                  ${escapeHtml(organization)}
                </p>
              </div>

              <p>
                If you have any additional information or questions
                in the meantime, simply reply to this email.
              </p>

              <p style="
                margin-top: 35px;
                margin-bottom: 5px;
              ">
                Warm regards,
              </p>

              <p style="
                margin-top: 0;
                font-weight: bold;
              ">
                Verge Shifts
              </p>

              <p style="
                margin-top: 0;
                font-size: 14px;
                color: #777777;
              ">
                Transformation &amp; Transition Management
              </p>

              <hr style="
                border: none;
                border-top: 1px solid #dddddd;
                margin: 35px 0 20px;
              " />

              <p style="
                font-size: 12px;
                color: #888888;
                text-align: center;
              ">
                This is an automated confirmation that your
                message has been received through the
                Verge Shifts website.
              </p>

            </div>
          `,
      }),
    });

    const thankYouResult = await thankYouResponse.json();

    /*
     * The main enquiry was already successfully delivered.
     * Therefore, don't fail the whole request if the
     * confirmation email has a problem.
     */

    if (!thankYouResponse.ok) {
      console.error("Thank-you email Resend error:", thankYouResult);
    }

    /*
     * =========================================================
     * 3. SUCCESS RESPONSE
     * =========================================================
     */

    return new Response(
      JSON.stringify({
        success: true,
        message: "Your message has been sent successfully.",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
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
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
};

/*
 * =========================================================
 * HTML ESCAPE FUNCTION
 * =========================================================
 */

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
