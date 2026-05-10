import { HeroSection } from "@/components/organisms/HeroSection";
import { SavoirFaireSection } from "@/components/organisms/SavoirFaireSection";
import { ProductsSection } from "@/components/organisms/ProductsSection";
import { TestimonialsSection } from "@/components/organisms/TestimonialsSection";
import { InstagramFeed } from "@/components/organisms/InstagramFeed";
import { ContactSection } from "@/components/organisms/ContactSection";

export function HomeTemplate() {
    return (
        <>
            <HeroSection />
            <SavoirFaireSection />
            <ProductsSection />
            <TestimonialsSection />
            <InstagramFeed />
            <ContactSection />
        </>
    );
}
