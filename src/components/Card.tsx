import styles from './card.module.css';

type Film = {
    name: string;
    img: string;
    genre: string;
    releaseDate: number;
    country: string;
    rating: number;
};

type CardProps = {
    film: Film;
};

export function Card({ film }: CardProps) {
    return (
        <div className={styles.card}>
            <h3>{film.name}</h3>
            <img src={film.img} />
            <p>Жанр: {film.genre}</p>
            <p>Дата виходу: {film.releaseDate}</p>
            <p>Країна: {film.country}</p>
            <p>Рейтинг: {film.rating}/10</p>
        </div>
    );
}
