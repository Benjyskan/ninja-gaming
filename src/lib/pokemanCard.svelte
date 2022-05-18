<script lang="ts">
	import type { Pokemon } from 'src/types/types';
	import { fade } from 'svelte/transition';

	export let pokeman: Pokemon;
</script>

<a transition:fade href={`/pokemon/pokeman/${pokeman.id}`}>
	<img src={pokeman.image} alt={`${pokeman.name} img`} />
	<h2>{pokeman.id}. {pokeman.name}</h2>
</a>

<style>
	a {
		background-color: bisque;
		display: flex;
		justify-content: center;
		align-items: center;
		/* width: fit-content; */
	}
</style>
