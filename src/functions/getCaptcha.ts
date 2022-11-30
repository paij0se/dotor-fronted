import mainUrl from "../../config";

async function captcha(): Promise<void> {
  const c: HTMLImageElement = document.getElementById(
    "captcha"
  ) as HTMLImageElement;
  c.src = "skull.gif";
  const res = await fetch(`${mainUrl}api/v1/get/captcha`);
  const image = res.url;
  console.log(image);
  c.src = image;
}

export default captcha;
