const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <p className="text-light">
          App desenvolvido por{" "}
          <a
            href="https://github.com/westorres9"
            target="_blank"
            rel="noreferrer"
          >
            Wester Torres
          </a>
        </p>
        <p className="text-light">
          <small>
            <strong>Bootcamp Spring React</strong>
            <br />
            DevSuperior:{" "}
            <a
              href="https://instagram.com/westorres9"
              target="_blank"
              rel="noreferrer"
            >
              @westorres9
            </a>
          </small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
