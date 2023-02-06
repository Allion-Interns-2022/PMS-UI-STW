import api from "../config/api";
import { IUserState } from "../config/commonTypes";

export const signIn = (
  values: IUserState["userDetails"],
  success: (d: any) => void,
  failed: (d: any) => void
) => {
  api.post("/JWT", values).then(
    (response) => {
      success(response);
    },
    (error) => {
      failed(error);
    }
  );
};
