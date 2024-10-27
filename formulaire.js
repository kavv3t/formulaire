document.getElementById("contactForm").addEventListener("submit", async function(event) {
  event.preventDefault;

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  try {
    const response = await fetch("/webhook-endpoint", {
      method: "POST",
      headers: {
        "Content type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert("Formulaire envoyé avec succès !");
    } else {
      alert("Erreur lors de l'envoi du formulaire");
    }
  } catch (error) {
    alert("Une erreur est survenue : " + error.message);
  }
});