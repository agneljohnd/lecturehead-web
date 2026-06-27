// Renders a JSON-LD <script> tag — always a server component
// Usage: <Schema data={articleSchema({...})} />

interface SchemaProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any> | Array<Record<string, any>>;
}

export function Schema({ data }: SchemaProps) {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint: dangerouslySetInnerHTML needed for JSON-LD
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
