
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import Button from './Shared/Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('/#')) {
      e.preventDefault();
      const id = path.split('#')[1];
      
      if (location.pathname === '/') {
        const element = document.getElementById(id);
        if (element) {
          const offset = 80; // Compensação do header fixo
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      } else {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled || isOpen ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" onClick={(e) => handleNavClick(e, '/#home')} className="flex items-center group">
          <img 
            src="https://i.ibb.co/HLYMrTY8/logo-luz-aos-pequeninos-sem-fundo.png" 
            alt="Luz aos Pequeninos" 
            className={`transition-all duration-300 ${scrolled ? 'h-12' : 'h-16'} w-auto`}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <Link 
              key={link.path} 
              to={link.path}
              onClick={(e) => handleNavClick(e, link.path)}
              className={`font-bold transition-colors text-sm uppercase tracking-widest ${
                (location.pathname === '/' && location.hash === `#${link.path.split('#')[1]}`) || (location.pathname === link.path)
                ? 'text-blue-900' 
                : 'text-slate-500 hover:text-blue-900'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button to="/doar" className="scale-90">Quero ajudar</Button>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-blue-900 p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white border-t transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-[500px] opacity-100 py-6 shadow-xl' : 'max-h-0 opacity-0 py-0'
      }`}>
        <div className="flex flex-col gap-6 px-6">
          {NAV_LINKS.map(link => (
            <Link 
              key={link.path} 
              to={link.path}
              onClick={(e) => handleNavClick(e, link.path)}
              className={`text-lg font-bold ${
                location.pathname === link.path ? 'text-blue-900' : 'text-slate-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button to="/doar" className="w-full py-4">Quero ajudar</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
