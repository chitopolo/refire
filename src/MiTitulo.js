import React from 'react';

const MiTitulo = props => {
  console.log("props:", props)
  const style = { color: props.color };
  return (
    <div>
      <h1 style={style}>
        {props.titulo}
      </h1>
    </div>
  );
};

export default MiTitulo;