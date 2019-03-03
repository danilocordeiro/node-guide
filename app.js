const express = require('express');

const app = express();

app.use(express.json());

app.listen(3000);


// (req, res) => {
//   const url = req.url;
//   const method = req.method;

//   if(req.url === '/') {
//     res.write('<html>')
//     res.write('<body>')
//     res.write('<h1>Hello</h1>');
//     res.write('<form action="/create-user" method="POST"><input type="text" name="username" /><button type="submit">Send</button></form>')
//     res.write('</body>')
//     res.write('</html>')
//     return res.end();
//   }

//   if(req.url === '/users') {
//     res.write('<html>')
//     res.write('<ul><li>User 1 </li></ul>');
//     res.write('</html>')
//     return res.end();
//   }

//   if(url === '/create-user' && method === 'POST') {
//     const body = [];
//     req.on('data', (chunk) => {
//       body.push(chunk);
//     });

//     req.on('end', () => {
//       const parseBody = Buffer.concat(body).toString();
//       console.log(parseBody.split('=')[1]);
//     });

//     return res.end();
//   }

// })