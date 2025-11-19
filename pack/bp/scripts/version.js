"use strict";

const VERSION = "25.11.18";

export class Version {
  constructor(event, player) {
    this.event = event;
    this.player = player;
  }

  version(version) {
    this.player.onScreenDisplay.setActionBar(VERSION);
  }
}
