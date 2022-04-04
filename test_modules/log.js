const EventEmitter = require('events'); // * подключаем ивенты

class Logger extends EventEmitter { // * создаём класс логгер, в котором ещё есть эмиттер событий
    log = (msg) => { // * функция лог
        console.log(msg); // * в консоль сообщение
        this.emit('some_event', {id: 1, text: 'Event test text! This is working extra module!'}); // * вызвать событие текста
    }
}

module.exports = Logger; // * экспорт модуля