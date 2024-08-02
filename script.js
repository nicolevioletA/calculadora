        function calculateAge() {
            var birthdate = document.getElementById('birthdate').value;

            if (!birthdate) {
                alert('Por favor, ingrese su fecha de nacimiento. Este campo es obligatorio.');
                return;
            }

            var birthdateObj = new Date(birthdate);
            var currentDate = new Date();

            if (birthdateObj >= currentDate) {
                alert('La fecha de nacimiento debe ser menor a la fecha actual.');
                return;
            }

            var ageInYears = currentDate.getFullYear() - birthdateObj.getFullYear();
            var birthMonth = birthdateObj.getMonth();
            var currentMonth = currentDate.getMonth();

            if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate.getDate() < birthdateObj.getDate())) {
                ageInYears--;
            }

            var ageInMonths = (currentDate.getMonth() - birthdateObj.getMonth()) + (12 * (currentDate.getFullYear() - birthdateObj.getFullYear()));
            if (currentDate.getDate() < birthdateObj.getDate()) {
                ageInMonths--;
            }

            var ageInDays = Math.floor((currentDate - birthdateObj) / (1000 * 60 * 60 * 24));
            var ageInHours = Math.floor((currentDate - birthdateObj) / (1000 * 60 * 60));

            var result = `Ha vivido aproximadamente:<br>
                          ${ageInYears} años,<br>
                          ${ageInMonths} meses,<br>
                          ${ageInDays} días,<br>
                          ${ageInHours} horas.`;

            document.getElementById('result').innerHTML = result;

            $('#resultModal').modal('show');
        }
