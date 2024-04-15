![YouTube Channel Subscribers](https://img.shields.io/youtube/channel/subscribers/UCXgqRZv7bHsKzwYBrtA9DFA?label=Youtube%20Subscribers&logo=Alaydriem&style=flat-square)

<div align="center">

  <h1>Never a Rainy Day</h1>

<a href="https://www.youtube.com/@Alaydriem"><img src="https://raw.githubusercontent.com/alaydriem/bedrock-material-list/master/docs/subscribe.png" width="140"/></a>

  <p>
    <strong>Control the weather in your Minecraft Bedrock world!</strong>
  </p>
  <hr />
</div>

This Minecraft Bedrock 1.20 Behavior Pack allows you to control the weather in your world! You can use this pack on single-player to prevent rain, or thunderstorms; or on a server to let your server members control the weather without giving them access to `op` commands. You may want this pack if you want to control the weather, but don't want to give server members OP, or if you want to disable thunderstorms on worlds that have fire-spread enabled.

### Installation

Download the mcpack from the Github Releases Tag, then apply the Behavior Pack, along with Beta API's to your world.

> You MUST have Beta API's enabled.

### How Do I Use This Pack?

The pack exports a few commands:

#### Clear the Weather

If you need to clear the weather for any reason, you can run either the `!weather clear` or the `!wc` shorthang command.

```
!wc
!weather clear
```

#### Prevent Rain

If you want to prevent both rain and thunderstorms, you can run `!weather no-rain`

#### Prevent Thunderstorms

If you want to prevent thunderstorms, you can run `!weather no-thunder`. When this is run the weather will change to rain

#### Default

If you want the default Minecraft weather patterns, run `!weather default`

### How Does it Work?

The pack listens to the Minecraft Beta `world.beforeEvents.weatherChange` event, and prevents weather types from triggering
