(function() {
     const weapon = [`rock`, `paper`, `scissors`]

     const setRock = document.querySelector(`.rock`)
     const setPaper = document.querySelector(`.paper`)
     const setScissors = document.querySelector(`.scissors`)
     const output = document.querySelector(`.output-main`)
     let winner = ``
     let round = 0

     const buttons = document.querySelectorAll(`button`)
          buttons.forEach((button) => {
               button.addEventListener(`click`, game)
     })

     class Player {
          constructor(weapon) {
               this.weapon = weapon
          }
          output = ``
          score = ``
          setOutput() {
               throw new Error(`Some problem occured`)
          }
          setWeapon() {
               throw new Error(`Something went wrong`)
          }
          setScore() {
               throw new Error(`Sadly, errors everywhere`)
          }
     }

     const user = new Player
     const ai = new Player

     user.output = document.querySelector(`.output-player`)
     ai.output = document.querySelector(`.output-computer`)

     user.score = document.querySelector(`.score-player`)
     ai.score = document.querySelector(`.score-computer`)

     user.score.value = 0
     ai.score.value = 0

     user.score.textContent = `Player: ${user.score.value}`
     ai.score.textContent = `Bayley: ${ai.score.value}`
     

     function game(e, w) {
               if (e.target == setRock) {
                    w = `rock`
               } else if (e.target == setPaper) {
                    w = `paper`
               } else  if (e.target == setScissors){
                    w = `scissors`
               }
          ai.setWeapon()               
          user.setWeapon(w);  
          setOutput()
          
          checkWinner()
          setWinner()          
          checkScore()

          addRound()
          checkRound()
     }

     user.setWeapon = function(w) {
               if (w == `rock`) {
                    return user.weapon = `rock`
               } else if (w == `paper`) {
                    return user.weapon = `paper`
               } else if (w == `scissors`) {
                    return user.weapon = `scissors`
               }
     }

     ai.setWeapon = function() {
                 if (random() < 0.33) {
                    return ai.weapon = weapon[0]
               } else if (random() > 0.66 ) {
                    return ai.weapon = weapon[2]
               } else {
                    return ai.weapon = weapon[1]
               }   
     }

     function setOutput() {
          user.setOutput = function(w) {
               w = capitalize(user.weapon)
               user.output.textContent = `Your weapon: `
               user.output.textContent += `${w}`
          }
          ai.setOutput = function(w) {
               w = capitalize(ai.weapon)
               ai.output.textContent = `Bayley's weapon: `
               ai.output.textContent += `${w}`
          }
          user.setOutput()
          ai.setOutput()
          output.textContent = checkWinner()
     }

     function checkWinner() {
          if (user.weapon === ai.weapon){
               return `Draw`
          } 
          if (user.weapon == `rock` && (ai.weapon == `scissors`)) {
               return `Player wins`
          } else if (user.weapon == `paper` && (ai.weapon == `rock`)) {
               return `Player wins`
          } else if (user.weapon == `scissors` && (ai.weapon == `paper`)) {
               return `Player wins`
          } else if (user.weapon !== ai.weapon) {
               return `Bayley wins`
          }
     }

     function setWinner() {
          if (checkWinner() === `Player wins`) {
               winner = `user`
          } else if (checkWinner() === `Bayley wins`) {
               winner = `ai`
          }
     }

     function checkScore() {
          if (winner === `user`) {
               user.score.value += 1
               user.score.textContent = `Player: ${user.score.value}`
          } else if (winner === `ai`) {
               ai.score.value += 1
               ai.score.textContent = `Bayley: ${ai.score.value}`
          }
     }

     function addRound() {
          round += 1
     }

     function checkRound() {
          if (round === 5) {
               if (user.score.value > ai.score.value) {
                    output.textContent = `YOU WON!`
               } else if (ai.score.value > user.score.value) {
                    output.textContent = `SHE WON! TRY AGAIN!`
               } else {
                    output.textContent = `DRAFT`
               }
               stop()
          }
     }


     function stop() {
          round = 0
          winner = ``
          user.score.value = 0
          ai.score.value = 0
          user.score.textContent = `Player: ${ai.score.value}`
          ai.score.textContent = `Bayley: ${ai.score.value}`
     }


     function random() {
          return Math.random()
     }

     function capitalize(s) {
          return s.charAt(0).toUpperCase() + s.slice(1);
     }

})()
     
