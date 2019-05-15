import React, {Fragment} from 'react'
import AddButton from "./AddButton";
import Item from "./Item";

function List({ items, addItem }) {
	return (
		<ul>
			{items.map((item, index) => (
				<Fragment key={index}>
					<Item item={item} />

					{index === items.length - 1 && (
						<AddButton addItem={addItem} id={item.id} />
					)}
				</Fragment>
			))}
		</ul>
	);
}

export default List
