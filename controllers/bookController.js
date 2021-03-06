"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Book = require('../models/book');
const Author = require('../models/author');
const Genre = require('../models/genre');
const BookInstance = require('../models/bookinstance');
exports.index = async function (req, res) {
    const book_count = await Book.count();
    const book_instance_count = await BookInstance.count();
    const book_instance_available_count = await BookInstance.countAvailable();
    const author_count = await Author.count();
    const genre_count = await Genre.count();
    res.render('index', { title: 'Local Library Home', data: { book_count, book_instance_count, book_instance_available_count, author_count, genre_count } });
};
// Display list of all books.
exports.book_list = async function (req, res) {
    const book_list = await Book.findAll();
    console.log(book_list);
    res.render('book_list', { title: 'Book List', book_list });
};
// Display detail page for a specific book.
exports.book_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Book detail: ' + req.params.id);
};
// Display book create form on GET.
exports.book_create_get = function (req, res) {
    res.send('NOT IMPLEMENTED: Book create GET');
};
// Handle book create on POST.
exports.book_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Book create POST');
};
// Display book delete form on GET.
exports.book_delete_get = function (req, res) {
    res.send('NOT IMPLEMENTED: Book delete GET');
};
// Handle book delete on POST.
exports.book_delete_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Book delete POST');
};
// Display book update form on GET.
exports.book_update_get = function (req, res) {
    res.send('NOT IMPLEMENTED: Book update GET');
};
// Handle book update on POST.
exports.book_update_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Book update POST');
};
