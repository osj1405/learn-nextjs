import { error } from "console";
import { API_URL } from "../app/(home)/page";

async function getMovieVideo(id: string){
    await new Promise((resolve) => setTimeout(resolve, 3000));
    // throw new Error('something wrong...');
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();

}

export default async function MovieVideos({id}:{id:string}){
    const videos = await getMovieVideo(id);
    return(
        <h6>
            {JSON.stringify(videos)}
        </h6>
    );
}