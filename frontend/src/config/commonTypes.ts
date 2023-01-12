export interface IPatientState {
    patientDetails: {
      id: number;
      name: string;
      dob: Date;
      weightKG: number;
      heightCM: number;
      address: string;
      contact: string;
      emergencyContact: string;
    };
  }

export  interface IUserState {
    userDetails: {
      id: number;
      firsName: string;
      lastName: string;
      username: string;
      password: string;
      created: string;
      createdBy: string;
      lastModified: string;
      lastModifiedBy: string;
    };
    isAuthenticated: boolean;
  }


  export {}