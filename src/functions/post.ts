import unixTimeToDate from "../functions/convertUnixtime";
import mainUrl from "../../config";

async function doPost(): Promise<void> {
  const inp = document.getElementById("post-text") as HTMLInputElement;
  var name = document.getElementById("name") as HTMLInputElement;
  console.log(name.value.length);
  if (name.value == "") {
    name.value = "Anon";
    console.log("Te llamaras anon entonces...");
  }
  if (inp.value == "") {
    alert("Tu texto está vacio!");
    window.location.reload();
  } else {
    if (name.value.length > 32) {
      alert("¡El máximo permitido para el nombre son 32 caracteres!");
      window.location.reload();
    } else {
      const res: Response = await fetch(`${mainUrl}api/v1/post`, {
        method: "POST",
        body: JSON.stringify({ text: inp.value, name: name.value }),
        headers: {
          "content-type": "application/json",
        },
      });
      const json: any = await res.json();
      if (json[0] == "cerror") {
        json.user_id = `<h1 style="color:#B22222;">${json[1]}</h1>`;
        json.posted_at = -15059544297;
        alert("No has resuelto el Captcha, intentalo de nuevo");
        window.location.reload();
      }

      if (json[0] == "error") {
        json.user_id = `
        <img width=20%; height=auto  ; src="nao.jpg">
        <h1 style="color:#B22222;">!Error¡ Solo 818 caracteres o menos</h1>
        <h1 style="color:#B22222;">${json[1]}</h1>
        `;
        json.posted_at = -15059544297;
      }
      // TODO: Mover esto a Svelte realmente...
      const response = document.getElementById("response") as HTMLDivElement;
      response.innerHTML = ` 
        <p>${unixTimeToDate(json.posted_at)}</p>
        <p>${json.user_id}</p>
        <h1>¡Enviado!</h1>
        `;
      await new Promise((r) => setTimeout(r, 500));
      window.location.reload();
    }
  }
}

export default doPost;
