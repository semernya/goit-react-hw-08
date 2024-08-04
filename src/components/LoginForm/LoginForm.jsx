import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from './LoginForm.module.css'

const FeedbackSchema = Yup.object().shape({
    email: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required'),
    password: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required'),
});

export default function LoginForm() {

    const initialValues = {
        email: '',
        password: '',
    };

    return (
        <Formik initialValues={initialValues} validationSchema={FeedbackSchema}>
            <Form className={css.form}>
                <div className={css.formGroup}>
                    <label className={css.label}>Email</label>
                    <Field type='text' name='email' />
                    <ErrorMessage name='email' component='span' />
                </div>
                <div className={css.formGroup}>
                    <label className={css.label}>Password</label>
                    <Field type='text' name='password' />
                    <ErrorMessage name='password' component='span' />
                </div>
                <button type="submit" className={css.btn}>Log In</button>
            </Form>
        </Formik>
    )
}