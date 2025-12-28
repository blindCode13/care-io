import nodemailer from "nodemailer";

/**
 * Invoice email HTML template
 */
function invoiceEmailTemplate({
  companyName,
  customerName,
  customerEmail,
  bookedProduct,
  duration,
  bookingDate,
  invoiceNumber,
  totalAmount,
}) {
  const formattedAmount = Number(totalAmount || 0).toLocaleString();

  return `
  <div style="background:#f3f4f6;padding:30px;font-family:Arial,Helvetica,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:6px;overflow:hidden;">

            <tr>
              <td style="padding:24px;text-align:center;border-bottom:1px solid #e5e7eb;">
                <h2 style="margin:0;letter-spacing:3px;color:#111827;">
                  ${companyName}
                </h2>
              </td>
            </tr>

            <tr>
              <td style="padding:24px;text-align:center;">
                <div style="font-size:48px;color:#22c55e;line-height:1;">✓</div>
                <h1 style="margin:12px 0 6px;font-size:24px;color:#111827;">
                  Thank you for your order
                </h1>
                <p style="margin:0;color:#6b7280;font-size:14px;">
                  We've received your payment and here is a summary
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:0 24px 24px 24px;color:#374151;font-size:14px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:16px 0;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb;">

                      <p style="margin:0 0 12px 0;font-weight:bold;">
                        Invoice #${invoiceNumber}
                      </p>

                      <p style="margin:0 0 10px 0;">
                        <strong>Customer:</strong><br/>
                        ${customerName} (${customerEmail})
                      </p>

                      <p style="margin:0 0 10px 0;">
                        <strong>Booked Product:</strong><br/>
                        ${bookedProduct}
                      </p>

                      <p style="margin:0 0 10px 0;">
                        <strong>Duration:</strong><br/>
                        ${duration}
                      </p>

                      <p style="margin:0;">
                        <strong>Booking Date:</strong><br/>
                        ${bookingDate}
                      </p>

                    </td>
                  </tr>

                  <tr>
                    <td style="padding-top:20px;">
                      <table width="100%">
                        <tr>
                          <td style="font-size:16px;font-weight:bold;">
                            Total amount paid
                          </td>
                          <td align="right" style="font-size:18px;font-weight:bold;color:#22c55e;">
                            $${formattedAmount}
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:20px;text-align:center;font-size:12px;color:#6b7280;border-top:1px solid #e5e7eb;">
                <p style="margin:0 0 8px 0;">We appreciate your business.</p>
                <p style="margin:0;">
                  © ${new Date().getFullYear()} ${companyName}
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </div>
  `;
}

/**
 * Sends invoice email
 */
export async function sendInvoiceEmail(data) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"${data.companyName}" <${process.env.EMAIL_USER}>`,
    to: data.customerEmail,
    subject: `Invoice #${data.invoiceNumber}`,
    html: invoiceEmailTemplate(data),
  });
}
