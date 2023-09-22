import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true)

    const fetchGifs = async () => {
        const gifs = await getGifs(category);
        setImages(gifs);
        setLoading(false);
    }
    useEffect(() => {
        fetchGifs();
    }, []);

    return {
        images: images,
        isLoading: loading
    }
}