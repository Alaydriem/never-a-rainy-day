"use strict";

import { world, system, WeatherType } from "@minecraft/server";
import { Version } from "./version";

var WeatherSettings;
(function (WeatherSettings) {
  WeatherSettings[(WeatherSettings["Default"] = 0)] = "Default";
  WeatherSettings[(WeatherSettings["NoRain"] = 1)] = "NoRain";
  WeatherSettings[(WeatherSettings["NoThunder"] = 2)] = "NoThunder";
})(WeatherSettings || (WeatherSettings = {}));

let world_weather_setting = WeatherSettings.Default;

world.beforeEvents.chatSend.subscribe(async (event) => {
  let v = new Version(event, event.sender);
  let cmd = event.message.split(" ");
  switch (cmd[0]) {
    case "!wc":
      event.cancel = true;
      await world.getDimension("overworld").runCommandAsync("weather clear");
      break;
    case "!weather":
      event.cancel = true;
      switch (cmd[1]) {
        case "version":
          event.cancel = true;
          system.run(() => {
            v.version();
          });
          break;
        case "clear":
          await world.getDimension("overworld").runCommandAsync("weather clear");
          break;
        case "default":
          world_weather_setting = WeatherSettings.Default;
          break;
        case "no-rain":
          world_weather_setting = WeatherSettings.NoRain;
          break;
        case "no-thunder":
          world_weather_setting = WeatherSettings.NoThunder;
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
});

world.beforeEvents.weatherChange.subscribe(async (event) => {
  if (
    world_weather_setting == WeatherSettings.NoRain &&
    (event.newWeather == WeatherType.Thunder || event.newWeather == WeatherType.Rain)
  ) {
    console.warn("Changing weather to rain was blocked");
    event.cancel = true;
  }

  if (world_weather_setting == WeatherSettings.NoThunder && event.newWeather == WeatherType.Thunder) {
    console.warn("Changing weather to thunderstorm was blocked");
    event.cancel = true;
  }
});
