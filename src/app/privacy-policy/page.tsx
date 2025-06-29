import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';
import PrivacyPolicyContent from '@/components/privacy-policy-content';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <PrivacyPolicyContent />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
