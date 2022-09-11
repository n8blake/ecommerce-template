export interface EProduct {
    id: number,
    name: string,
    description: string,
    imageUrl: string,
    price: number,
    categories: ECategory[]
}

export interface ECategory {
    id: number,
    name: string
}