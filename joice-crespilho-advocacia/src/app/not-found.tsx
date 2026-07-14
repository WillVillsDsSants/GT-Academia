import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center bg-ink py-24 text-center">
      <div className="container max-w-xl">
        <p className="eyebrow">Erro 404</p>
        <h1 className="mt-5 font-display text-display-lg font-medium text-paper">
          Página não encontrada
        </h1>
        <div className="hairline mx-auto mt-6" />
        <p className="mx-auto mt-6 max-w-md text-sm font-light leading-relaxed text-paper/70">
          O endereço acessado não existe ou foi movido. Volte à página inicial
          para encontrar o que procura.
        </p>
        <div className="mt-10">
          <Button href="/">Voltar ao início</Button>
        </div>
      </div>
    </section>
  );
}
