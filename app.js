<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Player Substitution</title>
</head>
<body>
    <h1>Player Substitution</h1>
    <p>Select a player from the current team and a substitute to make a substitution.</p>
    <div>
        <h2>Current Team</h2>
        <ul id="currentTeam"></ul>
    </div>
    <div>
        <h2>Substitutes</h2>
        <ul id="substitutes"></ul>
    </div>
    <button id="substituteBtn">Substitute</button>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const currentTeam = document.getElementById('currentTeam');
            const substitutes = document.getElementById('substitutes');
            const substituteBtn = document.getElementById('substituteBtn');

            // Initialize empty arrays for current team and substitutes
            const currentTeamPlayers = [];
            const substitutePlayers = [];

            // Prompt for player input for the current team
            for (let i = 1; i <= 8; i++) {
                const playerName = prompt(`Enter the name of player ${i}`);
                currentTeamPlayers.push(playerName);
            }

            // Prompt for player input for the substitutes
            for (let i = 1; i <= 8; i++) {
                const playerName = prompt(`Enter the name of substitute ${i}`);
                substitutePlayers.push(playerName);
            }

            // Function to populate player lists
            function populatePlayerLists() {
                currentTeam.innerHTML = currentTeamPlayers.map(player => `<li>${player}</li>`).join('');
                substitutes.innerHTML = substitutePlayers.map(player => `<li>${player}</li>`).join('');
            }

            populatePlayerLists();

            // Function to handle player substitution
            function substitutePlayer() {
                const selectedSubstitute = substitutes.querySelector('li.active');
                if (selectedSubstitute) {
                    const playerToSubstitute = currentTeam.querySelector('li.active');
                    if (playerToSubstitute) {
                        const substituteName = selectedSubstitute.textContent;
                        const playerName = playerToSubstitute.textContent;

                        // Perform the substitution logic here
                        console.log(`Substituting ${substituteName} for ${playerName}`);

                        // Update the player lists and remove the 'active' class
                        currentTeamPlayers[currentTeamPlayers.indexOf(playerName)] = substituteName;
                        substitutePlayers[substitutePlayers.indexOf(substituteName)] = playerName;
                        selectedSubstitute.classList.remove('active');
                        playerToSubstitute.classList.remove('active');

                        // Repopulate the player lists
                        populatePlayerLists();
                    }
                }
            }

            substituteBtn.addEventListener('click', substitutePlayer);

            // Add click event listeners to player items for selection
            currentTeam.querySelectorAll('li').forEach(player => {
                player.addEventListener('click', () => {
                    currentTeam.querySelectorAll('li').forEach(p => p.classList.remove('active'));
                    player.classList.add('active');
                });
            });

            substitutes.querySelectorAll('li').forEach(player => {
                player.addEventListener('click', () => {
                    substitutes.querySelectorAll('li').forEach(p => p.classList.remove('active'));
                    player.classList.add('active');
                });
            });
        });
    </script>
</body>
</html>

