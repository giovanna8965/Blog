const longParagraphs = document.querySelectorAll('.long-paragraph');

longParagraphs.forEach(paragraph => {
  
  const readMoreButton = document.createElement('button');
  readMoreButton.textContent = 'Ler mais';

  readMoreButton.classList.add('read-more-btn');

  
  const paragraphContent = paragraph.textContent;
  paragraph.textContent = paragraphContent.substring(0, 100) + '...';

  readMoreButton.addEventListener('click', () => {
    paragraph.textContent = paragraphContent;
    readMoreButton.remove(); 
  });

  paragraph.appendChild(readMoreButton);
});