import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Alamat",
      value: "Jl. Sultan Agung No. 42, Purwokerto",
      subValue: "Jawa Tengah, Indonesia",
    },
    {
      icon: Phone,
      label: "Telepon",
      value: "(0281) 123-456",
      subValue: "Senin - Jumat",
    },
    {
      icon: Mail,
      label: "Email",
      value: "uptsi@unupurwokerto.ac.id",
      subValue: "Respon dalam 24 jam",
    },
    {
      icon: Clock,
      label: "Jam Operasional",
      value: "08:00 - 16:00 WIB",
      subValue: "Senin - Jumat",
    },
  ];

  return (
    <section id="kontak" className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Contact Info */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
              Hubungi Kami
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ada Pertanyaan?
              <span className="text-gradient block">Kami Siap Membantu</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Tim UPTSI siap membantu Anda dengan pertanyaan atau kebutuhan teknis. 
              Jangan ragu untuk menghubungi kami.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                      <p className="font-semibold text-foreground">{item.value}</p>
                      <p className="text-sm text-muted-foreground">{item.subValue}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6">Kirim Pesan</h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="email@contoh.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subjek
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="Topik pertanyaan Anda"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Pesan
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  placeholder="Tulis pesan Anda di sini..."
                />
              </div>
              <Button variant="hero" size="lg" className="w-full">
                Kirim Pesan
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
