#!/usr/bin/env node
// A pull request may only add new files: one or more project JSON files in
// src/data/projects/ and images in public/images/. Changing or deleting a file that
// is already on main, including someone else's entry, fails the check.
import { execFileSync } from 'node:child_process';
import process from 'node:process';

const base = process.argv[2] || 'origin/main';
const out = execFileSync('git', ['diff', '--name-status', '--no-renames', `${base}...HEAD`], {
  encoding: 'utf8',
});

const allowed = [/^src\/data\/projects\/[^/]+\.json$/, /^public\/images\/[^/]+$/];
const problems = [];

for (const line of out.split('\n').filter(Boolean)) {
  const [status, file] = line.split('\t');
  if (file === 'src/data/projects/project.schema.json') {
    problems.push(`${file}: the schema is not yours to change`);
  } else if (status !== 'A') {
    problems.push(`${file}: only new files are allowed; this one is ${status === 'D' ? 'deleted' : 'changed'}`);
  } else if (!allowed.some((re) => re.test(file))) {
    problems.push(`${file}: only src/data/projects/*.json and public/images/* may be added`);
  }
}

if (problems.length) {
  console.error('\x1b[31mThis pull request changes files it should not:\x1b[0m');
  for (const p of problems) console.error(` - ${p}`);
  console.error('\nPush a fix to the same branch; the check reruns on its own.');
  process.exit(1);
}
console.log('\x1b[32mThe pull request only adds project files and images.\x1b[0m');
