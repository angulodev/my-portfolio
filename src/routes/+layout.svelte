<script>
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "../lib/components/Footer.svelte";
</script>

<Navbar></Navbar>
<div class="px-8">
  <slot />
</div>
<Footer year={new Date().getFullYear()}></Footer>
