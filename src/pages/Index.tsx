
import { Header } from '@/components/Header';
import { FormTabs } from '@/components/FormTabs';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <FormTabs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
