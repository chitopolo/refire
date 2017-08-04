import React from 'react';

var MiTitulo = function (props) {  
  return (
    React.createElement('div', null,
      React.createElement('h1', {style: {color: props.color}}, props.titulo)
    )
  );
};

export default MiTitulo;