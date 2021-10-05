import React from 'react';

import './collection-preview.styles.scss';
import { ShopData} from '../../pages/shop/shop.data';


const CollectionPreview = (shopData: ShopData): JSX.Element => (
	<div className='collection-preview'>
		<h1 className='title'>{shopData.title.toUpperCase()}</h1>
		<div className='preview'>
			{
				shopData.items
				.filter((item, index) => index < 4)
				.map(item => (
					<div key={item.id}>{item.name}</div>
				))
			}
		</div>
	</div>
)
export default CollectionPreview
