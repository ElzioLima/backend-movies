import { 
    createMoviePath, 
    updateMoviePath, 
    listMoviePath,
    listOneMoviePath,
    deleteMoviePath
} from "./paths/"

export default {
    "/movie/create": createMoviePath,
    "/movie/update": updateMoviePath,
    "/movie/list": listMoviePath,
    "/movie/list-one": listOneMoviePath,
    "/movie/delete": deleteMoviePath
}