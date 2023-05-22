import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "@stores/auth";
import LoginForm from "@components/auth-forms";

const Login = () => {
  const { isAuthenticated } : any = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    isAuthenticated() && router.replace("/");
  }, [isAuthenticated, router]);

  return (
    <>
      <div className="auth-container">
        <div className="card">
          <LoginForm screen="signup" />
        </div>
      </div>
    </>
  );
};

export default Login;
