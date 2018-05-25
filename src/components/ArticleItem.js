import React from 'react';

const ArticleItem = (prop) => {
  return (
    <li><a href={prop.data.url} target="_blank">
      <img src={prop.data.urlToImage}/>
      <p><b>{prop.data.title}</b></p>
      <p>{prop.data.description}</p>
      </a>
    </li>
  );
};

export default ArticleItem;