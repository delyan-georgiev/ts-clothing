import React from 'react';

import './collection-item.styles.scss';
import { ShopItem } from '../../pages/shop/shop.data';

const CollectionItem = ({name, imageUrl, price}: ShopItem) => (
	<div className='collection-item'>
		<div
			className='image'
			style={ {
				backgroundImage: `url(${ imageUrl })`} }/>

			<div className='collection-footer'>
				<span className='name'>{ name }</span>
				<span className='price'>{ price }</span>
			</div>
	</div>
)

export default CollectionItem;
