import React from 'react'

function AddButton({ addItem, index }) {
	return <button onClick={() => addItem(index)}>➕</button>;
}

export default AddButton
