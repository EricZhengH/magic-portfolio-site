import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const root = new URL('../', import.meta.url);

async function read(path) {
  return readFile(new URL(path, root), 'utf8');
}

test('portfolio site uses extracted profile facts and no template filler', async () => {
  const [profile, page] = await Promise.all([
    read('src/data/profile.ts'),
    read('src/app/page.tsx'),
  ]);
  const combined = `${profile}\n${page}`;

  assert.match(combined, /Hang \(Eric\) Zheng/);
  assert.match(combined, /Results-driven Full-Stack Software Engineer/);
  assert.match(combined, /10 years of experience architecting high-performance distributed systems/);
  assert.match(combined, /Java and Golang backend services/);
  assert.match(combined, /React, Next\.js, and TypeScript/);
  assert.match(combined, /AI-agent architecture/);
  assert.doesNotMatch(combined, /born in 1998 with a Bachelor/);
  assert.doesNotMatch(combined, /With 9 years of professional experience/);
  assert.match(combined, /Morfeus Technologies Inc\./);
  assert.match(combined, /AI & LLM Systems|LLM Orchestration/);
  assert.match(combined, /ericresume\.online/);
  assert.match(combined, /linkedin\.com\/in\/ericzheng6/);
  assert.match(combined, /Cybercloud Company Beijing/);
  assert.match(combined, /Baiye-RPC/);
  assert.match(combined, /LiveMe risk control platform/);
  assert.match(combined, /zhenghangtxdyr@gmail\.com/);
  assert.doesNotMatch(combined, /Lorem|John Doe|Jane Doe|Alex Johnson|Lorant|Colin Hemphill/);
});

test('portfolio site includes required sections and resume page', async () => {
  const [home, resumePage] = await Promise.all([
    read('src/app/page.tsx'),
    read('src/app/resume/page.tsx'),
  ]);

  assert.match(home, /id="about"/);
  assert.match(home, /id="projects"/);
  assert.match(home, /id="contact"/);
  assert.match(resumePage, /Resume/);
});
