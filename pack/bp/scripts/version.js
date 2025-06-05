"use strict";

const VERSION = "25.6.5";

export class Version {
  constructor(event, player) {
    this.event = event;
    this.player = player;
  }

  version(version) {
    this.player.onScreenDisplay.setActionBar(VERSION);
  }
}
