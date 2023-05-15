const navButtons = document.querySelectorAll('button[data-target]');
const contents = document.querySelectorAll('div[data-target]');

navButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    navButtons.forEach((btn) => {
      btn.style.color = 'gray';
    });

    btn.style.color = 'rgb(255, 132, 0)';

    contents.forEach((block, ind) => {
      block.style.display =
        btn.dataset.target === block.dataset.target ? 'flex' : 'none';
    });
  });
});

navButtons[0].style.color = 'rgb(255, 132, 0)';
navButtons[1].style.color = 'gray';
contents[1].style.display = 'none';
