  const cards = document.querySelectorAll('.card');
  const modal = document.getElementById('modal');
  const BotaoFecharModal = document.getElementById('BotaoFecharModal');

  cards.forEach(card => {
      card.addEventListener('click', ()=> {
          modal.style.display = 'block';
      });
  });

  BotaoFecharModal.addEventListener('click', ()=> {
      modal.style.display = 'none';
  });

 

