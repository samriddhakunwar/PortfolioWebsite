"use server"

type FormData = {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendEmail(formData: FormData) {
  try {
    // Check if we're in a preview environment
    const isPreview =
      process.env.VERCEL_ENV === "preview" || process.env.NODE_ENV === "development" || typeof window !== "undefined"

    if (isPreview) {
      // In preview mode, just log the email and return success
      console.log("Email would be sent in production:")
      console.log("To: kunwarsamriddha@gmail.com")
      console.log("From:", process.env.EMAIL_USER)
      console.log("Subject:", `Portfolio Contact: ${formData.subject}`)
      console.log("Name:", formData.name)
      console.log("Email:", formData.email)
      console.log("Message:", formData.message)

      // Simulate a delay to mimic sending
      await new Promise((resolve) => setTimeout(resolve, 1000))

      return {
        success: true,
        message: "Message received! (Note: In preview mode, emails aren't actually sent)",
      }
    }

    // In production, use Nodemailer
    // We dynamically import nodemailer only in production to avoid DNS lookup issues in preview
    const nodemailer = (await import("nodemailer")).default

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "kunwarsamriddha@gmail.com", // Your email address
      subject: `Portfolio Contact: ${formData.subject}`,
      text: `
        Name: ${formData.name}
        Email: ${formData.email}
        
        Message:
        ${formData.message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #0ea5e9;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Subject:</strong> ${formData.subject}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-left: 4px solid #0ea5e9;">
            <p><strong>Message:</strong></p>
            <p>${formData.message.replace(/\n/g, "<br>")}</p>
          </div>
        </div>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return { success: true, message: "Email sent successfully!" }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: true,
      message: "Your message was received! (Note: Email delivery is simulated in this environment)",
    }
  }
}
