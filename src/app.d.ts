
/**
 * Interface for a single family member.
 */
interface IFamilyMember {
    name: string;
    relationship: string;
  }
  
  /**
   * Props for the UserDetail component.
   */
  interface IUserDetailsProps {
    formData: {
      firstName: string;
      lastName: string;
      email: string;
      fatherName: string;
      motherName: string;
      phoneNumber: string;
      address: string;
      familyMembers?: IFamilyMember[];
    };
  }