    // Funktion, die das Menü ein- oder ausblendet
    function toggleMenu() {
        const menu = document.getElementById('menu');
        menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    }

    // Funktion, die zum "Language"-Bereich scrollt
    function scrollToLanguage() {
        document.getElementById('language').scrollIntoView({ behavior: 'smooth' });
    }

    // Funktion, die das Menü schließt, wenn irgendwo außerhalb des Menüs geklickt wird
    window.addEventListener('click', function(event) {
        const menu = document.getElementById('menu');
        const menuButton = document.querySelector('.menu-button');

        // Überprüfen, ob der Klick nicht auf das Menü oder den Menü-Button erfolgt
        if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
            menu.style.display = 'none';  // Menü einklappen
        }
    });
    
// Impressum overlay 
    document.addEventListener('DOMContentLoaded', function() {
        const overlay = document.getElementById('impressumOverlay');
        const impressumLink = document.getElementById('openImpressum');
    
        impressumLink.addEventListener('click', function(event) {
            event.preventDefault();
            overlay.style.display = 'flex'; // 'flex' wird verwendet, um den Inhalt zu zentrieren
        });
    
        overlay.addEventListener('click', function(event) {
            // Schließt das Overlay, wenn auf den Hintergrund (nicht den Inhalt) geklickt wird
            if (event.target === overlay) {
                overlay.style.display = 'none';
            }
        });
    })
    
       document.addEventListener('DOMContentLoaded', function() {
            const overlay = document.getElementById('dataOverlay');
            const impressumLink = document.getElementById('openDataprivacy');
        
            impressumLink.addEventListener('click', function(event) {
                event.preventDefault();
                overlay.style.display = 'flex'; // 'flex' wird verwendet, um den Inhalt zu zentrieren
            });
        
            overlay.addEventListener('click', function(event) {
                // Schließt das Overlay, wenn auf den Hintergrund (nicht den Inhalt) geklickt wird
                if (event.target === overlay) {
                    overlay.style.display = 'none';
                }
            });
        })