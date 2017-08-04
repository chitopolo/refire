import React from 'react';
import ReactDOM from 'react-dom';
import MiTitulo from './MiTitulo';

var MiPrimerComponente = function () {  
  return (
    React.createElement('div', null,
      React.createElement(MiTitulo, {titulo: 'Los props son excelentes!', color:"rebeccapurple"}),
      React.createElement(MiTitulo, {titulo: 'Usa props en todas partes!', color:'mediumaquamarine'}),
      React.createElement(MiTitulo, {titulo: 'Stranger Things', color:'peru'}),
      React.createElement(MiTitulo, {titulo: 'Los simpsons', color:'peru'}),
      React.createElement(MiTitulo, {titulo: 'spiderman', color:'peru'})
    )
  );
};


ReactDOM.render(React.createElement(MiPrimerComponente, null), document.getElementById('main'))
