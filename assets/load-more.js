document.addEventListener('DOMContentLoaded', function() {
    const loadMoreBtn = document.getElementById('load-more-btn');
  
    loadMoreBtn.addEventListener('click', function() {
      const hiddenCards = document.querySelectorAll('.card.hidden');
      let cardsToShow = 6; 
    
      
  
      if (window.innerWidth < 768) {
        
        cardsToShow = 1;
      }
  
      for (let i = 0; i < cardsToShow; i++) {
        if (hiddenCards[i]) {
          hiddenCards[i].classList.remove('hidden');
        }
      }
    
    
      if (document.querySelectorAll('.card.hidden').length === 0) {
        loadMoreBtn.style.display = 'none';
      }
    });
    });