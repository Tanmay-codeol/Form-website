
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section id="home" className="bg-background py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Build Amazing
            <span className="text-primary block">Digital Experiences</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your business with our cutting-edge solutions. We help companies 
            create stunning digital products that engage users and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="flex items-center gap-2">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="flex items-center gap-2">
              <Play className="h-4 w-4" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
