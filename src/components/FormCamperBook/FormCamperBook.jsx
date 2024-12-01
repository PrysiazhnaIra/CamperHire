import { ErrorMessage, Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import { toast, Toaster } from 'react-hot-toast';
import css from './FormCamperBook.module.css';
import { useState } from 'react';
import Loader from '../Loader/Loader.jsx';
import 'react-datepicker/dist/react-datepicker.css';
import DatePickerField from '../DataPicker/DataPicker.jsx';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  comment: Yup.string()
    .min(10, 'Comment should be at least 10 characters')
    .required('Required!'),
  booking: Yup.date().required('Booking date is required'),
});

export default function FormCamperBook() {
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    name: '',
    email: '',
    booking: '',
    comment: '',
  };

  const handleSubmit = async (values, actions) => {
    setIsLoading(true);
    try {
      console.log('Form values:', values);
      actions.resetForm();
      toast.success('Operation was successful!');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Operation failed. Please check your info.');
    } finally {
      setIsLoading(false);
    }
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

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.form}>
          <div className={css.formBlock}>
            <div>
              <Field name="name" placeholder="Name*" className={css.input} />
              <ErrorMessage
                name="name"
                component="span"
                className={css.errorMessage}
              />
            </div>

            <div>
              <Field name="email" placeholder="Email*" className={css.input} />
              <ErrorMessage
                name="email"
                component="span"
                className={css.errorMessage}
              />
            </div>

            <div>
              <label htmlFor="booking"></label>
              <DatePickerField
                name="booking"
                placeholderText="Booking date*"
                dateFormat="yyyy-MM-dd"
                className={css.input}
              />
            </div>

            <div>
              <Field
                as="textarea"
                name="comment"
                placeholder="Comment"
                className={`${css.input} ${css.textarea}`}
              />
              <ErrorMessage
                name="comment"
                component="span"
                className={css.errorMessage}
              />
            </div>
          </div>
          <button type="submit" className={css.btn} disabled={isLoading}>
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
}
