import User from './User';
import { useGetUsersQuery } from './usersApiSlice';
import PuffLoader from 'react-spinners/PuffLoader';
import { UserType } from '../../types/User';
const Users = () => {
  const {
    data: users,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useGetUsersQuery();

  console.log(users);
  if (isLoading) return <PuffLoader color="#36d7b7" />;
  return (
    <div className="flex justify-center w-full bg-back py-10">
      <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {users.map((user: any) => (
          <User user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
