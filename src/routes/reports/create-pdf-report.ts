import type { FastifyReply, FastifyRequest } from "fastify"
import puppeteer from "puppeteer"
import { getReceiptHtmlContent } from "./utils"

const createPdfReport = async (request: FastifyRequest, reply: FastifyReply) => {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ],
    defaultViewport: {
      width: 390,
      height: 650,
    },
  })
  const receiptHtmlContent = getReceiptHtmlContent()
  
  const page = await browser.newPage()
  
  await page.setContent(receiptHtmlContent);
  var pdfContent = await page.pdf({ width: 390, height: 650 })
  
  await browser.close()

  const pdfBuffer = Buffer.from(pdfContent)

  return reply
    .header('Content-Type', 'application/pdf')
    .header("Content-Disposition", 'inline; filename="recibo.pdf"')
    .send(pdfBuffer)
}

export default createPdfReport