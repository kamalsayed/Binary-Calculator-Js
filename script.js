'use strict';
const result = document.getElementById('res');
const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const clr = document.getElementById('btnClr');
const eql = document.getElementById('btnEql');
const add = document.getElementById('btnSum');
const sub = document.getElementById('btnSub');
const mul = document.getElementById('btnMul');
const div = document.getElementById('btnDiv');

let resText ='';
let leftHand = '';
let rightHand ='';
let op ='';



btn0.addEventListener('click', function(){
    if(op.length===0){
        leftHand+=btn0.textContent;
        resText+=btn0.textContent;
    }else{
        rightHand+=btn0.textContent;
        resText+=btn0.textContent;
    }
    result.textContent += btn0.textContent;
    console.log(`left : ${leftHand} right : ${rightHand} , full : ${resText}`);
});
btn1.addEventListener('click', function(){
    if(op.length===0){
        leftHand+=btn1.textContent;
        resText+=btn1.textContent;
    }else{
        rightHand+=btn1.textContent;
        resText+=btn1.textContent;
    }
 result.textContent += btn1.textContent;
 console.log(`left : ${leftHand} right : ${rightHand} , full : ${resText}`);
});
clr.addEventListener('click' , function(){
    result.textContent ='';
    leftHand='';
    rightHand='';
    resText='';
    op='';
});

add.addEventListener('click',function(){
    
    op ='+';
    resText+=op;
    result.textContent += op;
    
});
sub.addEventListener('click',function(){
    
    op ='-';
    resText+=op;
    result.textContent += op;
    
});

mul.addEventListener('click',function(){
    // if(!(op.length>0)){
    op ='*';
    resText+=op;
    result.textContent += op;
    
});

div.addEventListener('click',function(){
    
    op ='/';
    resText+=op;
    result.textContent += op;
    
});

eql.addEventListener('click' ,function(){
    //check for left hand & right hand & op
    if(!(leftHand.length===0 || rightHand.length ===0 || op.length ===0) && !(op.length>1) ){
    //transfer from Hs , Ls from string to binary to get result
    let ls = parseInt(leftHand ,2);
    let rs = parseInt(rightHand ,2);
    console.log(`Left Hand = ${ls} , right hand = ${rs}`);
    switch(op){
        case '+' :
            result.textContent = ((ls+rs).toString(2));
            break;
        case '-' :
            result.textContent = ((ls-rs).toString(2));
            break;
        case '*' :
            result.textContent = ((ls*rs).toString(2));
            break;
        case '/' :
            ls = parseInt(leftHand);
            rs = parseInt(rightHand);
            result.textContent =((Math.trunc(ls/rs)).toString());
            break;
        default:
            break;
            
    }
    leftHand=result.textContent;
    rightHand='';
    op='';
    resText=leftHand;
    return;
    }
    // else if(leftHand.length>0 && rightHand.length ===0){
    //     result.textContent =leftHand;
    //     op='';
    //     resText=leftHand;
    // }else{
    //     result.textContent =rightHand;
    //     leftHand=rightHand;
    //     rightHand='';
    //     op='';
    //     resText=leftHand;
    // }
    //division -> get answer and trunk it

    });