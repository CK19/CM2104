$(document).ready(function(){
	$('#addcontent').click(function(){
		addContent()
	});
	// 'main' function called when page is loaded and ready

	// complete the following using jQuery

	// 1. find the addcontent button in task-two.html
	// 2. add an event listener for 'click' events
	// 3. assign the addContent() function to the click event
});

function addContent () {
	// add a list of items to the content div
	var items = ["hewey", "dewey", "louie"];

	// build the html string for a <ul> list
	var items_html = "<ul>";
	for (var i=0; i < items.length; i++) {
		itemType = document.createElement("p");
		itemText = document.createTextNode(items[i]);
		itemType.appendChild(itemText);
		document.getElementById('content').appendChild(itemType);
	};
	items_html += "</ul>";

	$(document).ready(function(){
		$('content').append(items_html)
	});
	// using jQuery
	// 1. find the content div
	// 2. modify its html attribute by adding items_html

}
