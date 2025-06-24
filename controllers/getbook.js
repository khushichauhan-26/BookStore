import Book from '../models/bookModel.js'; 
import mongoose from 'mongoose';

const getbook = async (req, res) => {
  try{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
    res.json({ message: 'Invalid book ID' });
    return;
    }
    const currBook=await Book.findById(id);
    if (!currBook) {
      return res.status(400).json({ message: 'Book not found' });
    }
    res.status(200).json(currBook);
  } catch(error){
    res.status(500).json({ message: 'Error fetching book', error: error.message });
  }
  
}

export default getbook;