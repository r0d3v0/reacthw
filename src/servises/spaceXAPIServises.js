import axios from "axios";
import {spaceXBaseUrl} from "../constants/urls";


const spaceXAPIServises = axios.create({baseURL: spaceXBaseUrl})


export {
    spaceXAPIServises
}