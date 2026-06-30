# Project Working Rules

## Language

- Work and documentation should be written in Korean by default.
- Keep user-facing summaries concise, but preserve enough decision context for later review.

## Documentation Sync Rule

This repository is the source of truth for project decisions and discussion-generated documents.

When an important product, UX, design, research, or implementation decision appears during the conversation:

1. Create or update a document under `docs/decisions/`.
2. Use the filename format `YYYY-MM-DD-short-topic.md`.
3. Include status, context, options considered, current direction, rationale, and open questions.
4. Update `docs/INDEX.md` so the decision can be found later.
5. Commit and push documentation changes when the user asks to save, upload, organize, or continue project documentation.

When a document is created during conversation, such as research notes, reference analysis, drafts, or submission answers:

1. Store it under the closest matching `docs/` folder.
2. Keep reference analysis under `docs/references/`.
3. Keep submission or answer drafts under `docs/submission/`.
4. Keep broad planning notes under `docs/plans/`.
5. Update `docs/INDEX.md` whenever a new document is added.

When the user later asks to "정리", "문서 정리", "전체 정리", or similar:

1. Scan `docs/` and relevant Markdown files.
2. Refresh `docs/INDEX.md`.
3. Merge duplicate or stale notes where appropriate.
4. Preserve original decision history unless the user explicitly asks to rewrite it.
5. Commit and push the cleanup if the user asks to save or upload it.

## Git Hygiene

- Do not commit unrelated dirty code changes while committing documentation updates.
- Keep documentation-only commits separate from prototype implementation commits.
- Local runtime artifacts such as `.omo/http-server.log` and `.omo/http-server.pid` should not be committed.
