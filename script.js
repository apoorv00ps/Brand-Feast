let score = 0;

document.addEventListener("DOMContentLoaded", () => {

    document.querySelector('#play').addEventListener("click", () => {

        // Pick a new random video every time
        let random = Math.floor(Math.random() * 3);

        // Show video section
        const box = document.querySelector('#vid-box');
        box.style.display = "flex";
        box.style.opacity = 1;

        // Hide all videos first
        let videos = document.querySelectorAll('.video');
        videos.forEach(v => {
            v.pause();
            v.style.opacity = 0;
        });

        // Play the selected video
        videos[random].style.opacity = 1;
        videos[random].currentTime = 0;
        videos[random].play();

        // Add score
        score++;
        document.querySelector('#score').textContent = score;
    });

    document.querySelector('#vid-close').addEventListener("click", () => {

        const box = document.querySelector('#vid-box');
        box.style.opacity = 0;
        box.style.display = "none";

        // Pause all videos (safe)
        let videos = document.querySelectorAll('.video');
        videos.forEach(v => {
            v.pause();
            v.style.opacity = 0;
        });
    });

    document.querySelector('#redeem').addEventListener("click", ()=>{
        document.querySelector('#show-redeem').style.display = "flex";
        document.querySelector('#show-redeem').style.opacity = 1;
    });
    document.querySelector('#close-redeem').addEventListener("click", ()=>{
        document.querySelector('#show-redeem').style.display = "none";
        document.querySelector('#show-redeem').style.opacity = 0;
    });

    document.querySelector('#ham-burger').addEventListener("click", () =>{
        if (score>=10){
            score-=10;
            document.querySelector('#score').textContent = score;
            alert("Ham Burger redeemed.");
        }
        else{
            alert("Not enough score, watch more ads.");
        }
    });

    document.querySelector('#pizza').addEventListener("click", () =>{
        if (score>=50){
            score-=50;
            document.querySelector('#score').textContent = score;
            alert("Pizza redeemed.")
        }
        else{
            alert("Not enough score, watch more ads.");
        }
    });

    document.querySelector('#pasta').addEventListener("click", () =>{
        if (score>=15){
            score-=15;
            document.querySelector('#score').textContent = score;
            alert("Pasta redeemed.")
        }
        else{
            alert("Not enough score, watch more ads.");
        }
    });

    document.querySelector('#hot-dog').addEventListener("click", () =>{
        if (score>=20){
            score-=20;
            document.querySelector('#score').textContent = score;
            alert("Hot dog redeemed.")
        }
        else{
            alert("Not enough score, watch more ads.");
        }
    });
});
position: fixed;          /* fullscreen fix */
    top: 0;
    left: 0;