import { Turnstile } from "@marsidev/react-turnstile";

export default function Widget() {
  const key = process.env.NEXT_PUBLIC_CLOUDFLARE;
  return (
    <Turnstile
      siteKey={key}
      options={{
        action: "submit-form",
        theme: "light",

        language: "en",
      }}
    />
  );
}
