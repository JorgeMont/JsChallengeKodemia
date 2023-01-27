const sortComments = () => {
    const spanSort = document.getElementById("sort-comments")

    const sortSelection = document.getElementById("sort-comments-selector")
    const value = sortSelection.value;
    const text = sortSelection.options[e.selectedIndex].text;
    spanSort.innerHTML = text;
}

window.addEventListener("load", sortComments)