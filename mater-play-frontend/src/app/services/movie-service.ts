import { API } from "../@libs/axios";
import { IMovie } from "../@libs/types";

const _EDNPOINT = '/movies';

const getMovie = async (): Promise<IMovie[]> => {
    const { data } = await API.get(_EDNPOINT)
    return data; 
}

const getMovieById = async (id: string): Promise<IMovie> => {
    const { data } = await API.get(`${_EDNPOINT}/${id}`)
    return data
}

export const MoviesServices = {
    getMovie,
    getMovieById
}