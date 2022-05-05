const express = require('express');
<<<<<<< HEAD
const userRouter = require('./routes/user.routes');
const commentsRouter = require('./routes/comments.routes');
const gamesRouter = require('./routes/games.routes');
const gamesGenersRouter = require('./routes/gamesandgenres.routes');
const genresRouter = require('./routes/genres.routes');
const libraryRouter = require('./routes/library.routes');
const passwordLoginRouter = require('./routes/passwordandlogin.routes');
const publisherGamesRouter = require('./routes/publisher_and_games.routes');
const publisherRouter = require('./routes/publisher.routes');
const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.use('/api', userRouter);
app.use('/api', commentsRouter);
app.use('/api', gamesRouter);
app.use('/api', gamesGenersRouter);
app.use('/api', genresRouter);
app.use('/api', libraryRouter);
app.use('/api', passwordLoginRouter);
app.use('/api', publisherGamesRouter);
app.use('/api', publisherRouter);
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
=======
const { createRequire } = require('module');
const path = require('path');
const Comments = require('./models/comments');
const Games = require('./models/games');
const Genres = require('./models/genres');
const PasswordAndLogin = require('./models/passwordandlogin');
const Publisher = require('./models/publisher');
const User = require('./models/user');

const app = express();

const PORT = 3000;
const db = 'mongodb+srv://<author>:<password>@cluster0.islwq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';  // ссылку нужно поменять или отредактировать

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log('Connected to DB'))
  .catch((error) => console.log(error));

const createPath = (page) => path.resolve(__dirname, 'files', `${page}.html`);

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
});

app.use ((req, res, next) => {
    console.log(`path: ${req.path}`);
    console.log(`method: ${req.method}`);
    next();
});

app.get('/', (req, res) => {
    res.sendFile(createPath('index'));
});
app.get('/comments', (req, res) => {
    res.sendFile(createPath('comments'));
});
app.get('/genres', (req, res) => {
    res.sendFile(createPath('genres'));
});

app.get('/comments/:id', (req, res) => {
  const title = 'Comments';
  Comments
    .findById(req.params.id)
    .then((comments) => res.render(createPath('comments'), { comments, title }))
    .catch((error) => {
      console.log(error);
      res.render(createPath('error'), { title: 'Error' });
    });
});

app.get('/comments', (req, res) => {
  const title = 'Comments';
  Comments
    .find()
    .sort({ createdAt: -1 })
    .then((comments) => res.render(createPath('comments'), { comments, title }))
    .catch((error) => {
      console.log(error);
      res.render(createPath('error'), { title: 'Error' });
    });
});

app.post('/add-comments', (req, res) => {
  const { Description, Date_the_comment_was_created } = req.body;
  const comments = new Comments({ Description, Date_the_comment_was_created });
  comments
    .save()
    .then((result) => res.redirect('/comments'))
    .catch((error) => {
      console.log(error);
      res.render(createPath('error'), { title: 'Error' });
    })
});

app.get('/add-comments', (req, res) => {
  const title = 'Add Comments';
  res.render(createPath('add-comments'), { title });
});

app.get('/games/:id', (req, res) => {
  const title = 'Game';
  Games
    .findById(req.params.id)
    .then((games) => res.render(createPath('games'), { games, title }))
    .catch((error) => {
      console.log(error);
      res.render(createPath('error'), { title: 'Error' });
    });
});

app.get('/games', (req, res) => {
  const title = 'Games';
  Games
    .find()
    .sort({ createdAt: -1 })
    .then((games) => res.render(createPath('games'), { games, title }))
    .catch((error) => {
      console.log(error);
      res.render(createPath('error'), { title: 'Error' });
    });
});

app.post('/add-games', (req, res) => {
  const { title, author, text } = req.body;
  const games = new Games({ title, author, text });
  games
    .save()
    .then((result) => res.redirect('/games'))
    .catch((error) => {
      console.log(error);
      res.render(createPath('error'), { title: 'Error' });
    })
});

app.get('/add-games', (req, res) => {
  const title = 'Add Games';
  res.render(createPath('add-games'), { title });
});


app.get('/genres', (req, res) => {
  const title = 'Genres';
  Genres
    .find()
    .then((genres) => res.render(createPath('genres'), { genres, title }))
    .catch((error) => {
      console.log(error);
      res.render(createPath('error'), { title: 'Error' });
    });
});

app.get('/publisher', (req, res) => {
  const title = 'Publisher';
  Publisher
    .find()
    .then((publisher) => res.render(createPath('publisher'), { publisher, title }))
    .catch((error) => {
      console.log(error);
      res.render(createPath('error'), { title: 'Error' });
    });
});

app.get('/user/:id', (req, res) => {
  const title = 'User';
  User
    .findById(req.params.id)
    .then((user) => res.render(createPath('user'), { user, title }))
    .catch((error) => {
      console.log(error);
      res.render(createPath('error'), { title: 'Error' });
    });
});

app.get('/user', (req, res) => {
  const title = 'User';
  User
    .find()
    .sort({ createdAt: -1 })
    .then((user) => res.render(createPath('user'), { user, title }))
    .catch((error) => {
      console.log(error);
      res.render(createPath('error'), { title: 'Error' });
    });
});

app.get('/about-us', (req, res) => {
    res.redirect('/contacts');
});
app.use((req, res) => {
    res
        .status(404)
        .sendFile(createPath('error'));
});
>>>>>>> e1fa5003d0a42e58b8a70512ad205de225b29d14
