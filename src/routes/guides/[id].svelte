<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import type { Guide } from 'src/types/types';

	export const load: Load = async ({ fetch, params }) => {
		const id = params.id;
		const res = await fetch(`/guides/${id}.json`);
		const { guide }: { guide: Guide } = await res.json();
		console.log(guide);

		if (res.ok) {
			return {
				props: {
					guide
				}
			};
		}
		return {
			status: 301,
			// error: new Error('Could not fetch the guide')
			redirect: '/guides'
		};
	};
</script>

<script lang="ts">
	export let guide: Guide;
</script>

<div class="guide">
	<h2>{guide.title}</h2>
	{#if guide.body}
		<p>{guide.body}</p>
	{/if}
</div>

<style>
	.guide {
		margin-top: 40px;
		padding: 10px;
		border: 1px dotted rgba(255, 255, 255, 0.2);
	}
</style>
