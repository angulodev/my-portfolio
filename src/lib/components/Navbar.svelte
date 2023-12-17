<script>
  import {
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
    { name: "zona de juegos", url: "/sandbox", icon: IconCode },
    { name: "Proyectos", url: "/proyect", icon: IconBriefcase },
  ];
</script>

<nav class="py-6 mx-8">
  <ul
    class="flex justify-between rounded-3xl py-4 px-4 bg-primary-200 md:mx-40"
  >
    {#each links as link}
      <li>
        <a href={link.url} class="flex">
          <svelte:component this={link.icon} color="#fff" />
          <span class="hidden sm:block pl-4">
            {link.name}
          </span>
        </a>
      </li>
    {/each}
  </ul>
</nav>
