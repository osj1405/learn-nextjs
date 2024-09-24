import { getMovie } from "../../../../../components/movie-info";

interface IParams {
    params: { id : string};
}

export async function generateMetadata({params: {id}} : IParams){
    const movie = await getMovie(id);
    return {
        title: movie.credit,
    }
}


export default function MovieCreditPage({
    params: {id},
}: IParams){
    return (
        <h1>Movie credits</h1>
    );
}