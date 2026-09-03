import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.2.27:0',
  releaseNotes: {
    en_US: 'Renamed from Enshu to DeckShare, matching the upstream project rename. Update to DeckShare v0.2.27.',
    es_ES: 'Renombrado de Enshu a DeckShare, siguiendo el cambio de nombre del proyecto original. Actualización a DeckShare v0.2.27.',
    de_DE: 'Von Enshu in DeckShare umbenannt, entsprechend der Umbenennung des Upstream-Projekts. Aktualisierung auf DeckShare v0.2.27.',
    pl_PL: 'Zmieniono nazwę z Enshu na DeckShare, zgodnie ze zmianą nazwy projektu źródłowego. Aktualizacja do DeckShare v0.2.27.',
    fr_FR: 'Renommé de Enshu à DeckShare, suivant le renommage du projet en amont. Mise à jour vers DeckShare v0.2.27.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
