import { 
    createMoviePath, 
    updateMoviePath, 
    listMoviePath,
    listOneMoviePath,
    deleteMoviePath
} from "./paths/"

export default {
    "/movie": [createMoviePath, updateMoviePath, listMoviePath, listOneMoviePath, deleteMoviePath]
}