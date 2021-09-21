import React from 'react'; //dependency in node_modules
import ReactDom from 'react-dom';
import './index.css';

//named export/import 
import { books } from './books';
//default export/import
import Book from './Book';

//Return single element wrapped
//section/article/fragment best
//use camelCase for html atributes
//close all the time

//props

function BookList() {
  return (
    <>
      <section className="booklist"> {books.map((book, index) => {
        return <Book key={book.id} {...book}></Book>
      })}
      </section>
    </>
  );

}
// this is a component 


ReactDom.render(<BookList />, document.getElementById('root'));
