const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formDataJSON = JSON.stringify(Object.fromEntries(formData));
  const url = "https://lottimartin.cyclic.app/api/guest";
  try {
    const response = await fetch(url, {
      method: "POST",
      cache: "no-cache",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Host: "https://lottimartin.cyclic.app:5000",
      },
      body: formDataJSON,
    });
    let data = await response.json();
    let responseText = `<p>
      Válasz sikeresen beküldve:
    </p>
    <p>
      Név: ${data.message.name}
    </p>
    <p>
      Email: ${data.message.email}
    </p>`;
    if (data.message.vname) {
      responseText += `<p>
      Kísérő: ${data.message.vname}
    </p>`;
    }
    if (data.message.vemail) {
      responseText += `<p>
      Kísérő email: ${data.message.vemail}
    </p>`;
    }
    document.getElementById("response").innerHTML = responseText;
  } catch (error) {
    console.error("Error:", error);
  }
  form.reset();
});
