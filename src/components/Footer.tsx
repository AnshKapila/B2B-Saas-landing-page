export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/5 py-12">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <div className="font-bold text-lg tracking-tight text-ink">Gradient 365</div>
          <div className="text-soft-ink text-sm">© {new Date().getFullYear()} Gradient 365 Inc. All rights reserved.</div>
        </div>
        
        <div className="flex gap-8 text-sm font-medium text-soft-ink">
          <a href="#" className="hover:text-brand-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-brand-primary transition-colors">Terms</a>
          <a href="#" className="hover:text-brand-primary transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
