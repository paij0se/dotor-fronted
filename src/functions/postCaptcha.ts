import mainUrl from "../../config";

async function postCaptcha(): Promise<void> {
  const input: HTMLInputElement = document.getElementById(
    "c-post"
  ) as HTMLInputElement;
  if (input.value == "") {
    alert("Tienes que rellenar el captcha!");
  } else {
    const res: Response = await fetch(`${mainUrl}api/v1/post/captcha`, {
      method: "POST",
      body: JSON.stringify({ word: input.value }),
      headers: {
        "content-type": "application/json",
      },
    });
    const json: string = await res.json();
    const captchaStatus: HTMLDivElement = document.getElementById(
      "captcha-status"
    ) as HTMLDivElement;

    if (json == "ok") {
      captchaStatus.innerHTML = `<h1 style="color:green;">Correcto👍</h1>`;
    } else {
      captchaStatus.innerHTML = `<h1 style="color:#B22222;">${json}</h1>`;
      await new Promise((r) => setTimeout(r, 1000));
      window.location.reload();
    }
  }
}

export default postCaptcha;
