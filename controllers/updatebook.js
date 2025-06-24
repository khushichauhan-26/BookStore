import Book from '../models/bookModel.js'; 
import mongoose from 'mongoose';

const updatebook= async (req, res) => {
  try {

    const { id } = req.params;
    const updatedBookData = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid book ID' });
    }

    const updatedBook = await Book.findByIdAndUpdate(id, updatedBookData, { new: true });

    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: 'Error updating book', error: error.message });
  }
}

export default updatebook;