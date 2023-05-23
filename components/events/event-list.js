import React from 'react';
import EventItem from './event-item';
import classes from './event-list.module.css';

function EventList(props) {
	const { events } = props;
	return (
		<ul className={classes.list}>
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
