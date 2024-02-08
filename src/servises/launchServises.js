import {spaceXAPIServises} from "./spaceXAPIServises";
import {urls} from "../constants/urls";

const launchServises= {
    getAll:()=>spaceXAPIServises.get(urls.launches),
    // getById:()=>spaceXAPIServises.get(urls.posts.byId)

}
export {
    launchServises
}