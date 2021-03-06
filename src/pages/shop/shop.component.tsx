import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import SHOP_DATA from './shop.data';


const ShopPage = () => {
	const [collections] = React.useState(SHOP_DATA);

	return (
		<div className="shop-page">
			{
				collections.map((collection) => (
					<CollectionPreview key={collection.id} {...collection}/>
				))
			}
		</div>
	);
}
export default ShopPage;
