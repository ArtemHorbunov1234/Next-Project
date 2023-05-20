import styles from './registration.module.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState, useEffect, useRef } from 'react';

type Inputs = {
    email: string;
    password: string;
};

export function Registration() {
    const [isOpenLog, setIsOpenLog] = useState(false);
    const [isOpenReg, setIsOpenReg] = useState(false);
    const [isEmail, setEmail] = useState('');
    const [isPassword, setPassword] = useState('');
    const [isPasswordRetry, setPasswordRetry] = useState('');
    const toggleDropdownLog = (): void => {
        setIsOpenLog(!isOpenLog);
    };

    const toggleDropdownReg = (): void => {
        setIsOpenReg(!isOpenReg);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div className={styles.registration}>
                    <a href='#' onClick={toggleDropdownLog}>
                        Вхід
                    </a>

                    <a href='#' onClick={toggleDropdownReg}>
                        Реєстрація
                    </a>
                </div>
                {isOpenLog && (
                    <div className={styles.dropdown_bg}>
                        <div className={styles.dropdown_content}>
                            <div className={styles.header}>
                                <img
                                    className={styles.input_out}
                                    onClick={() => setIsOpenLog(false)}
                                    src='pepicons-pop_times.svg'
                                    alt=''
                                />
                                <div className={styles.input_logo}>
                                    <img src='800px-Upsilon_uc_lc 1.svg' alt='logo' />
                                    <h1>Upsilon</h1>
                                </div>
                                <div className={styles.input_registration}>
                                    <label className={styles.input_label}>
                                        Email:
                                        <input
                                            {...register('email', {
                                                minLength: 6,
                                                required: true,
                                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                            })}
                                            placeholder='Email...'
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                        {errors.email?.type === 'required' && <span>Fill in the email field</span>}
                                        {errors.email?.type === 'minLength' && (
                                            <span>Email must be 6 chars minimum</span>
                                        )}
                                        {errors.email?.type === 'pattern' && <span>This is not an email </span>}
                                    </label>
                                    <label className={styles.input_label}>
                                        Password:
                                        <input
                                            {...register('password', { minLength: 6, required: true })}
                                            placeholder='Password...'
                                            onChange={e => setPassword(e.target.value)}
                                        />
                                        {errors.password?.type === 'required' && (
                                            <span>Fill in the password field</span>
                                        )}
                                        {errors.password?.type === 'minLength' && (
                                            <span>Password can't be less than 6 letters</span>
                                        )}
                                    </label>
                                    <button type='submit'> Push</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {isOpenReg && (
                    <div className={styles.dropdown_bg}>
                        <div className={styles.dropdown_content}>
                            <div className={styles.header}>
                                <img
                                    className={styles.input_out}
                                    onClick={() => setIsOpenReg(false)}
                                    src='pepicons-pop_times.svg'
                                    alt=''
                                />
                                <div className={styles.input_logo}>
                                    <img src='800px-Upsilon_uc_lc 1.svg' alt='logo' />
                                    <h1>Upsilon</h1>
                                </div>
                                <div className={styles.input_registration}>
                                    <label className={styles.input_label}>
                                        Email:
                                        <input
                                            {...register('email', {
                                                minLength: 6,
                                                required: true,
                                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                            })}
                                            placeholder='Email...'
                                        />
                                        {errors.email?.type === 'required' && <span>Fill in the email field</span>}
                                        {errors.email?.type === 'minLength' && (
                                            <span>Email must be 6 chars minimum</span>
                                        )}
                                        {errors.email?.type === 'pattern' && <span>This is not an email </span>}
                                    </label>
                                    <label className={styles.input_label}>
                                        Password:
                                        <input
                                            {...register('password', { minLength: 6, required: true })}
                                            placeholder='Password...'
                                        />
                                    </label>
                                    <label className={styles.input_label}>
                                        Password retry:
                                        <input
                                            {...register('password', { minLength: 6, required: true })}
                                            placeholder='Password...'
                                        />
                                    </label>

                                    <button type='submit'> Push</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </form>
    );
}
