import React from 'react';
import PropTypes from 'prop-types'

// For sorting and filtering, you should uncomment and apply the desired methods to `itemList`

function List(props) {
  // Assuming `props.category` is the correct spelling
  const category = props.category;
  const itemList = props.items;

  // Sorting and filtering logic (uncomment the desired one)
  // itemList.sort((a,b) =>a.name.localeCompare(b.name)); // ALPHABETICAL
  // itemList.sort((a,b) =>b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL
  // itemList.sort((a,b) =>a.calories-b.calories); // NUMERIC
  // itemList.sort((a,b)=> b.calories-a.calories); // REVERSE NUMERIC

  // const lowCalFruits = itemList.filter(fruit => fruit.calories < 100);
  // const highCalFruits = itemList.filter(fruit => fruit.calories > 100);

  const listItems = itemList.map(item => (
    <li key={item.id}>
      {item.name}: &nbsp;
      <b>{item.calories}</b>
    </li>
  ));

  return (
    <div>
      <h3 className='list-category'>{category}</h3>
      <ol className='list-items'>{listItems}</ol>
    </div>
  );
}

List.proptype = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number, name: PropTypes.string, calories: PropTypes.number
    })),
}
List.defaultProps = {
    category: "category",
    items: [],
}

export default List;
