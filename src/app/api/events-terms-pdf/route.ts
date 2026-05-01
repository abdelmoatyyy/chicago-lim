import { NextResponse } from "next/server";

export const runtime = "nodejs";

const agreementText = `ChicagoTrans Limousine Event Transportation Terms and Conditions Agreement

This Terms and Conditions Agreement ("Terms") sets forth the payment, cancellation, and liability policies that govern all limousine and transportation services ("Services") provided by ChicagoTrans Limousine, to the customer (____________) for any event, wedding, corporate function, or private transportation booking. By confirming a booking, the Client acknowledges that they have read, understood, and agree to be bound by these Terms in their entirety.

1. Payment Terms
- Sprinter Transit, Limo Bus, Party Bus, or Motor Coach bookings: Full payment of the total booking amount (including all taxes, fees, gratuity, and tolls) is required no later than seven (7) calendar days prior to the scheduled pickup time.
- Sedan and SUV bookings: Payment terms will be specified in the individual booking confirmation. Unless otherwise stated, the balance is due at the time of service or as agreed in writing.
- All payments are non-refundable except as expressly provided in the Cancellation Policy below. Accepted payment methods include credit/debit card, ACH/wire transfer, or cashier's check.

2. Cancellation Policy
Cancellations must be made in writing (email or through the booking portal) and will be effective only upon receipt and written confirmation by the Company.
- Sprinter Transit, Limo Bus, Party Bus, or Motor Coach: Any cancellation received less than seven (7) calendar days before the scheduled pickup time will result in a full charge equal to 100% of the total booking amount. No refunds or credits will be issued. Cancellations with seven (7) or more days' notice may be eligible for a refund of the deposit or paid amount, less any non-refundable processing fees (maximum 5%).
- Sedan and SUV: Cancellation fees will be assessed on an hourly basis. The chargeable period begins at the scheduled pickup time and continues for the duration of the originally booked service (or the Company's minimum hourly requirement, whichever is greater).
  - Cancellations received with sufficient advance notice (as specified in your booking confirmation) may incur no fee or a reduced fee.
  - Cancellations received within the final hours prior to pickup will be charged at the full hourly rate for the booked period starting from the scheduled pickup time.

3. Client Responsibility for Damages and Vehicle Condition
The Client is fully responsible and liable for any damage, excessive soiling, or loss incurred to any vehicle during the provision of Services. This includes, but is not limited to, the Sprinter Transit, Limo Bus, Party Bus, Motor Coach, Sedan, or SUV.
- The Client, their guests, and invitees must treat the vehicle with care and respect.
- The Client agrees to pay, immediately upon demand, the full cost of repairs, professional cleaning, or replacement value of any damaged or soiled items (including upholstery, flooring, windows, electronics, or exterior).
- The Company reserves the right to charge the Client's credit card on file or invoice the Client directly for all such costs.
- The Client remains responsible even if the damage is caused by a third party under their booking.

4. No-Show and Late Arrival Policy
If the Client or their party fails to appear at the agreed pickup location within 15 minutes of the scheduled time (without prior notice), the booking will be treated as a no-show and the full cancellation fees above will apply. The Company will attempt to contact the Client, but is not obligated to wait beyond the grace period or alter the itinerary.

5. General Provisions
- These Terms constitute the entire agreement between the parties regarding payment, cancellation, and damage responsibility. Any modifications must be made in writing and signed by an authorized representative of the Company.
- The Client acknowledges that all bookings are subject to vehicle availability and that the Company may substitute a comparable vehicle if necessary.
- Governing Law: These Terms shall be governed by the laws of the State of Illinois.
  Any disputes shall be resolved exclusively in the courts located in Cook County, Illinois.
- The Client agrees to indemnify and hold harmless the Company, its officers, employees, and agents from any claims, damages, or liabilities arising from the Client's or their guests' conduct or negligence during the Service.

By signing or electronically confirming your booking, you confirm acceptance of these Terms and Conditions.

Accepted and Agreed:
Client Name: ___________________________    Date: ____________
Signature: _____________________________
ChicagoTrans Limousine
Lincolnwood, Illinois 60712
Email: mina@chicagotranslimo.com
Phone: 312-645-0505`;

const PAGE_WIDTH = 612;
const PAGE_HEIGHT = 792;
const LEFT_MARGIN = 48;
const TOP_MARGIN = 750;
const LINE_HEIGHT = 14;
const MAX_CHARS_PER_LINE = 92;
const LINES_PER_PAGE = 48;

function escapePdfText(input: string): string {
  return input.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function wrapLine(line: string): string[] {
  if (!line.trim()) return [""];
  if (line.length <= MAX_CHARS_PER_LINE) return [line];

  const words = line.split(" ");
  const wrapped: string[] = [];
  let current = "";

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length <= MAX_CHARS_PER_LINE) {
      current = next;
    } else {
      if (current) wrapped.push(current);
      current = word;
    }
  }

  if (current) wrapped.push(current);
  return wrapped;
}

function buildPdfFromText(text: string): Buffer {
  const rawLines = text.split("\n");
  const wrappedLines = rawLines.flatMap((line) => wrapLine(line));

  const pages: string[][] = [];
  for (let i = 0; i < wrappedLines.length; i += LINES_PER_PAGE) {
    pages.push(wrappedLines.slice(i, i + LINES_PER_PAGE));
  }

  let objectIndex = 1;
  const catalogId = objectIndex++;
  const pagesId = objectIndex++;
  const pageObjectIds: number[] = [];
  const contentObjectIds: number[] = [];
  const fontId = objectIndex++;

  for (let i = 0; i < pages.length; i += 1) {
    pageObjectIds.push(objectIndex++);
    contentObjectIds.push(objectIndex++);
  }

  const objects: { id: number; content: string }[] = [];
  objects.push({
    id: catalogId,
    content: `<< /Type /Catalog /Pages ${pagesId} 0 R >>`,
  });

  objects.push({
    id: pagesId,
    content: `<< /Type /Pages /Kids [${pageObjectIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${pageObjectIds.length} >>`,
  });

  objects.push({
    id: fontId,
    content: `<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>`,
  });

  pages.forEach((pageLines, idx) => {
    const contentStreamLines = ["BT", "/F1 11 Tf", `${LEFT_MARGIN} ${TOP_MARGIN} Td`];

    pageLines.forEach((line, lineIndex) => {
      const escaped = escapePdfText(line);
      if (lineIndex === 0) {
        contentStreamLines.push(`(${escaped}) Tj`);
      } else {
        contentStreamLines.push(`0 -${LINE_HEIGHT} Td`);
        contentStreamLines.push(`(${escaped}) Tj`);
      }
    });

    contentStreamLines.push("ET");
    const streamBody = contentStreamLines.join("\n");

    objects.push({
      id: contentObjectIds[idx],
      content: `<< /Length ${Buffer.byteLength(streamBody, "utf8")} >>\nstream\n${streamBody}\nendstream`,
    });

    objects.push({
      id: pageObjectIds[idx],
      content: `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${PAGE_WIDTH} ${PAGE_HEIGHT}] /Resources << /Font << /F1 ${fontId} 0 R >> >> /Contents ${contentObjectIds[idx]} 0 R >>`,
    });
  });

  let pdf = "%PDF-1.4\n";
  const xrefPositions: number[] = [0];

  for (const object of objects.sort((a, b) => a.id - b.id)) {
    xrefPositions[object.id] = Buffer.byteLength(pdf, "utf8");
    pdf += `${object.id} 0 obj\n${object.content}\nendobj\n`;
  }

  const xrefStart = Buffer.byteLength(pdf, "utf8");
  const totalObjects = objects.length + 1;
  pdf += `xref\n0 ${totalObjects}\n`;
  pdf += "0000000000 65535 f \n";
  for (let i = 1; i < totalObjects; i += 1) {
    const pos = String(xrefPositions[i] ?? 0).padStart(10, "0");
    pdf += `${pos} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${totalObjects} /Root ${catalogId} 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

  return Buffer.from(pdf, "utf8");
}

export async function GET() {
  const pdf = buildPdfFromText(agreementText);

  return new NextResponse(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="chicagotrans-event-terms-agreement.pdf"',
      "Content-Length": String(pdf.length),
      "Cache-Control": "no-store",
    },
  });
}
