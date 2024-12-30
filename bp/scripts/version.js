"use strict";

const VERSION = "24.12.31";

export class Version {
  constructor(event, player) {
    this.event = event;
    this.player = player;
  }

  version(version) {
    this.player.onScreenDisplay.setActionBar(VERSION);
  }
}
