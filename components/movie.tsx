import Link from "next/link";
import styles from "../styles/movie.module.css";

interface MovieProps{
    id: string;
    title: string;
    poster_path: string;
}

export default function Movie({id, title, poster_path}: MovieProps){
    return (
        <div className={styles.movie}>
            <img src={poster_path} alt="poster of movie"/>
            <Link href={`/movies/${id}`}>
                {title}
            </Link>
        </div>
    );
}