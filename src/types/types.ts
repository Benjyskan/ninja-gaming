export type Guide = {
	title: string
	body?: string
	id: number
}

export type PokemonApiRes = {
	count: number
	next: string | null
	previous: string | null
	results: { name: string, url: string }[]
}

export type Pokemon = {
	name: string
	id: number
	image: string
}
