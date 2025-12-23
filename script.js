
        const num1= 14; 
        const num2 = 120; 
        const num3 = 76; 





        document.getElementById('sessionID').innerText = Math.random().toString(36).substr(2, 9).toUpperCase();
        
        function startDraw() {
            const resultsDiv = document.getElementById('results');
            const loader = document.getElementById('loader');

            resultsDiv.innerHTML = '';
            loader.style.display = 'block';

            setTimeout(() => {
                loader.style.display = 'none';
                generateNumbers();
            }, 2000);
        }

        function generateNumbers() {
            const min = parseInt(document.getElementById('min').value);
            const max = parseInt(document.getElementById('max').value);
            let qty = parseInt(document.getElementById('qty').value);
            const resultsDiv = document.getElementById('results');
            
            let output = [];

            if (num1 && num1 >= min && num1 <= max) {
                output.push(num1,num2,num3);
                qty--; 
            }


            output.forEach((num, index) => {
                setTimeout(() => {
                    const div = document.createElement('div');
                    div.className = index === 0 ? 'result-ball winner' : 'result-ball';
                    div.id = index === 0 ? 'main-winner' : '';
                    div.innerText = num;
                    resultsDiv.appendChild(div);
                    if (index === output.length - 1) {
                        triggerCelebration();
                    }
                }, index * 300); 
            });
        }

        function triggerCelebration() {

            const winnerBall = document.getElementById('main-winner');
            if(winnerBall) {
                setTimeout(() => {
                    winnerBall.classList.add('celebrate');
                }, 200);
            }

            var end = Date.now() + (3 * 1000);

            var colors = ['#3b82f6', '#fbbf24', '#ffffff']; 

            (function frame() {
                confetti({
                    particleCount: 3,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: colors
                });
                confetti({
                    particleCount: 3,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: colors
                });

                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            }());
        }