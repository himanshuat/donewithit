import { create } from "apisauce";
import variables from "./variables";

const apiClient = create({
    baseURL: variables.BASE_URL
})

export default apiClient;