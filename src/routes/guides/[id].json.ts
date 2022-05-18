import type { GetSession } from "@sveltejs/kit"

export const get: GetSession = async ({ params }) => {

	const guides = [
		{ id: 1, title: 'some title1' },
		{ id: 2, title: 'some title2' },
		{ id: 3, title: 'some title3' },
		{ id: 4, title: 'some title4' },
		{ id: 5, title: 'some title5' },
	]

	const guide = guides.find(g => g.id == parseInt(params.id))

	if (guide) {
		return {
			status: 200,
			body: { guide }
		}
	}

	return {
		status: 404
	}
}