
import Link from 'next/link';

const WhatsappIcon = () => (
  <svg
    role="img"
    aria-label="WhatsApp"
    className="h-6 w-6 text-white"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.52 3.48 1.47 4.95L2.05 22l5.25-1.52c1.41.87 3.02 1.36 4.74 1.36h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM9.51 7.24c.24-.01.48-.02.69.04.23.06.39.15.48.33.12.24.41.98.41.98s.13.28.05.51c-.08.23-.19.39-.33.53-.13.14-.28.28-.39.39-.12.11-.23.24-.1.44.13.2.66 1.11 1.45 1.82.96.88 1.83 1.13 2.19 1.26.36.13.56.1.74-.08.22-.22.69-1.01.69-1.01s.18-.28.45-.15c.27.13 1.73.81 1.73.81s.28.13.31.24c.03.11-.04.41-.23.59s-1.29 1.18-1.29 1.18c-.46.42-1.09.6-1.63.6-1.13 0-2.61-.59-3.99-2.28-1.38-1.69-2.4-3.52-2.52-3.81-.12-.29-.69-1.01-.69-1.01s-.1-.23.08-.44c.18-.21.39-.26.51-.28z"/>
  </svg>
);

export default function WhatsappButton() {
  // IMPORTANT: Replace this with your actual WhatsApp number, including the country code without the '+'
  const whatsappNumber = "+254719790026"; 
  const message = "Hello Salkeri Expeditions! I'm interested in booking a safari.";
  
  return (
    <Link 
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] transition-colors text-white rounded-full p-3 sm:py-2 sm:px-4 shadow-lg flex items-center justify-center gap-2"
      aria-label="Contact us on WhatsApp"
    >
      <WhatsappIcon />
       <span className="hidden sm:inline text-sm font-medium whitespace-nowrap">
        Hi, how can I help?
      </span>
    </Link>
  );
}
