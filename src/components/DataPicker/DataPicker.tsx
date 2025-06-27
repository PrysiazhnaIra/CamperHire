import DatePicker from 'react-datepicker';
import { useField } from 'formik';
import css from './DataPicker.module.css';

interface DatePickerFieldProps {
  name: string;
  [key: string]: any;
}
const DatePickerField = ({ name, ...props }: DatePickerFieldProps) => {
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
