import { useStyles } from "../../commonStyles/common.styles";

/**
 * InputField component for rendering an input field with validation error messages.
 * @param {Object} props
 * @param {string} props.label
 * @param {string} props.name
 * @param {any} props.register
 * @param {any} props.error
 * @param {string} props.placeholder
 * @returns {JSX.Element}
 */
const InputField = ({
  label,
  name,
  register,
  error,
  placeholder,
}: {
  label: string;
  name: string;
  register: any;
  error: any;
  placeholder: string;
}) => {
  const styles = useStyles();
  return (
    <div style={styles.errorWrapper}>
      <input
        {...register(name, { required: `${label} is required` })}
        placeholder={placeholder}
      />
      {error && <div style={styles.error}>{error.message}</div>}
    </div>
  );
};

export default InputField;
