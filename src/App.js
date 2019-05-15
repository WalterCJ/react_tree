import React, { useState } from 'react';
import List from "./components/List";
import AddButton from "./components/AddButton";
import './App.css';

function App() {
	const [items, setItems] = useState([
		{ id: 1, name: 'My First Item' },
		{ id: 2, name: 'My Second Item' },
		{
			id: 3,
			name: 'My Third Item',
			children: [
				{ name: 'Nested Thing Here', children: [{ name: 'Nested Thing Here' }] }
			]
		}
	]);

	// 2. add a top level item
	function addTopLevelItem() {
		const newItems = [...items];
		newItems.push({ name: 'new stuff' });
		setItems(newItems);
	}

	// 3. add a nested item
	function addNestedItem(index) {
		const newItems = [...items];

		if (newItems[index].children) {
			newItems[index].children.push({ name: 'new stuff' });
		} else {
			newItems[index].children = [{ name: 'new stuff' }];
			newItems[index].isOpen = true;
		}

		setItems(newItems);
	}

	return (
		<div className="App">
			<h1>Hello Tree</h1>
			<List items={items} addItem={addNestedItem} />
			<AddButton addItem={addTopLevelItem} />
		</div>
	);
}

export default App;
