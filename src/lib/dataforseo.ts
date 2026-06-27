const LOGIN = process.env.DATAFORSEO_LOGIN!;
const PASSWORD = process.env.DATAFORSEO_PASSWORD!;
const BASE = "https://api.dataforseo.com/v3";

const auth = () =>
  "Basic " + Buffer.from(`${LOGIN}:${PASSWORD}`).toString("base64");

export interface KeywordResult {
  keyword: string;
  searchVolume: number;
  competition: number; // 0–1 scale
  cpc: number;
}

export async function getKeywordVolumes(
  keywords: string[]
): Promise<KeywordResult[]> {
  const res = await fetch(
    `${BASE}/keywords_data/google_ads/search_volume/live`,
    {
      method: "POST",
      headers: {
        Authorization: auth(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        {
          keywords,
          location_code: 2840, // United States
          language_code: "en",
        },
      ]),
    }
  );

  if (!res.ok) {
    throw new Error(`DataForSEO error: ${res.status} ${res.statusText}`);
  }

  const json = await res.json();
  const items = json?.tasks?.[0]?.result ?? [];

  return items
    .map((item: { keyword: string; search_volume?: number; competition?: number; cpc?: number }) => ({
      keyword: item.keyword,
      searchVolume: item.search_volume ?? 0,
      competition: item.competition ?? 0,
      cpc: item.cpc ?? 0,
    }))
    .sort((a: KeywordResult, b: KeywordResult) => b.searchVolume - a.searchVolume);
}
