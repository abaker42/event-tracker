import Link from 'next/link';
import React from 'react';

function EventItem(props) {
	const { title, image, date, location, id } = props;

	//format date from database
	const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});

	//format address from database
	const formattedAddress = location.replace(', ', '\n');

	const exploreLink = `/events/${id}`;

	return (
		<li>
			<img src={'/' + image} alt={title} />
			<div className='container'>
				<div className='Top'>
					<h2>{title}</h2>
					<div className='date'>
						<time>{humanReadableDate}</time>
					</div>
					<div className='address'>
						<address>{formattedAddress}</address>
					</div>
				</div>
				<div className='bottom'>
					<Link href={exploreLink}>Expolore Event</Link>
				</div>
			</div>
		</li>
	);
}

export default EventItem;
