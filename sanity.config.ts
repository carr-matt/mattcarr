import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import project from './sanity/schemas/project-schema';
import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: '30rnd8oe',
  dataset: 'production',
  title: 'Portfolio',
  apiVersion: '2023-04-10',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
