/*
*project Requirements
*Change the background color by Generating random rbg color by clicking a button

*/



//  step 1 - create onload handler 
window.onload = ()=> {
    main()
}


function main(){
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn');
    const outBox = document.getElementById('outBox');

    btn.addEventListener('click', function(){
        console.log('click');
        const bgColor = colorHexGenerator();
        console.log(bgColor);
        root.style.backgroundColor = bgColor;
        outBox.value = bgColor
    })

  

}


// step 2 - random generator function 

function colorHexGenerator (){
 
    const red=Math.floor(Math.random()*255);
    
    const green=Math.floor(Math.random()*255);
    const blue=Math.floor(Math.random()*255);


    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}



// step 3 - collect all necessary references 



//step 4 handle the click event


