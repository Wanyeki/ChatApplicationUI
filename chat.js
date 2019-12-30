var button=document.querySelector('.back-btn');
var right=document.querySelector('.right_message');
var left=document.querySelector('.left_contact');
chat_person=document.querySelectorAll('.chat_person');
messages=document.querySelector('.messages');
chat_person.forEach(person => {
    person.addEventListener('click',function(){
        select_chat(this);
    })
    
});
document.querySelector('#send').addEventListener('click',function(){
    console.log('hello');
    send_text();
});

button.addEventListener('click',function(){
    left.style.zIndex='5';
    right.style.zIndex='1';
});


function select_chat(person){
    
    left.style.zIndex='1';
    right.style.zIndex='5';
    badge=person.querySelector('.badge');
    badge.style.display='none';
    preselected=document.querySelector('.selected');
    preselected.classList.toggle('selected')
    person.classList.toggle('selected');
   person.classList.add('swing');

   img_path=person.querySelector('img').getAttribute('src');
   avatar=document.getElementById('right_avatar');
   avatar.setAttribute('src',img_path);
   document.querySelector('.right_name').textContent=person.querySelector('.nm').textContent;
   
   
}

function send_text(){
    prelast=document.querySelector('#last');
    prelast.removeAttribute('id');

msg=document.createTextNode (document.querySelector('.msg').value);

odiv=document.createElement('div');
div1=document.createElement('div');
div2=document.createElement('div');
div2a=document.createElement('div');
div2b=document.createElement('div');

odiv.classList.add('sent-align','animated','pulse');
odiv.setAttribute('id','last');

div1.classList.add('msg-status');
div2.classList.add('message','sent');
div2a.classList.add('sent-msg-body');
div2b.classList.add('pointer');

div2a.appendChild(msg);
div2.appendChild(div2a)
div2.appendChild(div2b);
odiv.appendChild(div1)
odiv.appendChild(div2);

document.querySelector('.msg').value='';

messages.appendChild(odiv);
}
