<script>
  import {
    IconMenu2,
    IconMail,
    IconHomeHeart,
    IconPresentationAnalytics,
    IconFileCertificate,
    IconBriefcase,
    IconCode,
  } from "@tabler/icons-svelte";
</script>

<header class="flex h-full justify-between m-4">
  <div class="flex items-center gap-4">
    <div class="border rounded-md cursor-pointer">
      <IconMenu2 size={48}></IconMenu2>
    </div>
    <p class="text-sm">AnguloDEV</p>
  </div>
  <div class="flex items-center gap-4">
    <IconMail size={32}></IconMail>
    <a href="/">
      <img
        class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
    </a>
  </div>
</header>

<section class="mx-4">
  <nav class="flex gap-4 justify-around">
    <a href="/" class="flex items-center gap-4"
      ><IconHomeHeart size={24}></IconHomeHeart> Home</a
    >
    <a href="/" class="flex items-center gap-4">
      <IconPresentationAnalytics size={24}></IconPresentationAnalytics>
      Experiencia</a
    >
    <a href="/" class="flex items-center gap-4">
      <IconFileCertificate size={24}></IconFileCertificate>
      Estudios</a
    >
    <a href="/" class="flex items-center gap-4">
      <IconCode size={24}></IconCode> Sandbox</a
    >
    <a href="/" class="flex items-center gap-4"
      ><IconBriefcase size={24}></IconBriefcase>Proyectos</a
    >
  </nav>
</section>
