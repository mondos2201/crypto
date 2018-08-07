function encrypt(){
    let passhash=CryptoJS.SHA256(document.getElementById('account').value);
    let out=document.getElementById('hashedNumber');
    let cpy=document.getElementById('output');
    out.innerText="";
    out.innerText= passhash;
    document.getElementById('results').classList.toggle('animated','fadeIn');
    document.getElementById('results').style.display='block';
};
function CopyToClipboard(){
let source=document.getElementById('hashedNumber');
let msg=document.getElementById('messages');
let inp =document.createElement('input');
document.body.appendChild(inp);
inp.value =source.textContent.replace(/\s/g,'');
inp.select();
document.execCommand('copy',false);
inp.remove();
M.toast({html:'Key copied successfully!'});

fetch('http://api.icndb.com/jokes/random?limitTo=[nerdy]')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });
}


var e = document.getElementById('account');
e.oninput = encrypt;
tippy('[title]');
