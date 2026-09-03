# DeckShare

## Documentation

- [DeckShare README](https://github.com/Jolls/deckshare#readme) — what DeckShare is, its
  compatibility model with Anki `.apkg`/`.colpkg` files, and its design philosophy.
- [deckshare.md](https://github.com/Jolls/deckshare/blob/main/deckshare.md) — architecture and
  feature notes for the project.

## What you get on StartOS

A web interface for DeckShare's spaced-repetition reviewer and account signup, backed by a
PostgreSQL database and a media store that both live on this service's own data volume —
no separate database service to install or configure.

## Getting set up

1. Open the **Web Interface** from this service's Interfaces panel.
2. Create your account from DeckShare's signup screen. There is no separate admin account —
   the first account you create is a regular account like any other.
3. Import an existing Anki collection (`.apkg`/`.colpkg`) if you have one, or create a deck
   from scratch, and start reviewing.

Reaching this service from more than one address (LAN and a domain, or LAN and Tor, for
example) works out of the box — no extra setup needed.

## Using DeckShare

### Web interface

The same interface serves both the reviewer (studying cards) and account/deck management.
New visitors land on a sign-in/sign-up screen.
