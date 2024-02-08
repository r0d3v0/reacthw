import axios from "axios";
import {jsonBaseUrl} from "../constants/urls";

const jsonAPIServises = axios.create({baseURL:jsonBaseUrl})

export {
    jsonAPIServises
}