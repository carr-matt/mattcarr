import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const config = defineConfig({
  projectId: '30rnd8oe',
  dataset: 'production',
  title: 'Portfolio',
  apiVersion: '2023-04-10',
  basePath: '/admin',
  plugins: [deskTool()],
});

export default config;
