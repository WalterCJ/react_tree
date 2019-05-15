import React, {useState} from 'react'
import List from './List'

function Item({ item, addItem }) {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<li>
			{item.name}

			{item.children && (
				<button onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? '👆' : '👇'}
				</button>
			)}

			{item.children && isOpen && (
				<List items={item.children} addItem={addItem} />
			)}
		</li>
	);
}

export default Item
