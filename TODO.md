# TODO — DeckShare

Core packaging is done and verified: `make x86` builds cleanly, installs, PostgreSQL
initializes, the `migrate` oneshot applies all 15 goose migrations, and the `deckshare` daemon
comes up listening on `:3000` (confirmed via `start-cli package logs` and a live install on
`192.168.121.132`, at the time still under the `enshu` package id). Remaining items:

- [x] **Icon.** Upstream added `web/static/favicon.png` (256x256) as of the Enshu→DeckShare
      rename. Re-encoded losslessly (palette PNG) to fit the 40 KiB budget; now `icon.png`.
- [ ] **Translations.** `startos/manifest/i18n.ts` and
      `startos/i18n/dictionaries/translations.ts` (es_ES/de_DE/pl_PL/fr_FR) are machine-drafted.
      Have a native speaker review before publishing.
- [ ] **Backup/restore sanity check.** Not yet exercised — `sdk.Backups.ofVolumes('main')` is
      wired up (see README § Backups and Restore) but taking a real backup and restoring it
      needs StartOS's backup-target flow, which is a GUI action.
- [ ] **Open registration.** DeckShare has no built-in signup gate (confirmed: no such env var
      in `cmd/deckshare/main.go`). If that matters to you, flag it prominently before
      publishing — currently just noted under README § Limitations and Differences.
- [x] Re-pinned upstream from the untagged rename commit to the tagged `v0.3.8` release.
      Re-verify `docker-tag`/submodule pins again closer to publish time (Postgres image,
      upstream DeckShare release) per `UPDATING.md`.
- [ ] **Package id changed** (`enshu` → `deckshare`) — this is a new package identity as far
      as StartOS is concerned. The live install on `192.168.121.132` is still the old `enshu`
      package; it needs a manual backup, uninstall of `enshu`, install of `deckshare`, and
      restore into it (not yet exercised under the new id).
