import { useState, useContext } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { publicFetch } from "@utils/service";
import { AuthContext } from "@stores/auth";
import ModalContext from "@stores/modal";
import FormInput from "@components/form-input";
import Button from "@components/button";
import styles from "./login-form.module.css";

const LoginForm = () => {
  const { setAuthState } = useContext(AuthContext);
  const { setIsComponentVisible } = useContext(ModalContext);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values, { setStatus, resetForm }) => {
          setLoading(true);
          try {
            const { data } = await publicFetch.post("authenticate", values);
            const { token, expiresAt, userInfo } = data;
            setAuthState({ token, expiresAt, userInfo });
            resetForm({});
            setIsComponentVisible(false);
          } catch (error: any) {
            setStatus(error.response.data.message);
          }
          setLoading(false);
        }}
        validationSchema={Yup.object({
          username: Yup.string()
            .required("Required")
            .max(16, "Must be at most 16 characters long")
            .matches(/^[a-zA-Z0-9_-]+$/, "Contains invalid characters"),
          password: Yup.string()
            .required("Required")
            .min(6, "Must be at least 6 characters long")
            .max(50, "Must be at most 50 characters long"),
        })}
      >
        {({
          values,
          errors,
          touched,
          status,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <FormInput
              label="Username"
              type="text"
              name="username"
              autoComplete="off"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              hasError={touched.username && errors.username}
              errorMessage={errors.username && errors.username}
            />
            <FormInput
              label="Password"
              type="password"
              name="password"
              autoComplete="off"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              hasError={touched.password && errors.password}
              errorMessage={errors.password && errors.password}
            />
            <div className={styles.status}>{status}</div>

    
            <Button
              primary
              className="w-full bg-primary-500 hover:bg-primary-700 dark:hover:bg-primary-400"
              type="submit"
              isLoading={loading}
              disabled={isSubmitting}
            >
              Log in
            </Button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
