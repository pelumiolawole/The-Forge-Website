// sanity.config.ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  name: "the-forge-website",
  title: "The Forge Website",
  projectId: "9f18pqec",
  dataset: "production",
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});