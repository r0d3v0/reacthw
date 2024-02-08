import {jsonAPIServises} from "./jsonAPIServises";
import {urls} from "../constants/urls";
import {spaceXAPIServises} from "./spaceXAPIServises";

const postServsises ={
    getAll:()=>jsonAPIServises.get(urls.posts.base),
    getByID:(id)=>spaceXAPIServises.get(urls.posts.byId(id))
}

export {
    postServsises
}