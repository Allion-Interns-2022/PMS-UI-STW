import * as Yup from "yup";

export const PatientValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  dob: Yup.date()
    .typeError("Enter a valid date")
    .required("Date of birth is required")
    .max(new Date(), "Date of birth must be before today"),

  weightKG: Yup.number()
    .typeError("Enter a valid weight")
    .required("Weight is required")
    .positive("Weight must be a positive number"),

  heightCM: Yup.number()
    .typeError("Enter a valid height")
    .required("Height is required")
    .positive("Height must be a positive number"),

  address: Yup.string().required("Address is required"),
  contact: Yup.string()
    .required("Contact is required")
    .min(10, "Contact must have at least 10 characters"),
  emergencyContact: Yup.string()
    .required("Emergency contact is required")
    .min(10, "Emergency contact must have at least 10 characters")
    .notOneOf(
      [Yup.ref("contact")],
      "Emergency contact must not be the same as contact"
    ),
});

export const MedicalRecordValidationSchema = Yup.object().shape({
  sampleCollectedDate: Yup.date()
    .typeError("Enter a valid date")
    .required("Sample Collected Date is required")
    .max(new Date(), "Sample Collected Date must be before today"),

  sugarMmol: Yup.number()
    .typeError("Enter a valid number")
    .required("Sugar (Mmol) is required")
    .positive("Sugar (Mmol) must be a positive number"),

  temperatureCelcius: Yup.number()
    .typeError("Enter a valid number")
    .required("Temperature (Celcius) is required")
    .positive("Temperature (Celcius) must be a positive number"),

  plateletMmol: Yup.number()
    .typeError("Enter a valid number")
    .required("Platelet (Mmol) is required")
    .positive("Platelet (Mmol) must be a positive number"),

  hemoglobinGdl: Yup.number()
    .typeError("Enter a valid number")
    .required("Hemoglobin (Gdl) is required")
    .positive("Hemoglobin (Gdl) must be a positive number"),

  patientId: Yup.number()
    .typeError("Enter a valid number")
    .required("Patient Id is required")
    .positive("Patient Id must be a positive number"),

    created: Yup.date()
    .typeError("Enter a valid date")
    .required("Created Date is required")
    .max(new Date(), "Created Date must be before today"),

    createdBy: Yup.string().required("Created person is required"),

    lastModified: Yup.date()
    .typeError("Enter a valid date")
    .required("Last Modified Date is required")
    .max(new Date(), "Last Modified Date must be before today"),

    lastModifiedBy: Yup.string().required("Last modified person is required"),
});
