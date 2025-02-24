const alertBox = document.getElementById('alert');
const copyButtons = document.getElementsByClassName('copy');
Array.from(copyButtons).forEach(button => {
  button.addEventListener('click', function() {
    alertBox.innerHTML = `
      <div class="alert alert-light alert-dismissible fade show" role="alert">
        <strong>Copiado!</strong> Dados copiados para área de transferência!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
    setTimeout(() => {
      alertBox.innerHTML = '';
    }, 3000);
  });
});

