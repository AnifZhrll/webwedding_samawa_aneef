import { TShow } from "./types";

export async function getData(show: TShow) {
    try {
        let url = `${process.env.HOST_API}/api/wedding-packages`;
        if (show === "popular")
            url = `${process.env.HOST_API}/api/wedding-packages/popular`;

        const res = await fetch(url, {
            method: "GET",
            cache: "no-cache", 
        });

        console.log(url, res);
        return res.json();
    } catch (error) {
        console.error(error);
    }
}