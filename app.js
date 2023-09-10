document.addEventListener('DOMContentLoaded', function () {
    const currentTeam = document.getElementById('currentTeam');
    const substitutes = document.getElementById('substitutes');
    const substituteBtn = document.getElementById('substituteBtn');

    // Sample data for current team and substitutes
    const currentTeamPlayers = ['Player 1', 'Player 2', 'Player 3'];
    const substitutePlayers = ['Substitute 1', 'Substitute 2', 'Substitute 3'];

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
