
export interface WElixirs {
    id: string;
    name: string;
}

export interface Wizard {
    elixirs: Array<WElixirs>,
    id: string,
    firstName: string,
    lastName: string
}
