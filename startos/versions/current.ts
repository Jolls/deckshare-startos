import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.2.25:0',
  releaseNotes: {
    en_US: 'Update to Enshu v0.2.25.',
    es_ES: 'Actualización a Enshu v0.2.25.',
    de_DE: 'Aktualisierung auf Enshu v0.2.25.',
    pl_PL: 'Aktualizacja do Enshu v0.2.25.',
    fr_FR: 'Mise à jour vers Enshu v0.2.25.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
