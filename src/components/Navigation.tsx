import { useState, useEffect, useRef } from 'react';
import styles from './navigator.module.css';
import clsx from 'clsx';
import Image from 'next/image';

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
                            <Image
                                onClick={toggleDropdownFilm}
                                className={isOpenFilm ? styles.navigation_img : styles.navigation_img__reverse}
                                src='uit_angle-up.svg'
                                alt='list'
                                width={24}
                                height={30}
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
                                <Image
                                    onClick={toggleDropdownCurtain}
                                    className={isOpenCurtain ? styles.navigation_img : styles.navigation_img__reverse}
                                    src='uit_angle-up.svg'
                                    alt='list'
                                    width={24}
                                    height={30}
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
                                <Image
                                    onClick={toggleDropdownCartoon}
                                    className={isOpenCartoon ? styles.navigation_img : styles.navigation_img__reverse}
                                    src='uit_angle-up.svg'
                                    alt='list'
                                    width={24}
                                    height={30}
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
                <li className={styles.search_box}>
                    <a className={styles.search_btn}>
                        <Image className={styles.search_svg} src='primary.svg' alt='' width={18} height={24} />
                    </a>
                    <input type='text' placeholder='Пошук...' className={styles.search_txt} />
                </li>
            </ul>
        </div>
    );
}
