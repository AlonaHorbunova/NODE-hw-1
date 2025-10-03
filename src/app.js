import { logMessage } from "./logger.js";

async function main() {
  console.log("Запуск приложения и запись логов...");

  // Используем await для гарантированной записи
  await logMessage("Приложение запущено!");

  logMessage("Пользователь вошёл в систему.");

  logMessage("Ошибка: не удалось подключиться к базе данных.");

  await logMessage("Приложение завершило работу.");

  console.log("✅ Логирование завершено. Проверьте log.txt!");
}

main();
