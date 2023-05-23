import React, { Fragment } from 'react';
import { getAllEvents } from '../dummy-data';
import EventList from '@/components/events/event-list';
import EventSearch from '@/components/events/event-search';
import { useRouter } from 'next/router';

function AllEventsPage() {
	const router = useRouter();
	const allEvents = getAllEvents();

	const findEventsHandler = (year, month) => {
		const fullPath = `/events/${year}/${month}`;
		router.push(fullPath);
	};

	return (
		<Fragment>
			<EventSearch onSearch={findEventsHandler} />
			<EventList events={allEvents} />
		</Fragment>
	);
}

export default AllEventsPage;
