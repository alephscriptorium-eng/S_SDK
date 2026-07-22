/**
 * Peer externo SIMULADO (proceso aparte) — firma peercard viajera
 * con @zeus/protocol/peer-card-seat del canal real.
 *
 * Uso: node peer.mjs  → JSON credencial por stdout (última línea).
 */

import { makePeerCard } from '@zeus/protocol/peer-card';
import {
  generateSeatKeyPair,
  signTravelingPeerCard,
} from '@zeus/protocol/peer-card-seat';

const DEFAULT_STARTPACK = Object.freeze({
  id: 'startpack-ciudad',
  version: '0.1.0',
  ref: 'startpack-ciudad-v0.1.0',
  packageName: '@zeus/startpack-ciudad',
});

const keys = generateSeatKeyPair();
const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();

const peerCard = makePeerCard({
  roomId: 'CIUDAD_DEMO',
  endpoint: 'wss://rooms.example/runtime',
  token: 'puerta-tick-cero',
  scopes: ['role:player'],
  displayName: 'amigo-simulado',
  expiresAt,
  issuedAt: new Date().toISOString(),
});

const unsigned = {
  roomId: 'CIUDAD_DEMO',
  endpoint: 'wss://rooms.example/runtime',
  token: 'puerta-tick-cero',
  role: 'player',
  displayName: 'amigo-simulado',
  expiresAt,
  startpack: { ...DEFAULT_STARTPACK },
  peerCard,
};

const signedCard = signTravelingPeerCard(
  unsigned.peerCard,
  keys.privateKey,
  keys.ssbId,
);

const credencial = {
  ...unsigned,
  peerCard: signedCard,
  signature: {
    alg: 'ed25519-seat',
    value: signedCard.seatSignature,
    ssbId: keys.ssbId,
    pending: false,
  },
};

process.stdout.write(
  JSON.stringify({
    ok: true,
    process: 'peer-simulado',
    startpackRef: DEFAULT_STARTPACK.ref,
    ssbId: keys.ssbId,
    credencial,
  }) + '\n',
);
