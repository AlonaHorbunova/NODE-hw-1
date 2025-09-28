import EventEmitter from "events";

const chatEmitter = new EventEmitter();

function sendMessage(username, message, emitter) {
  emitter.emit("message", username, message);
}

chatEmitter.on("message", (username, message) => {
  console.log(`${username}: ${message}`);
});

sendMessage("Кум", "Здрастуйте, отче!", chatEmitter);
sendMessage("Дiякон", "Слава Ісусу Христу!Здорові будьте!", chatEmitter);
sendMessage("Кума", "Навіки слава! Здрастуйте, отче!", chatEmitter);
sendMessage(
  "Дiякон",
  "Амінь, амінь! Та гляжу я, кумонько, що Ви щось цьогоріч надто вже...розкішна! Чи не від великої радості, бува, Вас так тілом рознесло?",
  chatEmitter
);
sendMessage(
  "Кум",
  "Е ні, отче! То не радість! То просто вона гарбузової каші з'їла на приході більше, ніж усі парафіяни разом взяті! Гріх-то який!",
  chatEmitter
);
sendMessage(
  "Кума",
  "От язик у тебе, куме! Краще б подивився, чи твій чуб не став тоншим, ніж вчорашня нитка! А я жінка – мені належить бути в тілі, щоб духу більше було!",
  chatEmitter
);
