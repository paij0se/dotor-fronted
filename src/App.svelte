<script lang="ts">
  import Button from "./Button.svelte";
  import postCaptcha from "./functions/postCaptcha";
  import captcha from "./functions/getCaptcha";
  import showPosts from "./functions/showPosts";
  import doPost from "./functions/post";
  const theme = localStorage.getItem("theme");
  window.document.body.classList.toggle(theme);
  showPosts();
</script>

<main>
  <title>DotorChan</title>
  <h1>DotorChan</h1>
  <!-- svelte-ignore missing-declaration -->
  <Button>Cambiar tema</Button>
  <p>
    <a href="https://github.com/paij0se/dotor"
      >Código fuente de está porquería</a
    >
  </p>
  <br />
  <details>
    <summary id="gay">Hacer un post</summary>
    <div id="captcha-container">
      <!-- svelte-ignore missing-declaration -->
      <button type="button" id="pedir-c" on:click|once={captcha}
        >Pedir Captcha</button
      >
      <!-- svelte-ignore a11y-missing-attribute -->
      <img id="captcha" />
      <div id="captcha-status" />
      <input placeholder="Captcha" id="c-post" />
      <!-- svelte-ignore missing-declaration -->
      <button type="button" id="enviar-c" on:click|once={postCaptcha}
        >Enviar Captcha</button
      >
    </div>
    <br />
    <br />
    <input id="name" placeholder="Anónimo" />
    <br />
    <textarea rows="10" id="post-text" placeholder="¿Qué estas pensando?" />
    <!-- svelte-ignore missing-declaration -->
    <button type="button" id="post-b" on:click|once={doPost}>Enviar</button>
    <div id="response-b" />
  </details>
  <h1>Posts</h1>
  <div id="posts" />
</main>

<style>
  @import url("https://cdn.jsdelivr.net/npm/@xz/fonts@1/serve/cascadia-code.min.css");
  :global(body.dark-mode) {
    background-color: #1f1d27;
    color: #e0def4;
    transition: background-color 1s;
  }
  :global(body) {
    background-color: #fffaf3;
    color: #c4a7e7;
    transition: background-color 1s;
  }
  h1 {
    font-family: "Cascadia Code";
  }

  p {
    font-family: "Cascadia Code";
    font-weight: 600;
  }

  #gay {
    font-family: "Cascadia Code";
    font-size: 2em;
    font-weight: bold;
    background-image: linear-gradient(
      to right,
      red,
      orange,
      yellow,
      green,
      blue,
      indigo,
      violet,
      red,
      orange,
      yellow,
      green,
      blue,
      indigo,
      violet
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: rainbow-animation 70s linear infinite;
  }

  @keyframes rainbow-animation {
    to {
      background-position: 4500vh;
    }
  }
</style>
