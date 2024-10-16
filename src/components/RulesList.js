import React from "react";
import './RulesList.css'; // Importa o arquivo CSS

const RulesList = ({ rules, romanSum, atomicSum }) => {
  return (
    <div>
      <h2>Regras</h2>
      {rules
        .slice() // Faz uma cópia da lista para evitar mutação direta
        .reverse() // Inverte a ordem para que as regras mais novas apareçam no topo
        .map((rule, index) => (
          <div
            key={index}
            className={`rule-box ${rule.fulfilled ? 'rule-fulfilled' : 'rule-unfulfilled'}`} // Aplica a classe correta
          >
            {rule.text}
            {/* Mostra a soma atual dos numerais romanos na regra correspondente */}
            {rule.text.includes("numerais romanos") && (
              <div className="roman-sum">
                Soma atual dos numerais romanos: {romanSum}
              </div>
            )}
            {/* Mostra a soma atual dos números atômicos na regra correspondente */}
            {rule.text.includes("números atômicos") && (
              <div className="atomic-sum">
                Soma atual dos números atômicos: {atomicSum}
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default RulesList;
