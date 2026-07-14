"use client";

import { useState, type FormEvent } from "react";
import { areas } from "@/content/areas";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

/**
 * Formulário de contato.
 * Sem backend configurado, o envio abre o cliente de e-mail com a mensagem
 * estruturada (mailto). Para produção, conecte a uma API Route / serviço de
 * e-mail (ver docs/PROJETO.md → Evolução).
 */
const inputClasses =
  "w-full border border-ink/20 bg-paper px-4 py-3.5 text-sm text-ink placeholder:text-smoke/70 transition-colors duration-300 focus:border-gold focus:outline-none";

const labelClasses =
  "mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-ink";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const subject = `Contato pelo site — ${data.get("area")}`;
    const body = [
      `Nome: ${data.get("nome")}`,
      `E-mail: ${data.get("email")}`,
      `Telefone: ${data.get("telefone")}`,
      `Área: ${data.get("area")}`,
      "",
      `${data.get("mensagem")}`,
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div
        role="status"
        className="border border-gold/50 bg-paper p-10 text-center"
      >
        <p className="font-display text-2xl font-medium text-ink">
          Mensagem preparada.
        </p>
        <div className="hairline mx-auto mt-4" />
        <p className="mt-4 text-sm font-light leading-relaxed text-smoke">
          Seu aplicativo de e-mail foi aberto com a mensagem pronta para envio.
          Se preferir, fale conosco diretamente pelo WhatsApp ou telefone —
          retornaremos com brevidade e total discrição.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate={false}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className={labelClasses}>
            Nome completo <span className="text-gold">*</span>
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            autoComplete="name"
            placeholder="Seu nome"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="telefone" className={labelClasses}>
            Telefone / WhatsApp <span className="text-gold">*</span>
          </label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(00) 00000-0000"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="email" className={labelClasses}>
          E-mail <span className="text-gold">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="voce@email.com"
          className={inputClasses}
        />
      </div>

      <div className="mt-6">
        <label htmlFor="area" className={labelClasses}>
          Área relacionada <span className="text-gold">*</span>
        </label>
        <select id="area" name="area" required className={inputClasses} defaultValue="">
          <option value="" disabled>
            Selecione a área
          </option>
          {areas.map((area) => (
            <option key={area.slug} value={area.title}>
              {area.title}
            </option>
          ))}
          <option value="Outra questão">Outra questão</option>
        </select>
      </div>

      <div className="mt-6">
        <label htmlFor="mensagem" className={labelClasses}>
          Como podemos ajudar? <span className="text-gold">*</span>
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          rows={5}
          placeholder="Descreva brevemente a sua situação. Todas as informações são tratadas com sigilo."
          className={`${inputClasses} resize-y`}
        />
      </div>

      <div className="mt-6 flex items-start gap-3">
        <input
          id="consentimento"
          name="consentimento"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 shrink-0 accent-[#B08A3C]"
        />
        <label htmlFor="consentimento" className="text-xs leading-relaxed text-smoke">
          Autorizo o uso dos meus dados para retorno deste contato, conforme a{" "}
          <a href="/politica-de-privacidade" className="text-gold underline underline-offset-2">
            Política de Privacidade
          </a>{" "}
          e a Lei Geral de Proteção de Dados (LGPD).
        </label>
      </div>

      <div className="mt-8">
        <Button type="submit" className="w-full sm:w-auto">
          Enviar mensagem
        </Button>
      </div>

      <p className="mt-4 text-xs text-smoke">
        Retornamos em até 1 dia útil. Suas informações são protegidas por
        sigilo profissional.
      </p>
    </form>
  );
}
