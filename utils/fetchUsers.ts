import { UsersResponseType } from "../types";

export const fetchUsers = async (): Promise<UsersResponseType> => {
  const response = await fetch("/api/users");
  const usersResponse = (await response.json()) as UsersResponseType;

  return usersResponse;
};
