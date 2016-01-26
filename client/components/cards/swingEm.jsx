swingEm = function() {
  // Prepare the cards in the stack for iteration.
  cards = [].slice.call(document.querySelectorAll('.stack li'))

  // An instance of the Stack is used to attach event listeners.
  stack = gajus.Swing.Stack();

  cards.forEach(function (targetElement) {
      // Add card element to the Stack.
      stack.createCard(targetElement);
  });

  // Add event listener for when a card is thrown out of the stack.
  stack.on('throwout', function (e) {
      // e.target Reference to the element that has been thrown out of the stack.
      // e.throwDirection Direction in which the element has been thrown (Card.DIRECTION_LEFT, Card.DIRECTION_RIGHT).
      $(e.target).css('opacity', '0');
      setTimeout(function() {
        $(e.target).remove();
      }, 200);
  });

  // Add event listener for when a card is thrown in the stack, including the spring back into place effect.
  stack.on('throwin', function (e) {

  });
};