import { useRouter } from 'next/router';
import React, { Fragment } from 'react';
import { getEventById } from '../dummy-data';
import EventSummary from '@/components/event-detail/event-detail/event-summary';
import EventLogistics from '@/components/event-detail/event-detail/event-logistics';
import EventContent from '@/components/event-detail/event-detail/event-content';
import ErrorAlert from '@/components/ui/error-alert/error-alert';

function EventDetailPage() {
	const router = useRouter();
	const eventId = router.query.eventId;

	const selectedEvent = getEventById(eventId);

	if (!selectedEvent) {
		return (
			<Fragment>
				<ErrorAlert>
					<p>No event found!!</p>
				</ErrorAlert>
				<div className='center'>
					<Button link='/events'>show All Events</Button>
				</div>
			</Fragment>
		);
	}

	return (
		<Fragment>
			<EventSummary title={selectedEvent.title} />
			<EventLogistics
				date={selectedEvent.date}
				address={selectedEvent.location}
				image={selectedEvent.image}
				imageAlt={selectedEvent.title}
			/>
			<EventContent>
				<p>{selectedEvent.description}</p>
			</EventContent>
		</Fragment>
	);
}

export default EventDetailPage;
