import { SupportType } from "./support.type";
import { UserType } from "./user.type";

export type UserResponseType = {
  data: UserType;
  support: SupportType;
};
