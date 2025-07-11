
import { Zap, Shield, Smartphone, Globe } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with cutting-edge technology for the best user experience.'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee for your peace of mind.'
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Responsive design that works perfectly on all devices and screen sizes.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Deploy worldwide with our global CDN and multi-region infrastructure.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide everything you need to build and scale your digital presence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-background rounded-lg shadow-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
