import { Inter } from 'next/font/google';
import { getFeaturedEvents } from './dummy-data';
import EventList from '@/components/events/event-list';

export default function HomePage() {
	const featuredEvents = getFeaturedEvents();
	return (
		<>
			<h1>This is the home page</h1>
			<div className=''>
				<EventList events={featuredEvents} />
			</div>
		</>
	);
}
