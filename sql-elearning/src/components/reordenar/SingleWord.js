import React from 'react';


export const SingleWord = ({ word, id}) => {

  return (
    <div className="col-sm btn btn-primary box" key={id} >
     {word}
    </div>
  )
};
