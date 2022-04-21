const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('keyup', (e) => {
  let searchQuery = e.target.value.toLowerCase();
  let allNamesDOMCollection = document.getElementsByClassName('name');

  for (let counter = 0; counter < allNamesDOMCollection.length; counter++) {
    const currentName = allNamesDOMCollection[counter].textContent.toLowerCase();

    // console.log(currentName);
    // 1. Create a conditional that checks if currentName is equal to the user's search query!
    if (currentName.includes(searchQuery)) {
      // 2. If our conditional returns true, set the display style on 'allNamesDOMCollection[counter]' to be a block element
      // - The includes() method determines whether one string may be found within another string, returning true or false as
      allNamesDOMCollection[counter].style.display = 'block';
    } else {
      // 3. If our conditional falls into the else, we have no match! So set the display style to 'none'
      allNamesDOMCollection[counter].style.display = 'none';
    }
  }
});
