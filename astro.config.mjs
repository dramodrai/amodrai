import { defineConfig } from "astro/config";
import alpine from "@astrojs/alpinejs";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";
// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [tailwind(), alpine(), sitemap()],
});
