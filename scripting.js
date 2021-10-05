var lowercase = "abcdefghijklmnopqrstuvwxyz",
uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
numbers = "0123456789",
punctuation = "!@#$%^&*()_+~`|}{[]:;?><,./-=",
lowercaseInput = document.getElementById("lowercase"),
uppercaseInput = document.getElementById("uppercase"),
punctuationInput = document.getElementById("punctuationn"),
numbersInput = document.getElementById("numbers"),
lengthInput = document.getElementById("length"),
passwordFeild = document.getElementById("pass-field"),
generateButton = document.getElementById("generate"),
plength,
userPassword,
slength,
specialchar,
passwordCharSet;
function select(max){
return Math.floor(Math.random()*max)
}
function generate() {
var temp,x;
temp=punctuation;
slength= Number(punctuationInput.value);
specialchar="";
for(let j=0;j<slength;j++){
x=select(temp.length)
specialchar+=temp[x]
temp= temp.slice(0,x-1)+temp.slice(x,temp.length)
}
userPassword = "";
passwordCharSet = "";
if (lowercaseInput.checked) {
passwordCharSet += lowercase;
}
if (uppercaseInput.checked) {
passwordCharSet += uppercase;
}
if (numbersInput.checked) {
passwordCharSet += numbers;
}
plength = Number(lengthInput.value);
for (let i = 0; i < plength-slength; i++) {
userPassword += passwordCharSet.charAt(
Math.floor(Math.random() * passwordCharSet.length)
);
}
var final =""
var a=0,b=0
for(let i=0;i<plength;i++){
if(a==plength-slength){
final+=specialchar.slice(b,slength)
break
}
else if(b==slength){
final+=userPassword.slice(a,plength-slength)
break
}
else{
var r=select(2)
if(r==0){
final+=userPassword[a]
a++
}
else{
final+=specialchar[b]
b++
}
}
}
console.log(plength);
console.log(slength)
console.log(final)
console.log(specialchar)
console.log(userPassword)
if (final == "") {
let alertbox = document.getElementById('alert');
alertbox.innerHTML = "Please select an option before generating"
alertbox.classList.add('fail');
setTimeout(function(){
alertbox.classList.remove('fail');
}, 3000);
} else {
passwordFeild.innerHTML = final;
}
}
generateButton.addEventListener("click", generate);
clipboard.on('success', function(e) {
console.info('Action:', e.action);
console.info('Text:', e.text);
console.info('Trigger:', e.trigger);
let alertbox = document.getElementById('alert');
alertbox.innerHTML = "Copied!"
alertbox.classList.add('success');
setTimeout(function(){
alertbox.classList.remove('success');
}, 3000);
e.clearSelection();
});
clipboard.on('error', function(e) {
console.error('Action:', e.action);
console.error('Trigger:', e.trigger);
let alertbox = document.getElementById('alert');
alertbox.innerHTML = "Try select the text to copy"
alertbox.classList.add('fail');
setTimeout(function(){
alertbox.classList.remove('fail');
}, 3000);
});
