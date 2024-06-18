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
 * @param {string} props.type - Tipo de entrada ('text', 'password', 'tel').
 * @param {string} props.placeholder - Texto que será exibido dentro do input.
 * @param {string} props.icon - Ícone que será exibido dentro do input ('user', 'phone', 'lock').
 * @param {string} props.onChange - Função atrelada a mudança do value do input.
 */

function Input({ type, placeholder, icon, onChange }) {
  const setIcon = icon => {
    switch (icon.toLowerCase()) {
      case "user":
        return <UserRound></UserRound>;
      case "phone":
        return <Phone></Phone>;
      case "lock":
        return <LockKeyhole></LockKeyhole>;
      default:
        return '';
    }
  };

  return (
    <>
      <div className="flex gap-2 p-2 rounded w-64 border-2 bg-white">
        {setIcon(icon)}
        <input
          type={type}
          placeholder={placeholder}
          className="text-sm outline-none placeholder:text-gray-900 w-52"
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.string,
  onChange: PropTypes.func
};

export default Input;
