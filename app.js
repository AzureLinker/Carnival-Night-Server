const Logger = require('./test_modules/log'); // * импортируем модуль
const logger = new Logger(); // * новый класс логгер

logger.on('some_event', (args) => { // * событие логгера
    const { id, text } = args; // * даём аргументы
    console.log(id, text); // * вывод в консоль
});

logger.log('User Logged!'); // * функия лог в логгере