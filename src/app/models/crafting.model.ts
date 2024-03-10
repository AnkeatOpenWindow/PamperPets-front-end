export interface Crafting {
    id?: number; // the id can be null, because sql will generate it
    item: string;
    color: string;
    avalible: number;
    needed: number;
}
