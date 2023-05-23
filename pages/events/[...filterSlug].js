import EventList from '@/components/events/event-list';
import React, { Fragment } from 'react';
import { getFilteredEvents } from '../dummy-data';
import { useRouter } from 'next/router';
import ResultsTitle from '@/components/events/results-title';
import Button from '@/components/ui/button';
import ErrorAlert from '@/components/ui/error-alert/error-alert';

function FilteredEventsPage(props) {
	const router = useRouter();
	const filterData = router.query.filterSlug;
	console.log('slugData: ' + filterData);

	if (!filterData) {
		return <p className='center'>Loading</p>;
	}

	const year = filterData[0];
	const month = filterData[1];

	const numYear = +year;
	const numMonth = +month;

	if (
		isNaN(numYear) ||
		isNaN(numMonth) ||
		numYear > 2035 ||
		numYear < 2020 ||
		numMonth < 1 ||
		numMonth > 12
	) {
		return (
			<Fragment>
				<ErrorAlert>
					<p>Ivalid filter please adjust values.</p>
				</ErrorAlert>
				<div className='center'>
					<Button link='/events'>show All Events</Button>
				</div>
			</Fragment>
		);
	}

	const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });
	const date = new Date(numYear, numMonth - 1);

	if (!filteredEvents || filteredEvents.length === 0) {
		return (
			<Fragment>
				<ErrorAlert>
					<p>No Events Found!!</p>
				</ErrorAlert>
				<div className='center'>
					<Button link='/events'>show All Events</Button>
				</div>
			</Fragment>
		);
	}
	return (
		<Fragment>
			<ResultsTitle date={date} />
			<EventList events={filteredEvents} />
		</Fragment>
	);
}

export default FilteredEventsPage;
