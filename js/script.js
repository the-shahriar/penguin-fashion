document.getElementById('buy-now').addEventListener('click', function(){
   const newText = 'I AM PENGUIN';
   const previousText = document.getElementById('header-text');
   previousText.innerText = newText;

})