export const BookList = ({ books }) => {
  return (
    <ul>
      {books.map((book, index) => (
      <li key={index}>{book.name}</li>
    ))}
    </ul>
  );
};