import { ErrorMessage, Field, Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { toast, Toaster } from 'react-hot-toast';
import css from './FormCamperBook.module.css';
import { useState } from 'react';
import Loader from '../Loader/Loader';
import 'react-datepicker/dist/react-datepicker.css';
import DatePickerField from '../DataPicker/DataPicker';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .matches(/^[a-zA-Zа-яА-Я\s]+$/, 'Name can only contain letters and spaces')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  comment: Yup.string()
    .min(10, 'Comment should be at least 10 characters')
    .required('Required'),
  booking: Yup.date().required('Required'),
});

interface FormValues {
  name: string;
  email: string;
  booking: Date | null;
  comment: string;
}

interface FormCamperBookProps {
  initialValues?: FormValues;
  onSubmit?: (values: FormValues, actions: any) => void;
}

export default function FormCamperBook({}: FormCamperBookProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const initialValues = {
    name: '',
    email: '',
    booking: null,
    comment: '',
  };

  const handleSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Your booking request has been successfully submitted!');
      actions.resetForm();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }

    console.log('values', values);
  };

  return (
    <div className={css.mainContainer}>
      <div className={css.textBlock}>
        <Toaster position="top-center" reverseOrder={false} />
        {isLoading && <Loader width="100" height="100" />}
        <h3 className={css.title}>Book your camper van now</h3>
        <p className={css.text}>
          Stay connected! We are always ready to help you.
        </p>
      </div>

      <Formik<FormValues>
        initialValues={initialValues as FormValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <Form className={css.form}>
            <div className={css.formBlock}>
              <div>
                <Field
                  name="name"
                  placeholder="Name*"
                  className={css.input}
                  disabled={isSubmitting || isLoading}
                />
                <ErrorMessage
                  name="name"
                  component="span"
                  className={css.errorMessage}
                />
              </div>

              <div>
                <Field
                  name="email"
                  placeholder="Email*"
                  className={css.input}
                  disabled={isSubmitting || isLoading}
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className={css.errorMessage}
                />
              </div>

              <div>
                <label htmlFor="booking" className={css.srOnly}>
                  Booking Date*
                </label>
                <DatePickerField
                  name="booking"
                  id="booking"
                  placeholderText="Booking date*"
                  dateFormat="yyyy-MM-dd"
                  className={css.input}
                  disabled={isSubmitting || isLoading}
                />
              </div>

              <div>
                <Field
                  as="textarea"
                  name="comment"
                  placeholder="Comment"
                  className={`${css.input} ${css.textarea}`}
                  disabled={isSubmitting || isLoading}
                />
                <ErrorMessage
                  name="comment"
                  component="span"
                  className={css.errorMessage}
                />
              </div>
            </div>
            <div className={css.btnContainer}>
              <button
                type="submit"
                className={css.btn}
                disabled={isSubmitting || isLoading}
              >
                {isLoading ? 'Sending...' : 'Send'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
