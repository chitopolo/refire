import React from 'react';
import ReactDOM from 'react-dom';
import MiTitulo from './MiTitulo';

var MiPrimerComponente = function () {  
  return (
    React.createElement('div', null,
      React.createElement(MiTitulo, {titulo: 'Spiderman', color:"rebeccapurple"}),
      React.createElement(MiTitulo, {titulo: 'Game of Thrones', color:'mediumaquamarine'}),
      React.createElement(MiTitulo, {titulo: 'Stranger Things', color:'peru'})
    )
  );
};


ReactDOM.render(React.createElement(MiPrimerComponente, null), document.getElementById('main'))
