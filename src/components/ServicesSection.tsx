import { 
  Server, 
  Shield, 
  Wifi, 
  Database, 
  Monitor, 
  HeadphonesIcon,
  GraduationCap,
  Mail
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Server,
      title: "Pengelolaan Server",
      description: "Mengelola server aplikasi dan database untuk kelancaran sistem informasi kampus.",
    },
    {
      icon: Wifi,
      title: "Jaringan & Internet",
      description: "Menyediakan konektivitas internet cepat dan stabil di seluruh area kampus.",
    },
    {
      icon: Shield,
      title: "Keamanan Siber",
      description: "Melindungi sistem dan data dari ancaman keamanan siber dan serangan digital.",
    },
    {
      icon: Database,
      title: "Manajemen Data",
      description: "Pengelolaan database terpusat untuk integritas dan keamanan data kampus.",
    },
    {
      icon: Monitor,
      title: "Sistem Informasi Akademik",
      description: "Pengembangan dan pemeliharaan SIAKAD untuk kegiatan akademik.",
    },
    {
      icon: HeadphonesIcon,
      title: "Help Desk & Support",
      description: "Layanan bantuan teknis untuk menyelesaikan permasalahan TI civitas akademika.",
    },
    {
      icon: GraduationCap,
      title: "Pelatihan TI",
      description: "Program pelatihan dan workshop untuk meningkatkan kompetensi digital.",
    },
    {
      icon: Mail,
      title: "Email & Kolaborasi",
      description: "Layanan email institusi dan platform kolaborasi digital kampus.",
    },
  ];

  return (
    <section id="layanan" className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
            Layanan Kami
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Solusi Digital Lengkap
            <span className="text-gradient block">untuk Kampus</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Berbagai layanan teknologi informasi untuk mendukung kegiatan akademik dan operasional kampus.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-card hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:gradient-primary flex items-center justify-center mb-5 transition-all duration-300">
                  <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
