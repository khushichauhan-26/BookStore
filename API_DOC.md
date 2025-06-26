GET `/books`
- Description: Get all books.
- Response: Array of book objects.
- Example Response:
```json
[
  {
    "_id": "123",
    "title": "Atomic Habits",
    "author": "James Clear",
    "publishedYear": 2018
  }
]



POST /books
Description: Add a new book.
Request Body:
json
CopyEdit
{
  "title": "Book Title",
  "author": "Author Name",
  "publishedYear": 2024
}
Response:
json
CopyEdit
{
  "_id": "abc",
  "title": "Book Title",
  "author": "Author Name",
  "publishedYear": 2024
}



GET /books/:id
Description: Get book by ID.
Response: Single book object or 404 error.



PUT /books/:id
Description: Update a book by ID.
Request Body: Same as POST.
Response: Updated book object.



DELETE /books/:id
Description: Delete a book.
Response: Success message or error.
