/* Lockup tipográfico de HIFRA.

   El logotipo está pendiente. Mientras llega, la marca se resuelve con
   el wordmark en Montserrat 800 —el peso de display del sistema— y el
   descriptor «Grupo Inmobiliario», que el brief §4 pide en primera
   mención. Sustituir el contenido de este componente por el <img> del
   logo deja el resto del sitio intacto. */
import React from "react";

export interface WordmarkProps {
  tone?: "dark" | "light";
  /** Altura tipográfica del wordmark en px. */
  size?: number;
  /** Oculta el descriptor «Grupo Inmobiliario». */
  compact?: boolean;
  style?: React.CSSProperties;
}

export function Wordmark({ tone = "dark", size = 22, compact = false, style = {} }: WordmarkProps) {
  const color = tone === "light" ? "var(--neutral-0)" : "var(--text-strong)";
  const sub = tone === "light" ? "rgba(244,240,232,0.66)" : "var(--text-muted)";

  return (
    <span style={{ display: "inline-flex", flexDirection: "column", gap: "3px", lineHeight: 1, ...style }}>
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: `${size}px`,
          letterSpacing: "0.14em",
          color,
          lineHeight: 1,
        }}
      >
        HIFRA
      </span>
      {!compact && (
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: `${Math.max(8, Math.round(size * 0.34))}px`,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: sub,
            lineHeight: 1,
          }}
        >
          Grupo Inmobiliario
        </span>
      )}
    </span>
  );
}
