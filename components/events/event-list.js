import React from 'react';
import EventItem from './event-item';

function EventList(props) {
	const { events } = props;
	return (
		<ul>
			{events.map((event) => (
				<EventItem
					key={event.id}
					id={event.id}
					title={event.title}
					location={event.location}
					image={event.image}
					date={event.date}
				/>
			))}
		</ul>
	);
}

export default EventList;
