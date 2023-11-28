document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('myModal');
  
    // Função para abrir o modal com base no nome do card
    window.openModal = function(cardName) {
      modal.style.display = 'block';
      document.getElementById('modalContent').innerText = 'Conteúdo do Modal para ' + cardName + ' aqui.';
    };
  
    // Função para fechar o modal
    window.closeModal = function() {
      modal.style.display = 'none';
    };
  
    // Fechar o modal se clicar fora da área do conteúdo
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        closeModal();
      }
    });
  });
  