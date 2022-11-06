import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Content from "../../components/Content";
import Navbar from "../../components/Navbar";
import { UserResponseType, UserType } from "../../types";
import { fetchUser, getUserFullName } from "../../utils";

export default function User() {
  const router = useRouter();
  const { id } = router.query;

  const [user, setUser] = useState<UserType | undefined>(undefined);

  useEffect(() => {
    fetchUser(Number(id)).then((response: UserResponseType) => {
      setUser(response.data);
    });
  }, [id]);

  return (
    <Content>
      <Navbar title="Users" />
      <div className="flex mb-8">
        <div className="border border-[#DFE0EB] rounded bg-white basis-full xl:basis-1/2">
          {user && (
            <>
              <h2 className="font-semibold text-lg px-8 pt-8">
                {getUserFullName(user)}
              </h2>
              <div className="flex flex-col md:flex-row px-4 pt-4 pb-8">
                <picture className="p-4 w-full">
                  <img
                    src={user.avatar}
                    alt={getUserFullName(user)}
                    className="rounded w-full"
                  />
                </picture>
                <div className="p-4 w-full">
                  <dl>
                    <dt>First Name</dt>
                    <dd className="text-[#828282] font-light mb-4 last:mb-0">
                      {user.first_name}
                    </dd>
                    <dt>Last Name</dt>
                    <dd className="text-[#828282] font-light mb-4 last:mb-0">
                      {user.last_name}
                    </dd>
                    <dt>Email</dt>
                    <dd className="text-[#828282] font-light mb-4 last:mb-0">
                      {user.email}
                    </dd>
                  </dl>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <Link
        href="/users"
        className="bg-[#65A7DB] text-white text-xs px-10 py-3 rounded-full"
      >
        BACK
      </Link>
    </Content>
  );
}
