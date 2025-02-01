export interface Boat {
    id?: number;
    boatName: string;
    description: string;
    landlord: string;
    manufacturer: string;
    imageSource: string;
    placesInside: number;
    cabins: number;
    bunk: number;
    priceInTheSeason: number;
    priceOutOfSeason: number;
    year: number;
    power: number;
    distance: number;
}