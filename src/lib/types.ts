export type Categories = "svelte" | "sveltekit" | "frontend" | "dev"

export type Post = {
    title: string
	slug: string
	description: string
	date: string
	categories: Categories[]
	published: boolean
}