import Book from '../models/bookModel.js'; 
import mongoose from 'mongoose';

const allbooks= async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    // Fetch books with pagination
    const books = await Book.find().skip(skip).limit(limit);

    const totalBooks = await Book.countDocuments();

    const totalPages = Math.ceil(totalBooks / limit);

    res.status(200).json({
      books,
      pagination: {
        currentPage: page,
        totalPages: totalPages,
        totalBooks: totalBooks,
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books', error: error.message });
  }
}

export default allbooks;