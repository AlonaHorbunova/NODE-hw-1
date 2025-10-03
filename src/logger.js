import fs from "node:fs/promises";
import path from "node:path";

const LOG_FILE = path.join(process.cwd(), "log.txt");

export async function logMessage(message) {
  const timestamp = new Date().toISOString();
  const logEntry = `${timestamp}: ${message}\n`;

  try {
    await fs.appendFile(LOG_FILE, logEntry);
  } catch (err) {
    console.error("❌ Ошибка при записи лога:", err);
  }
}
