import { useState, useEffect, useRef } from 'react';
import styles from './navigator.module.css';
import clsx from 'clsx';

export function Navigation() {
    const [isOpenFilm, setIsOpenFilm] = useState(false);
    const [isOpenCurtain, setIsOpenCurtain] = useState(false);
    const [isOpenCartoon, setIsOpenCartoon] = useState(false);
    const dropdownRefFilm = useRef<HTMLDivElement>(null);
    const dropdownCurtain = useRef<HTMLDivElement>(null);
    const dropdownCartoon = useRef<HTMLDivElement>(null);

    const toggleDropdownFilm = (): void => {
        setIsOpenFilm(!isOpenFilm);
    };

    const toggleDropdownCurtain = (): void => {
        setIsOpenCurtain(!isOpenCurtain);
    };

    const toggleDropdownCartoon = (): void => {
        setIsOpenCartoon(!isOpenCartoon);
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent): void {
            const isClickedInsideFilmDropdown = dropdownRefFilm.current?.contains(event.target as Node);
            const isClickedInsideCurtainDropdown = dropdownCurtain.current?.contains(event.target as Node);
            const isClickedInsideCartoonDropdown = dropdownCartoon.current?.contains(event.target as Node);

            if (!isClickedInsideFilmDropdown && !isClickedInsideCurtainDropdown && !isClickedInsideCartoonDropdown) {
                setIsOpenFilm(false);
                setIsOpenCurtain(false);
                setIsOpenCartoon(false);
            } else if (isClickedInsideFilmDropdown) {
                setIsOpenCurtain(false);
                setIsOpenCartoon(false);
            } else if (isClickedInsideCurtainDropdown) {
                setIsOpenFilm(false);
                setIsOpenCartoon(false);
            } else if (isClickedInsideCartoonDropdown) {
                setIsOpenFilm(false);
                setIsOpenCurtain(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRefFilm, dropdownCurtain, dropdownCartoon]);

    return (
        <div className={styles.header}>
            <ul className={styles.navigation}>
                <li>
                    <div ref={dropdownRefFilm}>
                        <div className={styles.navigation_flex}>
                            <a className={styles.navigation_text}>Фільми</a>
                            <img
                                onClick={toggleDropdownFilm}
                                className={styles.navigation_img}
                                src='uit_angle-up.svg'
                                alt='list'
                            />
                        </div>
                        <div
                            className={
                                isOpenFilm ? clsx(styles.dropdown_content, styles.show) : styles.dropdown_content
                            }
                        >
                            <a href='#home'>Фентезійні</a>
                            <a href='#about'>Детективи</a>
                            <a href='#contact'>Екшн (бойовики)</a>
                            <a href='#home'>Кримінальні</a>
                            <a href='#about'>Комедії</a>
                            <a href='#contact'>Трилери</a>
                            <a href='#home'>Фантастичні</a>
                            <a href='#about'>Сімейні</a>
                            <a href='#contact'>Жахіття</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div ref={dropdownCurtain}>
                        <div className={styles.navigation_flex}>
                            <a href='#' className={styles.navigation_text}>
                                Серіали
                                <img
                                    onClick={toggleDropdownCurtain}
                                    className={styles.navigation_img}
                                    src='uit_angle-up.svg'
                                    alt='list'
                                />
                            </a>
                        </div>

                        <div
                            className={
                                isOpenCurtain ? clsx(styles.dropdown_content, styles.show) : styles.dropdown_content
                            }
                        >
                            <a href='#home'>Фентезійні</a>
                            <a href='#about'>Детективи</a>
                            <a href='#contact'>Екшн (бойовики)</a>
                            <a href='#home'>Кримінальні</a>
                            <a href='#about'>Комедії</a>
                            <a href='#contact'>Трилери</a>
                            <a href='#home'>Фантастичні</a>
                            <a href='#about'>Сімейні</a>
                            <a href='#contact'>Жахіття</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div ref={dropdownCartoon}>
                        <div className={styles.navigation_flex}>
                            <a href='#' className={styles.navigation_text}>
                                Мультфільми
                                <img
                                    onClick={toggleDropdownCartoon}
                                    className={styles.navigation_img}
                                    src='uit_angle-up.svg'
                                    alt='list'
                                />
                            </a>
                        </div>

                        <div
                            className={
                                isOpenCartoon
                                    ? clsx(styles.dropdown_content, styles.show, styles.navigation_transform)
                                    : styles.dropdown_content
                            }
                        >
                            <a href='#home'>Фентезійні</a>
                            <a href='#about'>Детективи</a>
                            <a href='#contact'>Екшн (бойовики)</a>
                            <a href='#home'>Кримінальні</a>
                            <a href='#about'>Комедії</a>
                            <a href='#contact'>Трилери</a>
                            <a href='#home'>Фантастичні</a>
                            <a href='#about'>Сімейні</a>
                            <a href='#contact'>Жахіття</a>
                        </div>
                    </div>
                </li>
                <li>
                    <input type='text' placeholder='Пошук' />
                </li>
            </ul>
        </div>
    );
}
