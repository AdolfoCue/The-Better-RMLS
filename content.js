console.log("It works here!");

let litWords = document.getElementsByName(['Addr:'], ['listing price'], 'property taxes', 'Sqft', 'squarefeet', 'total SQFT', 'school', 'neighborhood', 'beds', 'baths', 'year built', 'DOM', 'Days on market', 'Parking', 'sewer', 'heat', 'cool')
for (elt of litWords){
    elt.style['background-color'] = '#FFFF00';
} 