import getUsers from "../actions/getUsers";
import Siderbar from "../components/sidebar/Siderbar";
import UsersList from "./components/UsersList";

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const users = await getUsers();

  return (
    <Siderbar>
      <div className="h-full">
        <UsersList items={users} />
        {children}
      </div>
    </Siderbar>
  );
}
