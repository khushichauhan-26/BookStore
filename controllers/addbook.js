import Book from '../models/bookModel.js'; 
import mongoose from 'mongoose';

const addbook= async (req, res, next) => {
  const { title, author, genre, publishedDate } = req.body;

  if (!title || !author || !genre || !publishedDate) {
    return res.status(400).json({ message: 'title, author, genre and publishedDate are required' });
  }

  try {
    const book = new Book({ title, author, genre, publishedDate });
    const savedBook = await book.save();
    res.status(201).json(savedBook);
  } catch (error) {
    next(error); // pass to centralized error handler
  }
};


export default addbook;