import { SITE_URL } from "./urls";

const KEY = process.env.INDEXNOW_KEY!;

export async function pingIndexNow(slug: string): Promise<void> {
  const url = `${SITE_URL}/playbooks/${slug}`;

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: new URL(SITE_URL).hostname,
        key: KEY,
        keyLocation: `${SITE_URL}/${KEY}.txt`,
        urlList: [url],
      }),
    });

    if (res.ok) {
      console.log(`[IndexNow] Pinged: ${url}`);
    } else {
      console.warn(`[IndexNow] Failed (${res.status}): ${url}`);
    }
  } catch (err) {
    console.warn("[IndexNow] Ping error:", err);
  }
}
