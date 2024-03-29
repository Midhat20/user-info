import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import InputField from "../common/inputField";
import { useStyles } from "../commonStyles/common.styles";

{
  /* Input fields data */
}
const inputFieldsData: IInputFieldData[] = [
  { label: "First Name", name: "firstName", placeholder: "First Name" },
  { label: "Last Name", name: "lastName", placeholder: "Last Name" },
  { label: "Father Name", name: "fatherName", placeholder: "Father Name" },
  { label: "Mother Name", name: "motherName", placeholder: "Mother Name" },
  { label: "Phone Number", name: "phoneNumber", placeholder: "Phone Number" },
  { label: "Email", name: "email", placeholder: "Email" },
  { label: "Address", name: "address", placeholder: "Address" },
];
/**
 * Component for rendering user detail form
 * @param {IUserDetailsProps} props
 * @returns {JSX.Element}
 */
const UserDetails: React.FC<IUserDetailsProps> = ({ onNext }) => {
  const methods = useForm<FormData>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  const styles = useStyles();
  /**
   * Handler for form submission.
   * @param {FormData} data
   */
  const onSubmitStepOne = (data: FormData) => {
    onNext(data);
  };

  return (
    <FormProvider {...methods}>
      <h2>User Information</h2>
      <form onSubmit={handleSubmit(onSubmitStepOne)} style={styles.userCard}>
        <div style={styles.card}>
          {/* Render input fields */}
          {inputFieldsData.map(({ label, name, placeholder }) => (
            <label key={label} style={styles.btnWrapper}>
              {label}
              <InputField
                key={name}
                label={label}
                name={name}
                register={register}
                error={errors[name]}
                placeholder={placeholder}
              />
            </label>
          ))}
          {/* Submit button */}
          <button type="submit" style={styles.bgSubmitColor}>
            Next Step
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

/**
 * Interface for the UserDetails component.
 */
interface IUserDetailsProps {
  onNext: (data: FormData) => void;
}
/**
 * Interface for input field data
 */
interface IInputFieldData {
  label: string;
  name: string;
  placeholder: string;
}

export default UserDetails;
