const DUMMY_EVENTS = [
	{
		id: 'e1',
		title: 'Programming for everyone',
		description:
			'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
		location: 'Somestreet 25, 12345 San Somewhereo',
		date: '2023-07-25',
		image: 'images/coding-event.jpg',
		isFeatured: false,
	},
	{
		id: 'e2',
		title: 'Networking for introverts',
		description:
			"We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
		location: 'New Wall Street 5, 98765 New Work',
		date: '2023-06-04',
		image: 'images/introvert-event.jpg',
		isFeatured: true,
	},
	{
		id: 'e3',
		title: 'Networking for extroverts',
		description:
			'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
		location: 'My Street 12, 10115 Broke City',
		date: '2024-04-12',
		image: 'images/extrovert-event.jpg',
		isFeatured: true,
	},
	{
		id: 'e4',
		title: 'Basics of Development',
		description:
			'After graduating from Programming for everone, this event teaches about web development. Taking your code and making it visible to everyone!',
		location: 'Somestreet 24, 32091 Compton',
		date: '2023-03-13',
		image: 'images/coding-event.jpg',
		isFeatured: false,
	},
	{
		id: 'e5',
		title: 'Closing the Deal',
		description:
			'Just as important as your coding skills. Closing deals allows your passions to be your exit out of the rat race.',
		location: 'My Street 12, 10115 Broke City',
		date: '2024-07-25',
		image: 'images/introvert-event.jpg',
		isFeatured: false,
	},
];

export function getFeaturedEvents() {
	return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
	return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
	console.log('filterEvents called dateFilter: ' + dateFilter);
	const { year, month } = dateFilter;

	let filteredEvents = DUMMY_EVENTS.filter((event) => {
		const eventDate = new Date(event.date);
		return (
			eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
		);
	});

	console.log('filterEvents returning filteredEevents: ' + filteredEvents);
	return filteredEvents;
}

export function getEventById(id) {
	return DUMMY_EVENTS.find((event) => event.id === id);
}
