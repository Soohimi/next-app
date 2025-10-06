import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface Props {
  searchParams: { sortOrder: string };
}
const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <div>
      <h1>Users</h1>
      <Link href={"/users/new"} className="btn">
        NEW USER
      </Link>
      <Suspense
        fallback={<span className="loading loading-infinity loading-lg"></span>}
      >
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </div>
  );
};

export default UsersPage;
