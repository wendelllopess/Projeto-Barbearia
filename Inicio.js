  const cards = document.querySelectorAll('.card');
  const modal = document.getElementById('modal');
  const closeModalButton = document.getElementById('BotaoFecharModal');

  cards.forEach(card => {
      card.addEventListener('click', ()=> {
          modal.style.display = 'block';
      });
  });

  closeModalButton.addEventListener('click', ()=> {
      modal.style.display = 'none';
  });

 

