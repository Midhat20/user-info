import React from "react";
import { useForm, FormProvider, useFieldArray } from "react-hook-form";
import FamilyMemberForm from "../common/familyMemberForm";
import { useStyles } from "../commonStyles/common.styles";
/**
 * Component for rendering  family details of the user.
 * @param {IUserFamilyDetailsProps} props
 * @returns {JSX.Element}
 */
const UserFamilyDetails: React.FC<IUserFamilyDetailsProps> = ({ onNext }) => {
  const methods = useForm();
  const { register, control, handleSubmit } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "familyMembers",
  });
  const styles = useStyles();
  // Ensure at least one family member form is displayed initially
  if (fields.length === 0) {
    append({});
  }

  const onSubmitStepTwo = (data: any) => {
    onNext(data);
  };

  return (
    <FormProvider {...methods}>
      <h2>Family Information</h2>
      <form onSubmit={handleSubmit(onSubmitStepTwo)}>
        {/* Render family member forms */}
        {fields.map((member, index) => (
          <FamilyMemberForm
            key={member.id}
            index={index}
            register={register}
            remove={remove}
          />
        ))}

        <div style={styles.btnWrapper}>
          {/* Add More Family Member button */}
          <button
            type="button"
            onClick={() => append({})}
            style={styles.separator}
          >
            Add More Family Member
          </button>

          {/* Submit button */}
          <button type="submit" style={styles.bgSubmitColor}>
            Submit
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

/**
 * Interface
 */
interface IUserFamilyDetailsProps {
  onNext: (data: any) => void;
}

export default UserFamilyDetails;
