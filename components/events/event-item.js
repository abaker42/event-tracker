import Link from 'next/link';
import React from 'react';
import Button from '../ui/button';
import classes from './event-item.module.css';
import DateIcon from '../icon/date-icon';
import AddressIcon from '../icon/address-icon';
import ArrowRightIcon from '../icon/arrow-right-icon';

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
		<li className={classes.event}>
			<img src={'/' + image} alt={title} />
			<div className={classes.content}>
				<div className={classes.summary}>
					<h2>{title}</h2>
					<div className={classes.date}>
						<DateIcon />
						<time>{humanReadableDate}</time>
					</div>
					<div className={classes.address}>
						<AddressIcon />
						<address>{formattedAddress}</address>
					</div>
				</div>
				<div className={classes.actions}>
					{/*Turn LINK into a button
           <Link href={exploreLink}>Expolore Event</Link> */}
					<Button link={exploreLink}>
						<span>Explore Event</span>
						<span className={classes.icon}>
							<ArrowRightIcon />
						</span>
					</Button>
				</div>
			</div>
		</li>
	);
}

export default EventItem;
