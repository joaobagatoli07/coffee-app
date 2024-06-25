import PropTypes from 'prop-types';

/**
 * Botão principal da aplicação.
 * 
 * @component
 * @example
 * <MainButton text="Entrar" color="bg-amber-800"></MainButton>
 * 
 * @param {string} props.text - Texto que será exibido dentro do botão.
 * @param {string} props.type - Tipo do botão (submit, button).
 * @param {string} props.bgColor - Cor do botão.
 * @param {string} props.onClick - Função atrelada ao clique do botão.
 */

function MainButton({ text, type, bgColor, onClick }) {
    return (
        <>
            <button
                type={type}
                className={`${bgColor} text-white p-2 rounded text-lg w-64 mt-6`}
                onClick={onClick}>
                {text}
            </button>
        </>
    )
}

MainButton.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default MainButton