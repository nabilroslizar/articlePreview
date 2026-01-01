const shareButton = document.querySelector('.share-button');
const shareContainer = document.querySelector('.share');

const handleShareClick = () => {
   shareContainer.classList.toggle('active');
};

shareButton.addEventListener('click', handleShareClick);

document.addEventListener('click', (event) => {
   if (!shareContainer.contains(event.target)) {
      shareContainer.classList.remove('active');
   }
});