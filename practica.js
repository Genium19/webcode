
function inicializar() {
    var itemSelectors = [".card1", ".card2", ".card3", ".card4", ".card5", ".card6"];
  
    itemSelectors.forEach(function(selector) {
      var items = document.querySelectorAll(selector);
  
      items.forEach(function(item) {
        item.addEventListener("mouseover", function() {
          var correspondingSelector = getCorrespondingSelector(selector);
          mostrarItem(correspondingSelector);
        });
  
        item.addEventListener("mouseout", function() {
          var correspondingSelector = getCorrespondingSelector(selector);
          ocultarItem(correspondingSelector);
        });
      });
    });
  }
  
  function mostrarItem(selector) {
    var items = document.querySelectorAll(selector);
  
    items.forEach(function(item) {
      item.classList.add("mostrar");
    });
  }
  
  function ocultarItem(selector) {
    var items = document.querySelectorAll(selector);
  
    items.forEach(function(item) {
      item.classList.remove("mostrar");
    });
  }
  
  function getCorrespondingSelector(selector) {
    var correspondingSelectors = {
      ".card1": ".item1",
      ".card2": ".item2",
      ".card3": ".item3",
      ".card4": ".item4",
      ".card5": ".item5",
      ".card6": ".item6"
    };
  
    return correspondingSelectors[selector];
  }
  
  window.onload = inicializar;
  
