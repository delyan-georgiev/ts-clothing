import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import { useState } from 'react';
import './directory.styles.scss';

export interface Section {
	title: string,
	imageUrl: string,
	id: number,
	size?: string,
	linkUrl: string
}

const Directory = (): JSX.Element => {
	const sections: Section[] = [
		{
			title: 'hats',
			imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
			id: 1,
			linkUrl: 'shop/hats'
		},
		{
			title: 'jackets',
			imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
			id: 2,
			linkUrl: 'shop/jackets'
		},
		{
			title: 'sneakers',
			imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
			id: 3,
			linkUrl: 'shop/sneakers'
		},
		{
			title: 'womens',
			imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
			size: 'large',
			id: 4,
			linkUrl: 'shop/womens'
		},
		{
			title: 'mens',
			imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
			size: 'large',
			id: 5,
			linkUrl: 'shop/mens'
		}
	]

	const [sectionsState] = useState(sections);

	return (
		<div className='directory-menu'>
			{
				sectionsState.map((menuItem) => (
					<MenuItem key={ menuItem.id } { ...menuItem } />
				))
			}
		</div>
	)
}

export default Directory;
