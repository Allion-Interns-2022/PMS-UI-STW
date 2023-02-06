import moment from "moment";
import { IUserState } from "../commonTypes";

const initialUserValues: IUserState["userDetails"] = {
  id: 0,
  firstName: "",
  lastName: "",
  username: "",
  password: "",
  created: moment().toDate(),
  createdBy: "",
  lastModified: moment().toDate(),
  lastModifiedBy: "",
};

export default initialUserValues;
