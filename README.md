# path-gpt

Generate JSON file out of CWD recursive contents. Could be helpful to train custom GPTs with your repo.

The tool respects your `.gitignore` and omits NPM lock files.

This is a Proof of Concept.

## Run

```bash
bunx path-gpt@latest
# or
npx path-gpt@latest
```

## Development

Install

```bash
bun i
```

Build

```bash
bun run build
```

Run Dev version

```bash
bun run start
```
