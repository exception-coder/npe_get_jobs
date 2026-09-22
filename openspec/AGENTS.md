# OpenSpec Workspace Rules

These rules apply to files under `openspec/`.

- `specs/` contains accepted behavioral specifications; `changes/` describes proposed or in-progress evolution.
- Keep proposal, design, delta specs, and tasks coherent within one change.
- Match or create the related change before non-trivial implementation, and update the same change whenever scope, behavior, contracts, or acceptance evidence changes.
- Do not turn a Graphify observation into an accepted behavioral requirement.
- Run strict structural validation and verify implementation against targeted source and tests before syncing or archiving a change; incomplete tasks or critical mismatches block archive.
- Shared repository rules remain in the root `AGENTS.md`; do not duplicate them here.
