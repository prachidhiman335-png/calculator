
let input = document.getElementById('inputBox');

let buttons = document.querySelectorAll('button');

let string = "";

let arr = Array.from(buttons);

arr.forEach(button => {

    button.addEventListener('click', (e) => {

        let value = e.target.innerHTML;

        if (value === '=') {

            try {
                if (string.trim() !== "") {
                    string = String(eval(string));
                    input.value = string;
                }
            } 
            catch (error) {
                input.value = "Error";
                string = "";
            }

        }

        else if (value === 'AC') {

            string = "";
            input.value = "";

        }

        else if (value === 'DEL') {

            string = string.substring(0, string.length - 1);
            input.value = string;

        }

        else if (value === ',') {

            // Comma button ko filhal ignore karenge

        }

        else {

            string += value;
            input.value = string;

        }

    });

});
