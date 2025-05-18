import { TPackage } from "@/components/WeddingPackages/types";

export type TCity = {
    id: number,
    name: string,
    slug: string,
    icon: string,
    weddingPackages_count: number,
    weddingPackages: TPackage[]
};

