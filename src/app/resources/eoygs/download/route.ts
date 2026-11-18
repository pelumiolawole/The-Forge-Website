import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

// Served directly by this route handler (not a client-side redirect
// page, unlike /resources/h2/download) so that curl -I on this exact
// URL returns the PDF with the right headers — that's what the Sender
// email button links to.
export const runtime = "nodejs";

const PDF_PATH = path.join(process.cwd(), "public", "PDFs", "The_Straight_Line_Method.pdf");
const DOWNLOAD_FILENAME = "The Straight Line Method.pdf";

export async function GET() {
  try {
    const file = await readFile(PDF_PATH);
    return new NextResponse(new Uint8Array(file), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${DOWNLOAD_FILENAME}"; filename*=UTF-8''${encodeURIComponent(DOWNLOAD_FILENAME)}`,
        "Content-Length": String(file.byteLength),
        "X-Robots-Tag": "noindex",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (err) {
    console.error("EOYGS download route error:", err);
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
}
