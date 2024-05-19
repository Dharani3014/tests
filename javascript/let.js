//!blocked scope: it can't access outside the particular block.
//*exercise1
// let color1="black";
// function coloured()
// {
//     let color2="violet";
//     console.log(color2);
//     console.log(color2);
// } 
// coloured();

//*exercise2
let color1="black";
 function coloured()
{
     let color2="violet";
     console.log(color1);
     console.log(color2);
 } 
 console.log(color1);
 //console.log(color2);
 //console.log(color1);
 coloured();