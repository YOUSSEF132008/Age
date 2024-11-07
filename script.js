document.getElementById('date-picker-button').addEventListener('click', function() {
  document.getElementById('age-form').classList.remove('hidden');
  document.getElementById('date-picker').classList.remove('hidden');
  document.getElementById('manual-entry').classList.add('hidden');
});

document.getElementById('manual-entry-button').addEventListener('click', function() {
  document.getElementById('age-form').classList.remove('hidden');
  document.getElementById('manual-entry').classList.remove('hidden');
  document.getElementById('date-picker').classList.add('hidden');
});

document.getElementById('age-form').addEventListener('submit', function(event) {
  event.preventDefault();
  calculateAge();
});

function calculateAge() {
  let birthdate;
  if (!document.getElementById('date-picker').classList.contains('hidden')) {
    birthdate = new Date(document.getElementById('birthdate').value);
  } else {
    const birthdateManual = document.getElementById('birthdate-manual').value;
    const [year, month, day] = birthdateManual.split('/');
    birthdate = new Date(year, month - 1, day);
  }

  if (isNaN(birthdate)) {
    document.getElementById('result').innerHTML = "Please enter a valid date in the format YYYY/MM/DD.";
    return;
  }

  const today = new Date();
  let age = today.getFullYear() - birthdate.getFullYear();
  const monthDiff = today.getMonth() - birthdate.getMonth();
  const dayDiff = today.getDate() - birthdate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  document.getElementById('result').innerHTML = `You are <span>${age}</span> years old.`;
}

const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.getElementById('theme-icon');
themeToggle.addEventListener('click', () => {
  if (document.body.classList.contains('dark-mode')) {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('dark-mode-alternate');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  } else if (document.body.classList.contains('dark-mode-alternate')) {
    document.body.classList.remove('dark-mode-alternate');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  } else {
    document.body.classList.add('dark-mode');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  }
});