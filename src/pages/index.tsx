import Head from 'next/head';
import styles from './index.module.css';
import clsx from 'clsx';
import { useState } from 'react';
import { Card } from '~/components/Card';
import Image from 'next/image';
import { useMutation, useQuery } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = (): void => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent): void {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
    }, [dropdownRef]);

    return (
        <div className='header'>
            <div>
                <ul className='navigation'>
                    <li>
                        <div ref={dropdownRef}>
                            <div className='navigation-flex'>
                                <a className='navigation-text'>Фільми</a>
                                <img
                                    onClick={toggleDropdown}
                                    className='navigation-img '
                                    src='uit_angle-up.svg'
                                    alt='list'
                                />
                            </div>

                            <div className={isOpen ? 'dropdown-content show' : 'dropdown-content'}>
                                <a href='#home' className='navigation--block'>
                                    Фентезійні
                                </a>
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
                        <div ref={dropdownRef}>
                            <div className='navigation-flex'>
                                <a href='#' className='navigation-text'>
                                    Серіали
                                    <img
                                        onClick={toggleDropdown}
                                        className='navigation-img'
                                        src='uit_angle-up.svg'
                                        alt='list'
                                    />
                                </a>
                            </div>

                            <div className={isOpen ? 'dropdown-content show' : 'dropdown-content'}>
                                <a href='#home' className='navigation--block'>
                                    Фентезійні
                                </a>
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
                        <a href='#' className='navigation-text'>
                            Мультфільми <img className='navigation-img' src='uit_angle-up.svg' alt='list' />
                        </a>
                    </li>
                    <li>
                        <input type='text' placeholder='Пошук' />
                    </li>
                </ul>
            </div>
        </div>
    );
}
function Home() {
    const queryClient = new QueryClient();

    type Film = {
        id: number;
        name: string;
        img: string;
        genre: string;
        releaseDate: number;
        country: string;
        rating: number;
    };

    const [films, setFilms] = useState<Film[]>([
        {
            id: 1,
            name: 'Человек-муравей и Оса: Квантомания',
            img: 'https://static.hdrezka.ac/i/2023/1/18/y6e04528a82c2pr44o93o.jpg',
            genre: 'Боевик',
            releaseDate: 2023,
            country: 'Франція',
            rating: 7,
        },
        {
            id: 2,
            name: 'Человек-муравей и Оса: Квантомания',
            img: 'https://static.hdrezka.ac/i/2023/1/18/y6e04528a82c2pr44o93o.jpg',
            genre: 'Боевик',
            releaseDate: 2023,
            country: 'Франція',
            rating: 7,
        },
        {
            id: 3,
            name: 'Человек-муравей и Оса: Квантомания',
            img: 'https://static.hdrezka.ac/i/2023/1/18/y6e04528a82c2pr44o93o.jpg',
            genre: 'Боевик',
            releaseDate: 2023,
            country: 'Франція',
            rating: 7,
        },
        {
            id: 4,
            name: 'Человек-муравей и Оса: Квантомания',
            img: 'https://static.hdrezka.ac/i/2023/1/18/y6e04528a82c2pr44o93o.jpg',
            genre: 'Боевик',
            releaseDate: 2023,
            country: 'Франція',
            rating: 7,
        },
        {
            id: 5,
            name: 'Человек-муравей и Оса: Квантомания',
            img: 'https://static.hdrezka.ac/i/2023/1/18/y6e04528a82c2pr44o93o.jpg',
            genre: 'Боевик',
            releaseDate: 2023,
            country: 'Франція',
            rating: 7,
        },
        // ... остальные фильмы
    ]);

    const deleteFilmMutation = useMutation(
        (id: number) =>
            new Promise<void>((resolve, reject) => {
                // Создаем новый массив без элемента с заданным id
                const updatedFilms = films.filter(film => film.id !== id);
                // Устанавливаем новый массив
                setFilms(updatedFilms);
                // Разрешаем промис
                resolve();
            }),
        {
            onSuccess: () => {
                // Обновляем кэш запроса, чтобы обновить UI
                queryClient.invalidateQueries('getAllFilms');
            },
        }
    );

    const handleDeleteFilm = (id: number) => {
        // Вызываем мутацию для удаления фильма
        deleteFilmMutation.mutate(id);
    };

    return (
        <div>
            <Head>
                <title>Index page</title>
                <meta name='description' content='Generated by create-t3-app' />
                <link rel='icon' href='/favicon.ico' />
                <link href='https://fonts.googleapis.com/css2?family=Lato&display=swap' rel='stylesheet' />
            </Head>

            <div className='container'>
                <div className='container--svg'>
                    <img src='mdi_sun-moon-stars.svg' alt='sun-moon' />
                    <img className='header__btn' src='uit_toggle-off.svg' alt='button' />
                </div>
                <div className='container--logo'>
                    <img src='800px-Upsilon_uc_lc 1.svg' alt='upsilon' />
                    <h1>UPSILON</h1>
                </div>
                <div className='registration'>
                    <a href='#'>Вхід</a>

                    <a href='#'>Реєстрація</a>
                </div>
            </div>
            <Dropdown />
            <div>
                <div className='main'>
                    {films.map(film => (
                        <div key={film.id}>
                            <Card film={film} />
                            <button onClick={() => handleDeleteFilm(film.id)}>Удалить</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
