<script lang="ts">
  import type { GameInfo } from "../models/player";

  export let gameInfo: GameInfo;

  let { player1, player2, result, date } = gameInfo;
</script>

<div
  class="flex flex-row animate__animated animate__fadeInUpBig items-center rounded-2xl p-5 m-2 bg-gradient-to-tl backdrop-blur-2lg w-full h-36 shadow-lg shadow-zinc-600/10 bg-zinc-800 border-gray-700 relative justify-between"
>
  <div class="flex flex-col flex-1 text-center font-semibold">
    <span>{player1.name}</span>
    <span>{player1.team}</span>
  </div>
  <div class="flex flex-col flex-1 text-center">
    <span
      class="bg-clip-text text-transparent bg-gradient-to-r from-orange-300 via-orange-300 to-orange-600"
      >{result.player1} X {result.player2}</span
    >
    <span class="text-xs">{date}</span>
  </div>
  <div class="flex flex-col flex-1 text-center font-semibold">
    <span>{player2.name}</span>
    <span>{player2.team}</span>
  </div>
</div>
