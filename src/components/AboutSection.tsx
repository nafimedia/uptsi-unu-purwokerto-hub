import { CheckCircle, Target, Eye } from "lucide-react";

const AboutSection = () => {
  const features = [
    "Pengembangan dan pemeliharaan sistem informasi",
    "Dukungan teknis untuk civitas akademika",
    "Pengelolaan infrastruktur jaringan kampus",
    "Pengamanan data dan sistem informasi",
    "Pelatihan dan pengembangan SDM bidang TI",
  ];

  return (
    <section id="tentang" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Tentang UPTSI
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Mendorong Inovasi
              <span className="text-gradient block">Teknologi Kampus</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Unit Pelaksana Teknis Sistem Informasi (UPTSI) UNU Purwokerto bertugas mengelola dan mengembangkan 
              infrastruktur teknologi informasi untuk mendukung kegiatan akademik, administrasi, dan pelayanan kampus.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Vision & Mission Cards */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-glow transition-all duration-300">
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Visi</h3>
              <p className="text-muted-foreground">
                Menjadi unit teknologi informasi terdepan yang mendukung transformasi digital 
                UNU Purwokerto sebagai kampus digital yang inovatif dan berdaya saing.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-glow transition-all duration-300">
              <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Misi</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Mengembangkan sistem informasi terintegrasi</li>
                <li>• Menyediakan infrastruktur TI yang handal</li>
                <li>• Memberikan layanan dukungan teknis berkualitas</li>
                <li>• Meningkatkan literasi digital civitas akademika</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
