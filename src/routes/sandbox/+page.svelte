<script>
  let projects = [
    { image: "https://placehold.co/600x400", url: "/#" },
    { image: "https://placehold.co/600x400", url: "/#" },
    { image: "https://placehold.co/600x400", url: "/#" },
    { image: "https://placehold.co/600x400", url: "/#" },
    { image: "https://placehold.co/600x400", url: "/#" },
    { image: "https://placehold.co/600x400", url: "/#" },
    { image: "https://placehold.co/600x400", url: "/#" },
    { image: "https://placehold.co/600x400", url: "/#" },
    { image: "https://placehold.co/600x400", url: "/#" },
  ];
</script>

<div class="py-4">
  <h1 class="text-4xl font-bold pb-2">Zona de juegos</h1>
  <p class="text-lg">
    Aquí puedes encontrar algunos proyectos pequeños que he realizado en mi
    tiempo libre, para mejorar alguna habilidad en específico o simplemente por
    diversión.
  </p>
</div>
<div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center pb-8">
  {#each projects as project}
    <a href={project.url} class="block">
      <div class="rounded-lg overflow-hidden shadow-md md:w-96">
        <img
          src={project.image}
          alt="imagen de proyecto"
          class="w-full h-auto"
        />
      </div>
    </a>
  {/each}
</div>
