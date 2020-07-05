const { PeerServer } = require("peer");

const peerServer = PeerServer({ port: 900, key: "peerjs", path: "/myapp" });
