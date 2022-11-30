import unixTimeToDate from "./convertUnixtime";
import mainUrl from "../../config";

// muestra los posts
function showPosts() {
  const res = fetch(`${mainUrl}api/v1/get`);
  res
    .then((a) => {
      return a.json();
    })
    .then((posts) => {
      for (let i = 0; i < posts.length; i++) {
        const postName: string = posts[i]["name"];
        const postText: string = posts[i]["text"];
        const postBoard = document.getElementById("posts") as HTMLDivElement;
        postBoard.innerHTML += `
          <div id="response"></div>          
          <p>${unixTimeToDate(posts[i]["posted_at"])}</p>
          <details>
          <summary>More info</summary>
          <p>user: @${posts[i]["user_id"]}</p> 
          <p>post: ${posts[i]["post_id"]}</p> 
          </details>
          `;
        // Esto se hace para que no se ejecute el html :+1:
        postBoard.innerHTML += postName.replace(
          /</g,
          `<code><span><</span></code>`
        );
        postBoard.innerHTML += `<br/ >`;
        postBoard.innerHTML += postText.replace(
          /</g,
          `<code><span><</span></code>`
        );
      }
    });
}

export default showPosts;
