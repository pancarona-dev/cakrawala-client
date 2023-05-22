import { useState, useContext } from "react";
import Link from "next/link";
import { Formik } from "formik";
import * as Yup from "yup";
import { FetchContext } from "@stores/fetch";
import { AuthContext } from "@stores/auth";
import ModalContext from "@stores/modal";
import TextArea from "@components/textarea";
import Button from "@components/button";
import Tag from "@components/tag";
import styles from "./add-answer.module.css";

const AddAnswer = ({ id, tags, setQuestion }: any) => {
  const { authAxios } = useContext(FetchContext);
  const { isAuthenticated } = useContext(AuthContext);
  const { handleComponentVisible } = useContext(ModalContext);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Formik
        initialValues={{ text: "" }}
        onSubmit={async (values, { setStatus, resetForm }) => {
          setLoading(true);
          try {
            const { data } = await authAxios.post(`/answer/${id}`, values);
            setQuestion(data);
            resetForm({});
          } catch (error: any) {
            setStatus(error.response.data.message);
          }
          setLoading(false);
        }}
        validationSchema={Yup.object({
          text: Yup.string()
            .required("Body is missing.")
            .min(30, "Body must be at least 30 characters.")
            .max(30000, "Body cannot be longer than 30000 characters."),
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
          <form className={styles.container} onSubmit={handleSubmit}>
            <h2>Your answer</h2>
            <TextArea
              name="text"
              autoComplete="off"
              value={values.text}
              onChange={handleChange}
              onBlur={handleBlur}
              hasError={touched.text && errors.text}
              errorMessage={errors.text && errors.text}
              className={styles.textarea}
            />
            <div className={styles.status}>{status}</div>
            <div className={styles.button}>
              <Button
                type="submit"
                primary
                className="rounded text-slate-50 p-3 bg-primary-500 hover:bg-primary-400 dark:hover:bg-primary-400"
                isLoading={loading}
                disabled={isSubmitting}
                onClick={() =>
                  !isAuthenticated() && handleComponentVisible(true, "signup")
                }
              >
                Post Your Answer
              </Button>
            </div>
            <h3>
              Browse other questions tagged &nbsp;
              {tags.map((tag: string) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
              or &nbsp;
              <Link href="/questions/ask" as="/questions/ask">
                ask your own question
              </Link>
            </h3>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AddAnswer;
