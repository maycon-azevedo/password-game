import React from 'react';
import PropTypes from 'prop-types';
import './VictoryPopup.css'; // Importa o CSS para o modal

const VictoryPopup = ({ onClose }) => {
    return (
        <div className="victory-popup">
            <div className="victory-popup-content">
                <h2>Parabéns!</h2>
                <p>Você completou o jogo com sucesso!</p>
                <button onClick={onClose}>Fechar</button> {/* Chama onClose ao clicar */}
            </div>
        </div>
    );
};

VictoryPopup.propTypes = {
    onClose: PropTypes.func.isRequired, // Verifica se onClose é uma função
};

export default VictoryPopup;
