import PropTypes from "prop-types";
import { UserRound, Phone, LockKeyhole, AtSign } from "lucide-react";
import { useFormContext } from "react-hook-form";

/**
 * Componente de entrada de dados.
 *
 * @component
 * @example
 * <Input type="text" placeholder="Digite algo" />
 *
 * @param {Object} props - Propriedades do componente.
 * @param {string} props.type - Tipo de entrada ('text', 'email', 'password', 'tel').
 * @param {string} props.placeholder - Texto que será exibido dentro do input.
 * @param {string} props.name - Atributo name da tag input.
 * @param {string} props.icon - Ícone que será exibido dentro do input ('user', 'phone', 'lock', 'email').
 * @param {string} props.onChange - Função atrelada a mudança do value do input.
 */

function Input({ type, placeholder, name, icon, onChange }) {
  const { register } = useFormContext();

  const setIcon = icon => {
    switch (icon.toLowerCase()) {
      case 'user':
        return <UserRound />;
      case 'phone':
        return <Phone />
      case 'lock':
        return <LockKeyhole />;
      case 'email':
        return <AtSign />;
      default:
        return;
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
          onChange={(e) => onChange && onChange(e.target.value)}
          {...register(name)}
        />
      </div>
    </>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string,
  icon: PropTypes.string,
  onChange: PropTypes.func
};

export default Input;
