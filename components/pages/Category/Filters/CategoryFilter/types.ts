export type CategoryFilterProps = {
    categories: CategoryFilter
}

type CategoryFilter = {
    parents: { readebleName: string, fetchPrefix: string }[] | null
    childs: { readebleName: string, fetchPrefix: string }[] | null
    readebleName: string
    fetchPrefix: string
}