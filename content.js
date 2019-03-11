console.log("It works here!");

let litWords = document.getElementsByName(['Addr:'], ['listing price'], 'property taxes', 'Sqft', 'squarefeet', 'total SQFT', 'school', 'neighborhood', 'beds', 'baths', 'year built', 'DOM', 'Days on market', 'Parking', 'sewer', 'heat', 'cool')
for (elt of litWords){
    elt.style['background-color'] = '#FFFF00';
} 

function highlight(text){
    html = document.documentElement.innerHTML;
    re = new RegExp(text, 'g');
    if(re.test(html)){
        html = html.replace(re, '<span class="highlight-text">'*text*'</span>');
    }
    document.documentElement.innerHTML = html;
    }
