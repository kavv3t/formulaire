async function handleSubmit(event) {
  event.preventDefault(); // Empêche la soumission par défaut

  const form = document.getElementById("contactForm");
  const formData = new FormData(form); // Collecte les données du formulaire

  // Affiche les données envoyées pour le débogage
  for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
  }

  try {
      const response = await fetch(form.action, {
          method: "POST",
          body: formData,
      });

      if (response.ok) {
          alert("Votre message a été envoyé avec succès !");
          form.reset(); // Réinitialise le formulaire
      } else {
          alert("Erreur lors de l'envoi du formulaire. Veuillez réessayer.");
      }
  } catch (error) {
      alert("Une erreur est survenue : " + error.message);
  }
}