// user choose
// Selection---------------------------------------------------------------------------------------------------------
let ShowUserScore = document.querySelector(".user-score");
let score = 0;
let cmScore = 0;
let userScore = (document.getElementById("user-score").innerHTML = score);
let playArt = document.querySelector(".play-alert");
document.getElementById("plus-score").innerHTML = cmScore;
let showResult = document.querySelector(".show-result");
let newGame = document.getElementById("new-game");
let userTitle = document.getElementById("user-title");
let _imgs = document.querySelectorAll(".img");
let cmTitle = document.getElementById("cm-title");
// Start Coding-------------------------------------------------------------------------------------------------------
_imgs.forEach((img) => {
  img.addEventListener("click", (s) => {
    document.querySelectorAll(".img").forEach((val) => {
      val.style.border = "1px solid white";
    });
    s.target.style.border = "3px solid green";
    s.target.style.borderRadius = "100%";
    let userGetAtt = s.target.getAttribute("src");
    // computer Chooses
    const cmSelected = ["img/rock.jpg", "img/paper.jpg", "img/scissors.jpg"];
    let randomSelect = Math.floor(Math.random() * cmSelected.length);
    let cmChoose = cmSelected[randomSelect];
    document.getElementById("pic").innerHTML = `
            <img id='img' src = '${cmChoose}'>
        `;
    let cmAtt = document.getElementById("img").getAttribute("src");
    // tie---------------------------------------------------------------------------------------------------------------
    if (
      (userGetAtt == "img/rock.jpg" && cmAtt == "img/rock.jpg") ||
      (userGetAtt == "img/paper.jpg" && cmAtt == "img/paper.jpg") ||
      (userGetAtt == "img/scissors.jpg" && cmAtt == "img/scissors.jpg")
    ) {
      showResult.innerHTML = "Result : You tie";
      showResult.style.background = "#ca8a04";
      userTitle.style.color = "#000";
      cmTitle.style.color = "#000";
      //User Choose : rock-----------------------------------------------------------------------------------------------
    } else if (userGetAtt == "img/rock.jpg") {
      if (cmAtt == "img/scissors.jpg") {
        showResult.innerHTML = " Result : You win";
        showResult.style.background = "#16a34a";
        userTitle.style.color = "#15803d";
        cmTitle.style.color = "#dc2626";
        score = score + 1;
        document.getElementById("user-score").innerHTML = score;
      } else if (cmAtt == "img/paper.jpg") {
        showResult.innerHTML = "Result :  You lose";
        showResult.style.background = "#ef4444";
        userTitle.style.color = "#dc2626";
        cmTitle.style.color = "#15803d";
        cmScore = cmScore + 1;
        document.getElementById("plus-score").innerHTML = cmScore;
      }
      //User Choose : paper-----------------------------------------------------------------------------------------------
    } else if (userGetAtt == "img/paper.jpg") {
      if (cmAtt == "img/rock.jpg") {
        showResult.innerHTML = "Result : You win";
        showResult.style.background = "#16a34a";
        userTitle.style.color = "#15803d";
        cmTitle.style.color = "#dc2626";
        score = score + 1;
        document.getElementById("user-score").innerHTML = score;
      } else if (cmAtt == "img/scissors.jpg") {
        showResult.innerHTML = "Result :  You lose";
        showResult.style.background = "#ef4444";
        userTitle.style.color = "#dc2626";
        cmTitle.style.color = "#15803d";
        cmScore = cmScore + 1;
        document.getElementById("plus-score").innerHTML = cmScore;
      }
      // User Choose : scissors---------------------------------------------------------------------------------------------
    } else if (userGetAtt == "img/scissors.jpg") {
      if (cmAtt == "img/paper.jpg") {
        showResult.innerHTML = "Result :  You win ";
        showResult.style.background = "#16a34a";
        userTitle.style.color = "#15803d";
        cmTitle.style.color = "#dc2626";
        score = score + 1;
        document.getElementById("user-score").innerHTML = score;
      } else if (cmAtt == "img/rock.jpg") {
        showResult.innerHTML = "Result :  You lose ";
        showResult.style.background = "#ef4444";
        userTitle.style.color = "#dc2626";
        cmTitle.style.color = "#15803d";
        cmScore = cmScore + 1;
        document.getElementById("plus-score").innerHTML = cmScore;
      }
    }
    let userSumScores = document.getElementById("user-score").innerHTML;
    let cmSumScores = document.getElementById("plus-score").innerHTML;
    if (userSumScores == 5) {
      playArt.style.transform = "translateY(20%)";
      playArt.style.background = "#15803d";
      newGame.addEventListener("click", (e) => {
        document.location.reload();
        return false;
      });
    } else if (cmSumScores == 5) {
      playArt.style.transform = "translateY(20%)";
      playArt.innerHTML = `
               <h2>Game Over!</h2>
               <div>
                  <span>Play New Game ? </span><span id="new-game"><i class="bi bi-arrow-clockwise"></i></span>
                </div>
              `;
      playArt.style.background = "#b91c1c";
      document.getElementById("new-game").addEventListener("click", () => {
        document.location.reload();
        return false;
      });
    }
  });
});
