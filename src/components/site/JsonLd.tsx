// Données structurées (schema.org) lues par les moteurs de recherche.
// Le remplacement de « < » évite toute injection HTML dans la balise script.
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
