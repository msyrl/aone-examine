import { UserType } from "../types";

export const getUserFullName = (user: UserType) =>
  [user.first_name, user.last_name].filter(Boolean).join(" ");
