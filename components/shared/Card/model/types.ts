export type CardProps = {
    imageSrc: string
    title: string
    price: number
    discount?: number
    points?:number
    tag?: string
}
enum Peculiarity { 'hit', 'sale', 'goodPrice', 'pointsForReview' }