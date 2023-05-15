import styles from './registration.module.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';

type Inputs = {
    email: string;
    password: string;
};

export function Registration() {
    const [isOpenLog, setIsOpenLog] = useState(false);
    const dropdownRefLog = useRef<HTMLDivElement>(null);

    const toggleDropdownFilm = (): void => {
        setIsOpenLog(!isOpenLog);
    };
    useEffect(() => {
        function handleClickOutside(event: MouseEvent): void {
            const isClickedInsideLogDropdown = dropdownRefLog.current?.contains(event.target as Node);

            if (!isClickedInsideLogDropdown) {
                setIsOpenLog(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRefLog]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div ref={dropdownRefLog}>
                <div className={styles.registration}>
                    <a href='#' onClick={toggleDropdownFilm}>
                        Вхід
                    </a>

                    <a href='#'>Реєстрація</a>
                </div>
                <div className={isOpenLog ? clsx(styles.dropdown_content, styles.show) : styles.dropdown_content}>
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
                                    {...register('email', { minLength: 6, required: true })}
                                    placeholder='Email...'
                                />
                            </label>
                            <label className={styles.input_label}>
                                Password:
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
        </form>
    );
}
