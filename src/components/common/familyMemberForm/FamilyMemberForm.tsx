import React, { useState } from "react";
import { useStyles } from "../../commonStyles/common.styles";

/**
 * Component for rendering a single family member form.
 * @param {FamilyMemberFormProps} props
 * @returns {JSX.Element}
 */
const FamilyMemberForm: React.FC<FamilyMemberFormProps> = ({
  index,
  register,
  remove,
}) => {
  const [expanded, setExpanded] = useState(true);
  const styles = useStyles();

  return (
    <div>
      <fieldset style={styles.userCard}>
        <legend>
          Family Member {index + 1}
          {index > 0 && (
            <button type="button" onClick={() => setExpanded(!expanded)}>
              {expanded ? "Collapse" : "Expand"}
            </button>
          )}
        </legend>
        {expanded && (
          <div style={styles.btnWrapper}>
            <div style={{ paddingBottom: "10px" }}>
              <label htmlFor={`familyMembers.${index}.name`}>Name:</label>
              <input
                {...register(`familyMembers.${index}.name`, { required: true })}
                placeholder="Name"
                style={{ marginLeft: 4 }}
              />
            </div>
            <div style={{ paddingBottom: "10px" }}>
              <label htmlFor={`familyMembers.${index}.relationship`}>
                Relationship:
              </label>
              <select
                {...register(`familyMembers.${index}.relationship`, {
                  required: true,
                })}
                defaultValue=""
                style={{ minWidth: 144, marginLeft: 4 }}
              >
                <option value="" disabled hidden>
                  Relationship
                </option>
                <option value="parent">Parent</option>
                <option value="sibling">Sibling</option>
                <option value="spouse">Spouse</option>
                <option value="child">Child</option>
                <option value="other">Other</option>
              </select>
            </div>
            {index > 0 && (
              <button
                type="button"
                style={styles.removeBg}
                onClick={() => remove(index)}
              >
                Remove
              </button>
            )}
          </div>
        )}
      </fieldset>
    </div>
  );
};

/**
 * Interface
 */
interface FamilyMemberFormProps {
  index: number;
  register: any;
  remove: (index: number) => void;
}

export default FamilyMemberForm;
