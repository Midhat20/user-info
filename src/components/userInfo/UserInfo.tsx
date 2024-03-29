import React from "react";
import { useStyles } from "../commonStyles/common.styles";

/**
 * Component to display user details and family info.
 * @param {IUserDetailsProps} props
 * @returns {JSX.Element}
 */
const UserInfo: React.FC<IUserDetailsProps> = ({ formData }) => {
  const {
    firstName,
    lastName,
    email,
    fatherName,
    motherName,
    phoneNumber,
    address,
    familyMembers,
  } = formData;
  const styles = useStyles();
  /**
   * Renders family members' information.
   * @returns {JSX.Element[]}
   */
  const renderFamilyMembers = (): JSX.Element[] => {
    if (!familyMembers || familyMembers.length === 0) return [];

    return familyMembers.map((member: IFamilyMember, index: number) => (
      <div key={index} style={{ marginBottom: "20px" }}>
        <p>
          Family member name {index + 1}: {member.name}
        </p>
        <p>
          Family member relationship {index + 1}: {member.relationship}
        </p>
      </div>
    ));
  };

  return (
    <div style={styles.card}>
      <h2>User Information</h2>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
      <p>Father's Name: {fatherName}</p>
      <p>Mother's Name: {motherName}</p>
      <p>Phone number: {phoneNumber}</p>
      <p>Address: {address}</p>

      <h2>Family Information</h2>
      {renderFamilyMembers()}
    </div>
  );
};

export default UserInfo;
