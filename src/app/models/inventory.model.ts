export interface Inventory {
    id?: number; // the id can be null, because sql will generate it
    name: string;
    icon: string;
    description: string;
    amount: number; // quantity of that inventory
    locationId: number;
}
