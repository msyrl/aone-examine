import { UserResponseType } from "../types";

export const fetchUser = async (id: number): Promise<UserResponseType> => {
  const response = await fetch(`/api/users/${id}`);
  const userResponse = (await response.json()) as UserResponseType;

  return userResponse;
};
