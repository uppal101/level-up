// Student.forge({ id: req.params.student_id })
// .fetch({
//   columns: ['id'],
//   withRelated: ['challengeSubmissionsPts', { 'challengeSubmissionsPts.challenge': function (qb) {
//     qb.column('id', 'point_value');
//   } }],
// })
// router.get('/students/:id', (req, res) => {
//   Student.forge({ id: req.params.id })
//   .fetch({
//     columns: ['email', 'first_name', 'id'],
//     withRelated: [ 'challengeSubmissions'
//       // {'challengeSubmissions': function(qb) { qb.column('id', 'challenge_id'); } }
//      , { 'challengeSubmissions.challenge': function (qb) {
//        console.log(qb);
//        qb.column('id', 'point_value', 'description'); } }
//    ],
//   })
//   .then((student) => {
//     res.status(200).json(student);
//   })
//   .catch(err => console.error(err));
// });
