let presidentArray = [];

let president1 = {
	name: "Theodore Roosevelt",
	bio: "Theodore Roosevelt Jr. was an American statesman, author, explorer, soldier, naturalist, and reformer who served as the 26th President of the United States from 1901 to 1909.",
	img: "img/roosevelt.jpg",
	from: "From: 1901",
	to: "To: 1909"
};
let president2 = {
	name: "Andrew Jackson",
	bio: "Andrew Jackson was an American soldier and statesman who served as the seventh President of the United States from 1829 to 1837. He is burried at his plantation in Hermitage, TN.",
	img: "img/jackson.jpg",
	from: "From: 1829",
	to: "To: 1837"
};
let president3 = {
	name: "Ulysses S. Grant",
	bio: "Ulysses S. Grant, born Hiram Ulysses Grant, was the 18th President of the United States. Grant worked closely with President Abraham Lincoln to lead the Union Army to victory over the Confederacy in the American Civil War.",
	img: "img/grant.jpg",
	from: "From: 1869",
	to: "To: 1877" 
};

console.log(presidentArray)

presidentArray.push(president1);
presidentArray.push(president2);
presidentArray.push(president3);

let presidentContainer = document.getElementById("presidentContainer");
let textInput = document.getElementById("textInput");

function buildPresidentPage(president) {
	let presidentCard = "";
	presidentCard +=  '<section class="president">';
  	presidentCard +=      '<div class="name">';
    presidentCard +=         '<h2>' + president.name + '</h2>';
  	presidentCard +=      '</div>';
  	presidentCard +=      '<div class="bio">';
  	presidentCard +=          '<p>' + president.bio + '</p>';
  	presidentCard +=	  '<div class="term">';
  	presidentCard +=          '<h6>' + president.from + '</h6>';
  	presidentCard +=		  '<h6>' + president.to + '</h6>';	
  	presidentCard +=      '</div>';
  	presidentCard +=	  '<div>';
  	presidentCard +=          '<img src="' + president.img + '">';
  	presidentCard +=      '</div>'
  	presidentCard +=  '</section>';

  	return presidentCard;
};

function printPresidentArrayToDom(presidentArray) {
 	for (var i = 0; i < presidentArray.length; i++ ) {
 		let currentPresident = presidentArray[i];
 		let presidentDomString = buildPresidentPage(currentPresident);
 		presidentContainer.innerHTML += presidentDomString;
	};
};

printPresidentArrayToDom(presidentArray);

let presidentCardContainer = document.getElementById('presidentCardContainer');
let selectedPresident;

//When you click on one of the person elements, a dotted border should appear around it.
for (let i = 0; i < presidentContainer.childNodes.length; i++) {
  presidentContainer.childNodes[i].addEventListener("click", function(e) {
    changeBorder(e);
    replaceBio();
  });
};

function changeBorder(e) {
 if (e.target.classList.contains('president')) {
    selectedPresident = e.target;
  } else if (e.target.parentNode.classList.contains('president')) {
    selectedPresident = e.target.parentNode;
  } else if (e.target.parentNode.parentNode.classList.contains('president')) {
    selectedPresident = e.target.parentNode.parentNode;
  } else if (e.target.parentNode.parentNode.parentNode.classList.contains('president')) {
    selectedPresident = e.target.parentNode.parentNode.parentNode; 
  };
  console.log("selectedPresident", selectedPresident);
  selectedPresident.classList.add('dottedBorder'); 
};

// When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.
function replaceBio() {
	textInput.focus();
	textInput.addEventListener('keyup', function(e) { 
		if (e.key === 'Enter') {
  		textInput.value = '';
		} else {
		var currentBio = selectedPresident.childNodes[1].childNodes[0]; 
    console.log("currentBio", currentBio);
    currentBio.innerHTML = textInput.value;
		};
	});
};







