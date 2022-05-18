// UNUSED
import type { Pokemon, PokemonApiRes } from 'src/types/types'
import { writable } from 'svelte/store'

export const pokemon = writable<Pokemon[]>([])

const fetchPokemon = async () => {
	const url = `https://pokeapi.co/api/v2/pokemon?limit=150`
	const res = await fetch(url)
	const data: PokemonApiRes = await res.json()
	const loadedPokemon = data.results.map<Pokemon>((data, index) => ({
		name: data.name,
		id: index + 1,
		image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
	}))
	pokemon.set(loadedPokemon)
}

fetchPokemon()