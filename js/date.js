        function loadLiveDateText() {
            const divLiveDateText = document.getElementById("divLiveDateText");

            const currentDate = new Date();

            const formattedDate = currentDate.toLocaleDateString("hu-HU", {
                weekday: "long",
                month: "long",
                day: "numeric"
            });

            divLiveDateText.textContent = formattedDate;
        }

        loadLiveDateText();