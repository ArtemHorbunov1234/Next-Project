import Head from 'next/head';
import { useState } from 'react';
import { Card } from '~/components/Card';
import { Navigation } from '~/components/Navigation';
import { Registration } from '~/components/Registration';
import { api } from '~/utils/api';
import { Animation } from '~/components/Animation';
import Image from 'next/image';

function Home() {
    const { data: films } = api.film.getAll.useQuery(undefined, { initialData: [] });
    const apiContext = api.useContext();
    const deleteFilm = api.film.delete.useMutation({ onSuccess: () => apiContext.film.invalidate() });
    const [lightTheme, setLightTheme] = useState(false);
    const handleDeleteFilm = (id: string) => {
        // setFilms(films.filter(film => film.id !== id));
        deleteFilm.mutate({ id: id });
    };

    return (
        <div>
            <Animation />
            <Head>
                <title>Upsilon</title>
                <meta name='description' content='Generated by create-t3-app' />
                <link rel='icon' href='/favicon.ico' />
                {/* eslint-disable-next-line @next/next/no-page-custom-font */}
                <link href='https://fonts.googleapis.com/css2?family=Lato&display=swap' rel='stylesheet' />
            </Head>
            <div className='container'>
                <div className='container--svg'>
                    <Image width={28} height={28} src='mdi_sun-moon-stars.svg' alt='sun-moon' />
                    <label>
                        <input type='checkbox' onClick={() => setLightTheme(!lightTheme)} />
                        <span className='check'></span>
                    </label>
                </div>
                <div className='container--logo'>
                    <Image width={50} height={50} src='800px-Upsilon_uc_lc-1.svg' alt='upsilon' />
                    <h1>UPSILON</h1>
                </div>
                <Registration />
            </div>

            <Navigation />

            <div>
                <div className={lightTheme ? 'main--light' : 'main'}>
                    {films.map(film => (
                        <div key={film.id}>
                            <Card film={film} />
                            {/* <button className='main--card__btn' onClick={() => handleDeleteFilm(film.id)}>
                                Удалить
                            </button> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
