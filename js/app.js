document.addEventListener("DOMContentLoaded", function() {
    
function encrypt(){
    let passhash=CryptoJS.SHA256(document.getElementById("account").value);
    let out=document.getElementById("hashedNumber");
    let cpy=document.getElementById("output");
    out.innerText="";
    out.innerText= passhash;
};
function CopyToClipboard(){
let inp =document.createElement('input');
document.body.appendChild(inp);
inp.value =document.getElementById('output').textContent.replace(/\s/g,'');
inp.select();
document.execCommand('copy',false);
inp.remove();
}
var e = document.getElementById('account');
e.oninput = encrypt;

tippy('[title]');
tippy('#tips', { target: '.btn-class-copy' });

});
