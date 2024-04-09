import Link from "next/link";

export const Header = () => {
  const links = [
    { name: "To", path: "/" },
    { name: "From", path: "/gsapFrom" },
    { name: "FromTo", path: "/gsapFromTo" },
    { name: "Timeline", path: "/gsapTimeline" },
    { name: "Stagger", path: "/gsapStagger" },
    { name: "Scroll-Trigger", path: "/gsapScrollTrigger" },
    { name: "Text", path: "/gsapText" },
  ];

  return (
    <header className="flex items-center justify-between gap-2 py-8 md:px-20 px-3">
      <h1 className="text-primary text-4xl font-bold tracking-widest">GSAP</h1>

      <nav className="flex items-center gap-5">
        {links.map((link, idx) => (
          <Link
            href={link.path}
            key={idx}
            className="text-lg text-white hover:text-primary transition-colors no-underline"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};
