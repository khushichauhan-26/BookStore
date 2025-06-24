import express from 'express';
import Book from '../models/bookModel.js'; 
import mongoose from 'mongoose';
import addbook from '../controllers/addbook.js';
import allbooks from '../controllers/allbooks.js';
import updatebook from '../controllers/updatebook.js';
import deletebook from '../controllers/deletebook.js';
import getbook from '../controllers/getbook.js';
const router = express.Router();

// Add a new book
router.post('/addbook', addbook)

// Get all books by id
router.get('/allbooks/:id', getbook)

// all books with pagination
router.get('/allbooks', allbooks);

//update book by ID
router.put('/allbooks/:id', updatebook);


router.delete('/allbooks/:id', deletebook);



export default router;