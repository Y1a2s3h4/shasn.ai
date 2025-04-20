import { StaticImageData } from "next/image";
export enum ShasnCharactersEnum {
    Supremo = "Supremo",
    Idealist = "Idealist",
    Capitalist = "Capitalist",
    Showman = "Showman",
}
export type ShasnCharactersMapType = {
    [key in ShasnCharactersEnum]: {
        name: string;
        description: string;
        image: StaticImageData;
    };
}
