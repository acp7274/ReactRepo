import React from 'react'

const Book = ({img, title, author, pages, price }) => {
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.screenX);
    console.log(e.pageX);
    alert('Hello World!');
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article className='book' onMouseOver={() => {
      console.log(title);
    }}>
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1> {/*inline function */}
      {/* {children} */}
      <h5>by {author.toUpperCase()}</h5>
      <h6>pages: {pages}</h6>
      <h6>${price}</h6>
      <button type="button" onClick={clickHandler}>Reference Example</button> {/* reference handler */}
      <button type="button" onClick={ () => complexExample(author)}>Complex ex:</button> {/* complex example */}
    </article>
  );
};



export default Book
