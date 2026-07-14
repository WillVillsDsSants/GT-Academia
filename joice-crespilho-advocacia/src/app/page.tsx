import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { PracticeAreas } from "@/components/sections/PracticeAreas";
import { Differentials } from "@/components/sections/Differentials";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { ContactCta } from "@/components/sections/ContactCta";

/**
 * Página inicial — narrativa completa em alternância rítmica
 * preto/branco: autoridade (dark) e clareza (light).
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <PracticeAreas />
      <Differentials />
      <Process />
      <Testimonials />
      <BlogPreview />
      <Faq />
      <ContactCta />
    </>
  );
}
