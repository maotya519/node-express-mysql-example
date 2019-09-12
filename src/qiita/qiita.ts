// // Qiita
// // GET操作
// server.get('/test', (req, res) => {
//     res.send('Simple REST API');
// });

// server.get('/api/courses', (req, res) => {
//     res.send(courses);
// });
//     // POST操作
// server.post('/api/courses', (req, res) => {
//     const course = {
//         id: courses.length + 1,
//         name: req.body.name,
//     };
//     courses.push(course);
//     res.send(course);
// });
// // UPDATE操作
// server.put('/api/courses/:id', (req, res) => {
//     const course = courses.find(c => c.id === parseInt(req.params.id));
//     if (!course) return res.status(404).send('The course with the given ID was not found.');

//     course.name = req.body.name;
//     res.send(course);
// });
// // DELETE操作
// server.delete('/api/courses/:id', (req, res) => {
//     const course = courses.find(c => c.id === parseInt(req.params.id));
//     if(!course) return res.status(404).send('The couse with the given ID was not found.');

//     const index = courses.indexOf(course);
//     courses.splice(index, 1);

//     res.send(course);
// });
