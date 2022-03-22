const router = require('express').Router();
const { Progress } = require('../../models');
const withAuth = require('../../utils/auth'); //TODO add for production turn in

//GET all progress 
router.get('/', (req, res) => {
  Progress.findAll({
    
  })
    .then(dbProgressData => res.json(dbProgressData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST ROUTE TO KEEP TRACK OF NUMBER OF QUESTIONS ANSWERED CORRECTLY (IF 3 CORRECT, THEN GIVE CLUE AND KEY)
router.post('/', (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
  Progress.create({
    user_id: req.body.user_id,
    level_id: req.body.level_id,
    question_id: req.body.question_id,
    isAnswerCorrect: req.body.isAnswerCorrect
  })
    //req.session(save) 
    .then(dbProgressData => res.json(dbProgressData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//GET ROUTE TO TRACK NUMBER OF QUESTIONS CORRECTLY (IF 3 CORRECT)
router.get('/check/:id', (req, res) => {
  Progress.findAll({
    where: {
      user_id: req.params.user_id, //req.session.user_id
      isAnswerCorrect: true
    }
  })
    .then(dbProgressData => {
      if (!dbProgressData) {
        res.status(404).json({ message: 'No progress found with this id!' });
        return;
      }
      res.send(dbProgressData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})


//get route to check how many questions a user_id has correct in their progress.
router.get('/check/:id', (req, res) => {
  Progress.findAll({
    where: {
      user_id: req.params.id,
      isAnswerCorrect: true
    }
  })
    .then(dbProgressData => {
      if (!dbProgressData) {
        res.status(404).json({ message: 'No progress found with this id!' });
        return;
      }
      res.send(dbProgressData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})


module.exports = router;