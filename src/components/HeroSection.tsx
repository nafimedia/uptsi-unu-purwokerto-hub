import { Button } from "@/components/ui/button";
import { ArrowRight, Server, Shield, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground/80 text-sm mb-6 animate-fade-in">
              <Zap className="w-4 h-4" />
              <span>Unit Pelaksana Teknis Sistem Informasi</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Transformasi Digital
              <span className="block text-gradient">UNU Purwokerto</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Mendukung pengembangan infrastruktur teknologi informasi dan sistem digital untuk kemajuan akademik dan administrasi kampus.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button variant="accent" size="xl">
                Jelajahi Layanan
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl">
                Tentang Kami
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              {[
                { value: "10+", label: "Tahun Pengalaman" },
                { value: "15+", label: "Layanan Aktif" },
                { value: "5000+", label: "Pengguna" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-primary-foreground">{stat.value}</div>
                  <div className="text-sm text-primary-foreground/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className="hidden lg:block relative h-[500px]">
            <div className="absolute top-0 right-0 w-64 bg-card/10 backdrop-blur-md rounded-2xl p-6 border border-primary-foreground/10 animate-float">
              <Server className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-semibold text-primary-foreground mb-2">Infrastruktur IT</h3>
              <p className="text-sm text-primary-foreground/60">Pengelolaan server dan jaringan kampus</p>
            </div>
            
            <div className="absolute top-1/3 left-0 w-64 bg-card/10 backdrop-blur-md rounded-2xl p-6 border border-primary-foreground/10 animate-float" style={{ animationDelay: "0.5s" }}>
              <Shield className="w-10 h-10 text-secondary mb-4" />
              <h3 className="font-semibold text-primary-foreground mb-2">Keamanan Data</h3>
              <p className="text-sm text-primary-foreground/60">Proteksi sistem dan data kampus</p>
            </div>
            
            <div className="absolute bottom-0 right-10 w-64 bg-card/10 backdrop-blur-md rounded-2xl p-6 border border-primary-foreground/10 animate-float" style={{ animationDelay: "1s" }}>
              <Zap className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-semibold text-primary-foreground mb-2">Integrasi Sistem</h3>
              <p className="text-sm text-primary-foreground/60">Menghubungkan seluruh layanan digital</p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
