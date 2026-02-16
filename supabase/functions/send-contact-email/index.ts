import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { Resend } from "npm:resend@^4.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactFormData {
  firstname: string;
  lastname: string;
  email: string;
  company?: string;
  project_type: string;
  budget_range?: string;
  project_details: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    if (!resendApiKey) {
      throw new Error("RESEND_API_KEY environment variable is not set");
    }

    const resend = new Resend(resendApiKey);
    const formData: ContactFormData = await req.json();

    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${formData.firstname} ${formData.lastname}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      ${formData.company ? `<p><strong>Company:</strong> ${formData.company}</p>` : ''}
      <p><strong>Project Type:</strong> ${formData.project_type}</p>
      ${formData.budget_range ? `<p><strong>Budget Range:</strong> ${formData.budget_range}</p>` : ''}
      <p><strong>Project Details:</strong></p>
      <p>${formData.project_details.replace(/\n/g, '<br>')}</p>
    `;

    const { data, error } = await resend.emails.send({
      from: "Contact Form <timothy@godesign.one>",
      to: ["godesigngo@gmail.com"],
      subject: `New Contact Form: ${formData.project_type} - ${formData.firstname} ${formData.lastname}`,
      html: emailHtml,
      reply_to: formData.email,
    });

    if (error) {
      throw error;
    }

    return new Response(
      JSON.stringify({ success: true, data }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Failed to send email"
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
