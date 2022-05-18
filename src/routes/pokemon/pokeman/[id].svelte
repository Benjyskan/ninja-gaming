<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch, params }) => {
		console.log('load');
		const { id } = params;
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const res = await fetch(url);
		const pokeman = await res.json();
		return { props: { pokeman } };
	};
</script>

<script lang="ts">
	type Pokeman = {
		name: string;
		sprites: {
			front_default: string;
		};
		types: Array<{
			slot: number;
			type: {
				name: string;
				url: string;
			};
		}>;
		height: number;
		weight: number;
	};

	export let pokeman: Pokeman;
	console.log('pokeman', pokeman);

	const types = pokeman.types.map((p) => p.type.name).join(', ');
</script>

<h1>{pokeman.name}</h1>
<p>
	Type: <strong>{types}</strong> | Height:
	<strong>{pokeman.height}</strong> | Weight: <strong>{pokeman.weight}</strong>
	<img src={pokeman.sprites['front_default']} alt={pokeman.name} />
</p>
