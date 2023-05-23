import Link from 'next/link';
import React from 'react';
import classes from './button.module.css';

const button = (props) => {
	// This button component renders an normal button if the
	// props link isn't set and a link if it is set

	if (!props.link) {
		return <button onClick={props.onClick}>{props.children}</button>;
	}

	return (
		<Link href={props.link} className={classes.btn}>
			{props.children}
		</Link>
	);
};

export default button;
