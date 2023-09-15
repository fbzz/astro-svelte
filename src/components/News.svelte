<script lang="ts">
  import { Image } from "astro:assets";
  import type { SectionNew } from "../models/player";

  export let sectionNew: SectionNew;

  let { title, text, author } = sectionNew;
</script>

<div class="block w-full border mt-3 shadow bg-zinc-800 border-gray-700">
  <div class="p-6">
    <h5
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      {title}
    </h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">
      {text}
    </p>
  </div>
  <div class="rounded-t-lg w-full" />
</div>
