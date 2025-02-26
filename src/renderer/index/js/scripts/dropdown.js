import "../../../../assets/bootstrap/bootstrap.bundle.min.js";

document.querySelectorAll('#country-dropdown .dropdown-item').forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      var value = this.getAttribute('data-value');
      document.getElementById('dropdownMenuButton').textContent = this.textContent;
      document.getElementById('selectedCountry').value = value;
    });
  });
  