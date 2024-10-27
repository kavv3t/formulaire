async function handleSubmit(event) {
  event.preventDefault();

  const form = document.getElementById("contactForm");
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert("Votre message a été envoyé avec succès !");
    } else {
      alert("Erreur lors de l'envoi du formulaire. Veuillez réessayer.");
    }
  } catch (error) {
    alert("Une erreur est survenue : ", + error.message);
  }
}

document.getElementById("contactForm").addEventListener("submit", handleSubmit);