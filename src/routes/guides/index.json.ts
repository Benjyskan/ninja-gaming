export async function get() {
	// connect to dm & get data

	const guides = [
		{ id: 1, title: 'some title1' },
		{ id: 2, title: 'some title2' },
		{ id: 3, title: 'some title3' },
		{ id: 4, title: 'some title4' },
		{ id: 5, title: 'some title5' },
	]

	return {
		status: 200,
		body: { guides }
	}
}