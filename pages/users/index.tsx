import Image from "next/image";
import Link from "next/link";
import Content from "../../components/Content";
import Navbar from "../../components/Navbar";

type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

const users: User[] = [
  {
    id: 1,
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://reqres.in/img/faces/1-image.jpg",
  },
  {
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://reqres.in/img/faces/2-image.jpg",
  },
  {
    id: 3,
    email: "emma.wong@reqres.in",
    first_name: "Emma",
    last_name: "Wong",
    avatar: "https://reqres.in/img/faces/3-image.jpg",
  },
  {
    id: 4,
    email: "eve.holt@reqres.in",
    first_name: "Eve",
    last_name: "Holt",
    avatar: "https://reqres.in/img/faces/4-image.jpg",
  },
  {
    id: 5,
    email: "charles.morris@reqres.in",
    first_name: "Charles",
    last_name: "Morris",
    avatar: "https://reqres.in/img/faces/5-image.jpg",
  },
  {
    id: 6,
    email: "tracey.ramos@reqres.in",
    first_name: "Tracey",
    last_name: "Ramos",
    avatar: "https://reqres.in/img/faces/6-image.jpg",
  },
];

const getUserFullName = (user: User) =>
  [user.first_name, user.last_name].filter(Boolean).join(" ");

export default function Users() {
  return (
    <Content>
      <Navbar title="Users" />
      <div className="border border-[#DFE0EB] rounded bg-white">
        <h2 className="font-semibold text-lg p-8">All users</h2>
        <div className="min-w-full overflow-x-auto">
          <table className="table-auto w-full whitespace-nowrap">
            <thead className="text-left text-[#9FA2B4]">
              <tr>
                <th className="px-8 py-3"></th>
                <th className="px-8 py-3">Full Name</th>
                <th className="px-8 py-3">Email</th>
                <th className="px-8 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((user) => (
                  <tr key={user.id}>
                    <td
                      className="border-y border-[#DFE0EB] px-8 py-6"
                      width={10}
                    >
                      <div className="relative w-[64px] h-[64px]">
                        <Image
                          src={user.avatar}
                          alt={getUserFullName(user)}
                          fill
                          className="rounded-full object-contain"
                        />
                      </div>
                    </td>
                    <td className="border-y border-[#DFE0EB] px-8 py-6">
                      {getUserFullName(user)}
                    </td>
                    <td className="border-y border-[#DFE0EB] px-8 py-6">
                      {user.email}
                    </td>
                    <td
                      className="border-y border-[#DFE0EB] px-8 py-6"
                      width="10"
                    >
                      <Link
                        href={`/users/${user.id}`}
                        className="bg-[#65A7DB] text-white text-sm px-4 py-3 rounded-full"
                      >
                        VIEW DETAIL
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end items-center p-4">
          <div>
            1-{users.length} of {users.length}
          </div>
          <button type="button" className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button type="button" className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </Content>
  );
}
