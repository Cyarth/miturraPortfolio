const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    const subject = "Oferta de trabajo";
    const body = `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`;
    window.location.href = `mailto:iturramairon@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
      <div>
        <a href="https://www.linkedin.com/in/maironiturra/" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" style={{width: '20px', height: '20px', marginRight: '0.5rem'}} />
          LinkedIn
        </a>
        <a href="https://github.com/Cyarth" target="_blank" rel="noopener noreferrer">
          <img src="https://github.githubassets.com/images/modules/site/icons/footer/github-mark.svg" alt="GitHub" style={{width: '20px', height: '20px', marginRight: '0.5rem'}} />
          GitHub
        </a>
        <a href="/cv.pdf" download="CV_Mairon_Iturra.pdf">
          <img src="https://cdn-icons-png.flaticon.com/512/337/337946.png" alt="Descargar CV" style={{width: '20px', height: '20px', marginRight: '0.5rem'}} />
          Descargar CV
        </a>
      </div>
    </section>
  );
};

export default Contact;