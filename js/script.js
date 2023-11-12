// Логика спойлеров
const table = document.getElementById('myTable');

table.addEventListener('click', function() {
  this.classList.toggle('collapsed');
});