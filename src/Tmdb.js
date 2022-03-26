const API_KEY='386817dd9479e846ed0f216578f911f6';
const APP_BASE='https://api.themoviedb.org/3';


const basicFetch=async (endpoint)=>{
    const req=await fetch(`${APP_BASE}${endpoint}`);
    const json=await req.json();
    return json;
}

export default{
    getHomeList:async()=>{
        return [
            {
                slug:"originals",
                title:'Originais do Netflix',
                items:await basicFetch(`/discover/tv?with_network=213&api_key=${API_KEY}`)
            },
            {
                slug:'trending',
                title:"Recomendados para Voce",
                items:await basicFetch(`/trending/all/week?api_key=${API_KEY}`)
            },
            {
                slug:'toprated',
                title:"Em Alta",
                items:await basicFetch(`/movie/top_rated?api_key=${API_KEY}`)
            },
            {
                slug:'action',
                title:"Action",
                items:await basicFetch(`/discover/movie?with_genres=28&api_key=${API_KEY}`)
            },
            {
                slug:'comedy',
                title:"comedia",
                items:await basicFetch(`/discover/movie?with_genres=27&api_key=${API_KEY}`)
            },
        ]
    },
    getMovieInfo:async (movieId,type)=>{
let info={};
if(movieId){
    switch(type){
        case 'movie':
info=await basicFetch(`/movie/${movieId}?api_key=${API_KEY}`);
        break;
        case 'tv':
            info=await basicFetch(`/tv/${movieId}?api_key=${API_KEY}`);

        break;
        default:
            info=null;
            break;
    }
}

return info;
    }
}