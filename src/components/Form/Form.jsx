import { Formik } from 'formik';
import css from './Form.module.css';
import { useState } from 'react';

export default function Form() {
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    name: '',
    email: '',
    booking: '',
    comment: '',
  };

  return (
    <div>
      <h3>Book your camper van now</h3>
      <p>Stay connected! We are always ready to help you.</p>
      <Formik>
        <Form></Form>
      </Formik>
      <button type="submit" className={css.btn} disabled={isLoading}></button>
    </div>
  );
}
