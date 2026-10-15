#!/usr/bin/env node
// A pull request may add new files: one or more project JSON files in
// src/data/projects/ and images in public/images/. It may also change or delete files
// its author added in an earlier pull request. Changing or deleting any other file
// already on main, including someone else's entry, fails the check.
//
// Who added a file comes from the merge commit that brought it onto main, whose
// message GitHub writes as "Merge pull request #N from <login>/<branch>". That holds
// only while pull requests are merged with a merge commit, not squashed or rebased.
//
// Usage: check-pr-files.mjs [base] [author-login]
import { execFileSync } from 'node:child_process';
import process from 'node:process';

const base = process.argv[2] || 'origin/main';
const author = (process.argv[3] || '').toLowerCase();

function addedBy(file) {
  const subject = execFileSync(
    'git',
    ['log', base, '--first-parent', '--diff-filter=A', '-n', '1', '--format=%s', '--', file],
    { encoding: 'utf8' },
  );
  return subject.match(/^Merge pull request #\d+ from ([^/\s]+)\//)?.[1].toLowerCase();
}
const isOwnFile = (file) => author !== '' && addedBy(file) === author;

const out = execFileSync('git', ['diff', '--name-status', '--no-renames', `${base}...HEAD`], {
  encoding: 'utf8',
});

const allowed = [/^src\/data\/projects\/[^/]+\.json$/, /^public\/images\/[^/]+$/];
const problems = [];

for (const line of out.split('\n').filter(Boolean)) {
  const [status, file] = line.split('\t');
  if (file === 'src/data/projects/project.schema.json') {
    problems.push(`${file}: the schema is not yours to change`);
  } else if ((status === 'M' || status === 'D') && allowed.some((re) => re.test(file)) && isOwnFile(file)) {
    continue;
  } else if (status !== 'A') {
    problems.push(`${file}: only new files, or files you added yourself, may be in a pull request; this one is ${status === 'D' ? 'deleted' : 'changed'}`);
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
console.log("\x1b[32mThe pull request only adds project files and images, or changes files its author added.\x1b[0m");
