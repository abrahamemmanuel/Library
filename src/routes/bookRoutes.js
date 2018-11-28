const express = require('express');

const bookRouter = express.Router();


function router(nav) {
  const books = [
    {
      title: 'As told by Gabriel',
      author: 'James Wilson',
      genre: 'Historical Fiction',
      read: false
    },

    {
      title: 'Tazan the jungle boy',
      author: 'Larry Sady',
      genre: 'Kiddies',
      read: true
    },

    {
      title: 'Harry Porter',
      author: 'John Doe',
      genre: 'Wizardry',
      read: false
    },
  ];


  // @route  '/books'
  // @desc   Books routes
  // @access Public

  bookRouter.route('/').get((req, res) => res.render('bookListView', { nav, title: 'Library', books }));

  // @route   '/books/book'
  // @desc    Single book route
  // @access  Public

  bookRouter.route('/:id').get((req, res) => {
    // id is the index of the each book in the books array
    const { id } = req.params;
    res.render('bookView', { nav, title: 'Library', book: books[id] });
  });

  return bookRouter;
}


module.exports = router;
