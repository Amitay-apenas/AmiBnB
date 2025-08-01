import React from "react";
import photo from "./images/cabofrio.jpeg";

const Item = () => {
  return (
    <a href="/" className="flex flex-col gap-3">
      <img
        src={photo}
        alt=""
        className="aspect-square rounded-2xl object-cover"
      />

      <div>
        <h3 className="text-xl font-semibold"> Cabo Frio, Rio de Janeiro</h3>
        <p className="truncate text-gray-500">
          Se você está procurando uma fuga relaxante e cheia de sol, a
          hospedagem em Cabo Frio, Rio de Janeiro, é uma excelente escolha.
          Conhecida por suas praias de areia branca e água cristalina, a cidade
          oferece uma variedade de opções de acomodação para todos os gostos e
          bolsos, desde pousadas charmosas e familiares até hotéis luxuosos com
          infraestrutura completa. Para quem busca uma experiência mais
          autêntica e aconchegante, as pousadas são a principal atração. Elas
          geralmente ficam em bairros mais tranquilos, como a Passagem, um dos
          mais antigos e charmosos da cidade.
        </p>
      </div>

      <div>
        <p>
          <span className="font-semibold">R$ 550 </span>por noite
        </p>
      </div>
    </a>
  );
};

export default Item;
