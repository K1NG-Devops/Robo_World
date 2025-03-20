function Footer() {
  return (
      <footer className="py-8 bg-gray-800 text-white text-center">
        <p className="text-xs sm:text-sm md:text-base">
          &copy; {new Date().getFullYear()} Future Nest Academy. All rights reserved.
        </p>
      </footer>
  );
}

export default Footer;
