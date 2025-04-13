import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const isGitHubPages = process.env.NODE_ENV === "production";

// 🟡 Set your GitHub repo name here:
const repoName = "travel-ai-adventures-unfold";

export default defineConfig({
  base: isGitHubPages ? `/${repoName}/` : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    !isGitHubPages && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
