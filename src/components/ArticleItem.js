import React from 'react';

const ArticleItem = (prop) => {
  return (
    <li><a href={prop.data.link} target="_blank">
      <img src={prop.data.thumbnail}/>
      <p>{prop.data.title}</p>
      <p>{prop.data.description}</p>
      </a>
    </li>
  );
};

export default ArticleItem;