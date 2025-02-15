import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s]+$/, "Only letters are allowed")
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  number: Yup.string()
    .matches(
      /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
      "The phone number must be in the format 000-00-00"
    )
    .required("Required"),
});

const ContactForm = ({ onAddContact }) => {
  const initialValues = { name: "", number: "" };

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      ...values,
    };

    onAddContact(newContact);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label htmlFor="name">Name</label>
        <Field type="text" id="name" name="name" className={styles.input} />
        <ErrorMessage name="name" component="div" className={styles.error} />

        <label htmlFor="number">Phone number</label>
        <Field type="text" id="number" name="number" className={styles.input} />
        <ErrorMessage name="number" component="div" className={styles.error} />

        <button type="submit" className={styles.submitButton}>
          Add to contacts
        </button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
