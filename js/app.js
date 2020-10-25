"use strict"

var contentArray=["Eating certain foods, especially those rich in vitamin K, can diminish warfarin’s effectiveness. The highest concentrations of vitamin K are found in green leafy vegetables such as kale, collards, spinach, turnip greens, Brussels sprouts, broccoli, scallions, asparagus, and endive.",
"An alcoholic drink can increase or prolong the effects of insulin or oral diabetic agents (pills) and thus lead to hypoglycemia or low blood sugar. The glucose-lowering action of alcohol can last as long as eight to 12 hours. Symptoms of hypoglycemia include nervousness, sweating, trembling, intense hunger, weakness, palpitations, confusion, drowsiness, and ultimately coma.",
"Digoxin (Digitalis, Digitek, Lanoxin) is used to strengthen the contraction of the heart muscle, slow the heart rate, and promote the elimination of fluid from body tissues.",
"Dietary fiber, specifically insoluble fiber such as wheat bran, can slow down the absorption of digoxin and lessen its effectiveness. To prevent this, elders should take digoxin at least one hour before or two hours after eating a meal.",
"Statins are highly effective cholesterol-lowering drugs. Unfortunately, says Zive, “Drinking grapefruit juice or eating fresh grapefruit can increase the amount of some statins in your blood and lead to potentially greater side effects of these drugs.”",
"Dairy products such as milk, yogurt, and cheese can delay or prevent the absorption of antibiotics such as tetracyclines and ciprofloxacin (Cipro). This occurs because the calcium in such foods binds to the antibiotics in the stomach and upper small intestine to form an insoluble compound.To avoid problems, Zive recommends taking an antibiotic one hour before or two hours after a meal.",
"Antithyroid drugs work by preventing iodine absorption in the stomach. A high-iodine diet requires higher doses of antithyroid drugs. The higher the dose of antithyroid drugs, the greater the incidence of side effects that include rashes, hives, and liver disease.The richest dietary sources of iodine are seafood and seaweed, such as kelp and nori. Iodine is also found in iodized salt and to a lesser extent in eggs, meat, and dairy products."];

// function submitMydrug(){
//     for (var i=0;i<contentArray.length;i++){

//         var x = document.getElementById('dropdown-menu').contentArray[i].text;
//         document.getElementById('textArea').innerHTML= x ;
//     }

//     console.log(x);
// }
var idArray = ["O1","O2","O3","O4","O5","O6","O7"];
var result =document.getElementById('textArea');

// document.getElementById('dropdown-menu').addEventListener('click',function(event){
//     var id =event.target.id;
//     console.log('clicked1');
//     if (id !=="dropdown-menu") {
//         console.log('clicked2');
//         for (var i=0;i<idArray.length;i++) {
//             if (id === idArray[i]){
//              result.textContent= contentArray[i];
//             console.log('clicked');
//             }
//         }

//     }
// });
document.getElementById('dropdown-menu').addEventListener('click',function(event){
    var id =event.target.id;
    console.log('clicked1');
    if (id !=="dropdown-menu") {
        console.log('clicked2');
        for (var i=0;i<idArray.length;i++) {
            if (id === idArray[i]){
             result.textContent= contentArray[i];
            console.log('clicked');
            }
        }

    }
});


// var value1=document.getElementById('O1').text;
// if (text= "Warfarin") {
//     document.getElementById('textArea').innerHTML="bla bla bla ";
// }if (text= "Insulin") {
//     document.getElementById('textArea').innerHTML=" tr trtrtr ";
// }
// console.log(value1);