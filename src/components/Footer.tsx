import { Monitor, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Beranda", href: "#beranda" },
    { label: "Tentang", href: "#tentang" },
    { label: "Layanan", href: "#layanan" },
    { label: "Tim", href: "#tim" },
    { label: "Kontak", href: "#kontak" },
  ];

  const services = [
    "Pengelolaan Server",
    "Jaringan Internet",
    "Keamanan Siber",
    "Help Desk",
    "Pelatihan TI",
  ];

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Youtube, href: "#" },
  ];

  return (
    <footer className="gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#beranda" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                <Monitor className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <span className="font-bold text-lg">UPTSI</span>
                <span className="block text-xs text-primary-foreground/70">UNU Purwokerto</span>
              </div>
            </a>
            <p className="text-primary-foreground/70 text-sm mb-6">
              Unit Pelaksana Teknis Sistem Informasi UNU Purwokerto, 
              mendukung transformasi digital kampus.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Tautan Cepat</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Layanan</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-primary-foreground/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Kontak</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>Jl. Sultan Agung No. 42</li>
              <li>Purwokerto, Jawa Tengah</li>
              <li>Indonesia</li>
              <li className="pt-2">(0281) 123-456</li>
              <li>uptsi@unupurwokerto.ac.id</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © 2024 UPTSI UNU Purwokerto. Hak Cipta Dilindungi.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-primary-foreground transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
