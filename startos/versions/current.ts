import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.3.8:0',
  releaseNotes: {
    en_US: 'Update to DeckShare v0.3.8.',
    es_ES: 'Actualización a DeckShare v0.3.8.',
    de_DE: 'Aktualisierung auf DeckShare v0.3.8.',
    pl_PL: 'Aktualizacja do DeckShare v0.3.8.',
    fr_FR: 'Mise à jour vers DeckShare v0.3.8.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
