import { useState } from "react";

const IMCForm = () => {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcularIMC = (event) => {
    event.preventDefault();
    const alturaMetros = altura / 100;
    const imc = (peso / (alturaMetros * alturaMetros)).toFixed(2);

    let classificacao = "";
    if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc < 24.9) classificacao = "Peso normal";
    else if (imc < 29.9) classificacao = "Sobrepeso";
    else classificacao = "Obesidade";

    setResultado(`Seu IMC é ${imc} - ${classificacao}`);
  };

  return (
    <div>
      <h2>Calculadora de IMC</h2>
      <form onSubmit={calcularIMC}>
        <input
          type="number"
          placeholder="Altura (cm)"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Peso (kg)"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          required
        />
        <button type="submit">Calcular</button>
      </form>
      {resultado && <p>{resultado}</p>}
    </div>
  );
};

export default IMCForm;
