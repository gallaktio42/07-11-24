var http = require('http');

// создаем объект сервера:
http.createServer(function (req, res) {
  res.write('Monkey is not worked. On place Kolyan Mesmer'); // отправляем ответ клиенту
  res.end(); // завершаем ответ
}).listen(3369); // сервер слушает на порту 8080
