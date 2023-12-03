const form = document.querySelector('form')
form.addEventListener('submit', async (e) => {
  e.preventDefault()
  const formData = new FormData(e.target)
  const json = JSON.stringify(Object.fromEntries(formData));
  console.log(json);
  const response = await fetch('http://localhost:8080/our-wedding/data',{
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: json})
  const res = await response;
  const status = res.status;
  const result = res.json();
});
