export type TShow = "popular" | "newest";

import { TCity } from "@/components/Cities/types";
import { TOrganizer } from "@/components/Organizer/types";

type TPackage = {
    id: number,
    name: string,
    slug: string,
    price: number,
    isPopular: 1 | 0,
    thumbnail: string,
    about: string,
    city: TCity,
    weddingOrganizer: TOrganizer
}