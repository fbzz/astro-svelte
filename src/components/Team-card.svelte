<script lang="ts">
  import type { PlayerInfo } from "../models/player";

  export let playerData: PlayerInfo;
  let colors = "black";

  const teamColors: { [key: string]: string } = {
    "Bayern Munich": "from-red-600 to-yellow-400",
    "Manchester City": "from-blue-500 to-blue-800",
    "Paris Saint German": "from-blue-700 to-red-600",
    Barcelona: "from-red-700 to-blue-500",
    Liverpool: "from-red-800 to-teal-500",
    "Real Madrid": "from-white to-black",
    Chelsea: "from-blue-700 to-blue-400",
    "Inter Milan": "from-blue-700 to-yellow-500",
    "Manchester United": "from-red-800 to-yellow-300",
  };

  $: {
    colors = teamColors[playerData.team];
  }
</script>

<div
  class="animate__animated animate__fadeInTopLeft flex flex-col rounded-lg p-3 m-2 bg-gradient-to-tl backdrop-blur-2lg {colors} w-full h-36 shadow-lg shadow-zinc-500/40 relative justify-between"
>
  <h1 class="text-white font-bold text-xl">
    {playerData.name}
  </h1>
  <h1 class="text-white font-bold text-xl">
    {playerData.team}
  </h1>
  <h1 class="absolute right-2 text-white text-2xl font-bold">
    {playerData.position}º
  </h1>
  <div class="flex flex-row text-white font-bold self">
    <div class="flex flex-col flex-1">
      <span class="text-md">Points</span>
      <span class="text-sm">38</span>
    </div>
    <div class="flex flex-col flex-1">
      <span class="text-md">GF</span>
      <span class="text-sm">38</span>
    </div>
    <div class="flex flex-col flex-1">
      <span class="text-md">Games</span>
      <span class="text-sm">38</span>
    </div>
  </div>
</div>
