import { SupportType } from "./support.type";
import { UserType } from "./user.type";

export type UsersResponseType = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserType[];
  support: SupportType;
};
