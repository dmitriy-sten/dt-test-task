export interface Response<T> {
    offset: number
    number: number
    results: T
    totalResults: number
}


export interface Recipe {
    id: number
    title: string
    image: string
    imageType: string
}