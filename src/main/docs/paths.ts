import { 
    createMoviePath, 
    updateMoviePath, 
    listMoviePath,
    listOneMoviePath,
    deleteMoviePath,
    loginPath
} from "./paths/"

export default {
    '/login': loginPath,
    "/movie/create": createMoviePath,
    "/movie/update": updateMoviePath,
    "/movie/list": listMoviePath,
    "/movie/list-one": listOneMoviePath,
    "/movie/delete": deleteMoviePath
}