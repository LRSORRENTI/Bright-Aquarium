export const handleClickMobileNavItem = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector(new URL(e.currentTarget.href).hash);
    target?.scrollIntoView({ behavior: "smooth" });
  };