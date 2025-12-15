const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {currentYear} Thiago Tomoyuki. Todos os direitos reservados.
          </p>
          <p>
            Product Owner | Gestão de Projetos de TI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
