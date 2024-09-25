"use client";

import Link from "next/link";
import styles from "../styles/movie.module.css";
import { useRouter } from "next/navigation";

interface MovieProps{
    id: string;
    title: string;
    poster_path: string;
}

export default function Movie({id, title, poster_path}: MovieProps){
    const router = useRouter();
    const onClick = () => {
        router.push(`/movies/${id}`);
    }
    return (
        <div className={styles.movie}>
            <img src={poster_path} alt="poster of movie" onClick={onClick}/>
            <Link prefetch href={`/movies/${id}`}>
                {title}
            </Link>
        </div>
    );
}