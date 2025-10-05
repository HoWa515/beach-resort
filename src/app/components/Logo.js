function Logo() {
  return (
    <a href="/" className="flex items-center gap-4 z-10">
      <img src="./logo.jpg" height="60" width="60" alt="The logo" />
      <span className="text-xl font-semibold text-primary-100">
        The Beach Club
      </span>
    </a>
  );
}

export default Logo;
