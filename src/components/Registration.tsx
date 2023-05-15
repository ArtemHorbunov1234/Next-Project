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
            <div className={styles.header} ref={dropdownRefLog}>
                <div className='registration'>
                    <a href='#' onClick={toggleDropdownFilm}>
                        Вхід
                    </a>

                    <a href='#'>Реєстрація</a>
                </div>
                <div className={isOpenLog ? clsx(styles.dropdown_content, styles.show) : styles.dropdown_content}>
                    <div>
                        <div className={styles.input_registration}>
                            <label>
                                Email:
                                <input
                                    {...register('email', { minLength: 6, required: true })}
                                    placeholder='Email...'
                                />
                            </label>
                            <label>
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
