import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export default function MovieDetail({
    params: {id},
}:{
    params: {id: string};
}){
    return (
        <div>
            <h3>Movie Detail Page</h3>
            <Suspense fallback={<h2>Loading Movie Information...</h2>}>
                <MovieInfo id={id}/>
            </Suspense>
            <Suspense fallback={<h2>Loading Movie Videos...</h2>}>
                <MovieVideos id={id}/>
            </Suspense>
        </div>
        // {videos.map((video) =>  )}
    );
}