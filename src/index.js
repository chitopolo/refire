import React from 'react';
import ReactDOM from 'react-dom';
import MiTitulo from './MiTitulo';

const MiPrimerComponente = () => {
  return (
    <div>
      <MiTitulo titulo="Los props son excelentes!" color="rebeccapurple" />
      <MiTitulo titulo="Usa props en todas partes!" color="mediumaquamarine" />
      <MiTitulo titulo="Los props son los mejores" color="peru" />
    </div>
  );
};

ReactDOM.render(<MiPrimerComponente />, document.getElementById('main'));