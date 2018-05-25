import React from 'react';
import ArticleItem from './ArticleItem';

const List = (props) => {
  const ArticleItems = props.data.map((data) => {
    return <ArticleItem key={data.guid} data={data} />;
  });

  return (
    <div className="container-items list">
    <ul>{ArticleItems}</ul>
    </div>
  );
};

export default List;