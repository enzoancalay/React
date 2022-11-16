import React from "react";

const Main = ({ personas, Letras, callBack }) => {
  callBack("esto es un callback");
  return (
    <main>
      {personas.map((persona) => (
        <ul>
          <li>nombre:{persona.name}</li>
          <li>Apellido:{persona.lastName}</li>
          <li>Id: {persona.id}</li>
        </ul>
      ))}
    </main>
  );
};

export default Main;
