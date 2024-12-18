import DatePicker from 'react-datepicker';
import { useField } from 'formik';
import css from './DataPicker.module.css';
const DatePickerField = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const { setValue } = helpers;

  return (
    <div className={css.data}>
      <DatePicker
        {...field}
        {...props}
        selected={(field.value && new Date(field.value)) || null}
        onChange={val => setValue(val)}
      />
      {meta.touched && meta.error ? (
        <div style={{ color: 'red', marginTop: '5px' }}>{meta.error}</div>
      ) : null}
    </div>
  );
};
export default DatePickerField;
