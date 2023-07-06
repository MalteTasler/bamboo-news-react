import { INews, INewsBase } from "../constants/interfaces";

export const patchNewsEntry = async(fetchUrlWithParameters: string, tobitAccessToken: string, data: INewsBase) : Promise<Response> =>
    fetch(fetchUrlWithParameters , {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization" : `bearer ${tobitAccessToken}`
        }
    })