const hidden = document.getElementById('hidden');
const show = document.getElementById('show');
const divmsg = document.getElementById("Message");
divGen = document.getElementById('back');


hidden.addEventListener('click', function() {
    divmsg.style.display = 'none';
    hidden.style.display = 'none';
    show.style.display = 'flex';
});

show.addEventListener('click', function() {
    divmsg.style.display = 'block';
    hidden.style.display = 'flex';
    show.style.display = 'none';
});