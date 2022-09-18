import userIcon from '../../assets/users_icon.svg';
import { UserType } from '../../types/User';

const User: React.FC<UserType> = ({ user }) => {
  console.log(user.email);

  return (
    <div className="rounded-lg bg-white flex flex-col justify-center items-center gap-2 w-72 h-60 drop-shadow-sm">
      <div className="rounded-full h-24 w-24 bg-slate-500 flex justify-center items-center">
        <img src={userIcon} alt="" className="h-12" />
      </div>
      <h4 className="font-bold">
        {user.firstName} {user.lastName}
      </h4>
      <h6>{user.email}</h6>
      <div>
        <button
          className="h-10 w-32 rounded-full bg-primery"
          onClick={() => {}}
        >
          Detaills
        </button>
      </div>
    </div>
  );
};

export default User;
