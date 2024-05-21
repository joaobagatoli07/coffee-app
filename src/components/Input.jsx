import PropTypes from "prop-types";
import { UserRound, Phone, LockKeyhole } from "lucide-react";

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
  const getIconByPlaceholder = (placeholder) => {
    switch (placeholder.toLowerCase()) {
      case "nome":
        return <UserRound></UserRound>;
      case "usuário":
        return <UserRound></UserRound>;
      case "telefone":
        return <Phone></Phone>;
      case "senha":
        return <LockKeyhole></LockKeyhole>;
      default:
        return <LockKeyhole></LockKeyhole>;
    }
  };

  return (
    <>
      <div className="flex gap-2 p-2 rounded w-64 border-2">
        {getIconByPlaceholder(placeholder)}
        <input
          type={type}
          placeholder={placeholder}
          className="text-sm bg-transparent outline-none placeholder:text-gray-900 w-52"
        />
      </div>
    </>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
