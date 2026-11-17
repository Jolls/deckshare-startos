import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.3.23:0',
  releaseNotes: {
    en_US: 'Update to DeckShare v0.3.23.',
    es_ES: 'Actualización a DeckShare v0.3.23.',
    de_DE: 'Aktualisierung auf DeckShare v0.3.23.',
    pl_PL: 'Aktualizacja do DeckShare v0.3.23.',
    fr_FR: 'Mise à jour vers DeckShare v0.3.23.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
