
import React from "react";
import { ArrowDown, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dock, DockIcon } from "@/components/ui/dock";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Separator } from "@/components/ui/separator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBehance } from "@fortawesome/free-brands-svg-icons";
import { FaGithub } from "react-icons/fa6";


export type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
  linkedin: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>LinkedIn</title>
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  ),
  x: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>X</title>
      <path
        fill="currentColor"
        d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      />
    </svg>
  ),
  github: (props: IconProps) => <FaGithub {...props} />,
  instagram: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>Instagram</title>
      <path
        fill="currentColor"
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
      />
    </svg>
  ),
  behance: (props: IconProps) => (
    <FontAwesomeIcon icon={faBehance} {...props} />
  ),
};

export function SocialDock() {
  const { setTheme } = useTheme();
  const [visible, setVisible] = React.useState(true);
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [bottom, setBottom] = React.useState(24); // Default 24px

  // Check if menu is open by monitoring body style
  React.useEffect(() => {
    const checkMenuState = () => {
      setMenuOpen(document.body.style.overflow === 'hidden');
    };
    checkMenuState();
    const bodyObserver = new MutationObserver(checkMenuState);
    bodyObserver.observe(document.body, { attributes: true, attributeFilter: ['style'] });
    return () => bodyObserver.disconnect();
  }, []);

  // Responsive bottom position for mobile
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setBottom(80); // 90px from bottom on mobile (enough for safe area + margin)
      } else {
        setBottom(24); // 24px from bottom on desktop
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const viewportHeight = window.innerHeight;
      const isAtTop = currentScrollPos < viewportHeight * 0.3;
      const isScrollingUp = currentScrollPos < prevScrollPos;
      setVisible(isAtTop || isScrollingUp);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div 
      className={`fixed left-1/2 transform -translate-x-1/2 z-30 transition-all duration-300 ${
        visible && !menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
      style={{
        bottom: `${bottom}px`,
        maxWidth: '100vw',
        width: 'min(90vw, 360px)',
        pointerEvents: visible && !menuOpen ? 'auto' : 'none'
      }}
    >
      <Dock 
        direction="middle" 
        className="h-12 px-4 py-1.5 bg-white backdrop-blur-sm border border-gray-100 shadow-md rounded-xl mx-auto w-full"
      >
        <DockIcon>
          <Button
            onClick={() => setTheme("light")}
            variant="ghost"
            size="icon"
            className="w-8 h-8 text-gray-700 flex items-center justify-center hover:bg-gray-100 transition-all"
            aria-label="Light theme"
          >
            <Sun className="h-4 w-4" />
          </Button>
        </DockIcon>

        <Separator orientation="vertical" className="h-6 bg-gray-200 mx-1" />

        <DockIcon>
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 text-gray-700 flex items-center justify-center hover:bg-gray-100 transition-all"
            asChild
          >
            <a href="https://github.com/Anuragspace" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Icons.github className="h-4 w-4" />
            </a>
          </Button>
        </DockIcon>

        <DockIcon>
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 text-gray-700 flex items-center justify-center hover:bg-gray-100 transition-all"
            asChild
          >
            <a href="https://www.linkedin.com/in/adarshanurag/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Icons.linkedin className="h-4 w-4" />
            </a>
          </Button>
        </DockIcon>

        <DockIcon>
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 text-gray-700 flex items-center justify-center hover:bg-gray-100 transition-all"
            asChild
          >
            <a href="https://www.instagram.com/anurag__adarsh/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Icons.instagram className="h-4 w-4" />
            </a>
          </Button>
        </DockIcon>

        <DockIcon>
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 text-gray-700 flex items-center justify-center hover:bg-gray-100 transition-all"
            asChild
          >
            <a href="https://www.behance.net/anuragadarsh1" target="_blank" rel="noopener noreferrer" aria-label="Behance">
              <Icons.behance className="h-4 w-4" />
            </a>
          </Button>
        </DockIcon>

        <Separator orientation="vertical" className="h-6 bg-gray-200 mx-1" />

        <DockIcon>
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 text-gray-700 flex items-center justify-center hover:bg-gray-100 transition-all"
            asChild
          >
            <a href="#about" aria-label="Scroll down">
              <ArrowDown className="h-4 w-4" />
            </a>
          </Button>
        </DockIcon>
      </Dock>
    </div>
  );
}
