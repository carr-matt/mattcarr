'use client';

import config from '@/sanity.config';
import { NextStudio } from 'next-sanity/studio';
import { useClient } from 'sanity';

export default function AdminPage() {
  return <NextStudio config={config} />;
}
