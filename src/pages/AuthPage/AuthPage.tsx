import { FC } from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import { useAppSelector } from "../../app/store";
import { Navigate } from "react-router-dom";

import "./AuthPage.css";

const AuthPage: FC = () => {
  const { user } = useAppSelector((state) => state.authReducer);

  if(user.apiTokenInstance.length && user.idInstance.length){
    return <Navigate to={'/messenger'}/>
  }

  return (
    <div className="AuthPage">
      <AuthForm />
    </div>
  );
};
export default AuthPage;
