import { Field, Form, Formik } from 'formik';
import Container from '../Container/Container';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import css from './RegForm.module.css';
import iziToast from 'izitoast';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  name: Yup.string().required('Name is required'),
  bookingDate: Yup.date().required('Date is required'),
});

const RegForm = () => {
  const initialState = {
    name: '',
    email: '',
    bookingDate: null,
    comment: '',
  };

  const handleSubmit = (values, actions) => {
    actions.resetForm();
    return iziToast.success({
      message: `Successfully registered on ${values.name}`,
      position: 'topRight',
    });
  };

  return (
    <Container className={css.container}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.desc}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialState}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ setFieldValue, values }) => (
          <Form className={css.form}>
            <Container className={css.formContainer}>
              {' '}
              {/* Поле имени */}
              <Field
                className={css.input}
                placeholder='Name*'
                type='text'
                name='name'
              />
              {/* Поле email */}
              <Field
                className={css.input}
                placeholder='Email*'
                type='email'
                name='email'
              />
              {/* Кастомный календарь */}
              <div className={css.inputWrapper}>
                <DatePicker
                  className={css.input} // Стили инпута
                  selected={values.bookingDate} // Установить значение из Formik
                  onChange={(date) => setFieldValue('bookingDate', date)} // Обновление значения
                  placeholderText='Booking date*'
                  onFocus={(e) =>
                    (e.target.placeholder = 'Select a day between today')
                  }
                  onBlur={(e) => (e.target.placeholder = 'Booking date*')}
                  minDate={new Date()} // Запрет на выбор дат в прошлом
                  popperPlacement='bottom-center'
                />
              </div>
              {/* Поле комментария */}
              <Field
                className={`${css.input} ${css.comment}`}
                placeholder='Comment'
                as='textarea'
                name='comment'
              />
            </Container>

            <button type='submit' className={css.submitButton}>
              Send
            </button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default RegForm;
