import React from "react";
import './RulesList.css'; // Importa o arquivo CSS

const RulesList = ({ rules, romanSum, atomicSum }) => {
  return (
    <div>
      <h2>Regras</h2>
      {rules.map((rule, index) => (
        <div
          key={index}
          className={`rule-box ${rule.fulfilled ? 'rule-fulfilled' : 'rule-unfulfilled'}`}
        >
          {rule.text}
          {/* Mostra a soma atual dos numerais romanos na regra correspondente */}
          {index === 8 && (
            <div className="roman-sum">
              Soma atual dos numerais romanos: {romanSum}
            </div>
          )}
          {/* Mostra a soma atual dos números atômicos na regra correspondente */}
          {index === 10 && (
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
