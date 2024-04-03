export interface Dashboard {
    id?: number; // the id can be null, because sql will generate it
    name: string;
    icon: string;
    address: string;
}
