import PropTypes from 'prop-types'

/**
 * Botão principal da aplicação.
 * 
 * @component
 * @example
 * <MainButton text="Entrar" color="bg-amber-800"></MainButton>
 * 
 * @param {string} props.bgColor - Cor do botão.
 * @param {string} props.text - Texto que será exibido dentro do botão.
 */

function MainButton({ text, bgColor }) {
    return (
        <>
            <button
                type="button"
                className={`${bgColor} text-white p-2 rounded text-lg w-64 mt-6`}>
                {text}
            </button>
        </>
    )
}

MainButton.propTypes = {
    bgColor: PropTypes.string,
    text: PropTypes.string.isRequired
}

export default MainButton
