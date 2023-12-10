<script>
  import {
    IconMenu2,
    IconHomeHeart,
    IconPresentationAnalytics,
    IconFileCertificate,
    IconBriefcase,
    IconCode,
  } from "@tabler/icons-svelte";
  let links = [
    { name: "Home", url: "/", icon: IconHomeHeart },
    {
      name: "Experiencia",
      url: "/experience",
      icon: IconPresentationAnalytics,
    },
    { name: "Estudios", url: "/studies", icon: IconFileCertificate },
    { name: "zona de juegos", url: "/sandbox", icon: IconBriefcase },
    { name: "Contact", url: "/contact", icon: IconCode },
  ];
</script>

<section class="flex justify-between">
  <button class="text-2xl bg-transparent border-none cursor-pointer">
    <IconMenu2></IconMenu2>
  </button>
  <img
    src="/profile.jpg"
    alt="una imagen de mix"
    class="w-12 h-12 rounded-full"
  />
</section>

<nav class="pt-4">
  <ul class="flex justify-between">
    {#each links as link}
      <li>
        <svelte:component this={link.icon} />
        <a href={link.url} class="hidden sm:block"> {link.name}</a>
      </li>
    {/each}
  </ul>
</nav>
