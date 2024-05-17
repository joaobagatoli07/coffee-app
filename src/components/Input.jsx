import PropTypes from 'prop-types'

/**
 * Componente de entrada de dados.
 * 
 * @component
 * @example
 * <Input type="text" placeholder="Digite algo" />
 * 
 * @param {Object} props - Propriedades do componente.
 * @param {string} props.type - Tipo de entrada ('text', 'password').
 * @param {string} props.placeholder - Texto que será exibido dentro do input.
 */

function Input({ type, placeholder }) {
    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                className="text-sm p-3 drop-shadow rounded w-72 placeholder:text-gray-900 placeholder:text-sm" />
        </>
    )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string
}

export default Input