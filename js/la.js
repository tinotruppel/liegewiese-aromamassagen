$(document).ready(function() {
    $("img.box").fancybox();
    $("a.box").fancybox({
        'hideOnContentClick': false
    });

    const quotation = quotations[Math.floor(Math.random()*quotations.length)];
    $("#content").append('<div class="quotation"><div>"' + quotation.text + '"</div><div class="author">' + quotation.author + '</div></div>');

    // Hamburger menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) { // Check if elements exist
        // Toggle menu on button click
        navToggle.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent this click from bubbling to document
            navLinks.classList.toggle('nav-open');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            // If click is outside the navigation
            if (navLinks && navLinks.classList.contains('nav-open') && 
                !navLinks.contains(e.target) && 
                e.target !== navToggle) {
                navLinks.classList.remove('nav-open');
            }
        });
        
        // Prevent clicks inside the menu from closing it
        navLinks.addEventListener('click', function(e) {
            e.stopPropagation(); // Stops the click from reaching the document
        });
    }
});

const quotations = [
    {
        "text": "Der Weg zur Gesundheit ist täglich ein aromatisches Bad und eine duftende Massage.",
        "author": "Hippokrates, griechischer Vater der Heilkunst"
    },
    {
        "text": "Rhythmisch sanfte Hände laden ein zum Träumen und Wohlsein.",
        "author": "Redensart"
    },
    {
        "text": "Das Leben eines Menschen ist das, was seine Gedanken daraus machen.",
        "author": "Marc Aurel"
    },
    {
        "text": "Alles ist in uns selbst vorhanden.",
        "author": "Meng Dse"
    },
    {
        "text": "Erzähle mir und ich vergesse. Zeige mir und ich erinnere mich. Lass mich tun und ich verstehe!",
        "author": "Konfuzius"
    },
    {
        "text": "Es kann sein, dass wir durch das Wissen anderer gelehrter werden - weiser werden wir nur durch uns selbst.",
        "author": "Michel de Montaigne"
    },
    {
        "text": "Wir selbst müssen die Veränderung sein, die wir in der Welt sehen wollen.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Wer andere erkennt, ist gelehrt. Wer sich selber erkennt ist weise.",
        "author": "Laotse"
    },
    {
        "text": "Du bist deine eigene Grenze. Erhebe dich darüber.",
        "author": "S. M. Hafes"
    },
    {
        "text": "Suche nicht andere, sondern dich selbst zu übertreffen.",
        "author": "Marcus Tullius Cicero"
    },
    {
        "text": "Auch der Weiseste kann unermesslich viel von Kinder lernen.",
        "author": "Rudolf Steiner"
    },
    {
        "text": "Es ist ganz wichtig, nicht aufzuhören zu fragen. Neugier existiert aus ureigensten Gründen. Man kann nicht anders, als zu staunen, wenn man die Geheimnisse der Ewigkeit des Lebens, der grandiosen Struktur der Realität ansieht. Es reicht nicht aus, jeden Tag nur zu verstehen, etwas von diesem Mysterium zu begreifen. Verliere nie deine heilige Neugier!",
        "author": "Albert Einstein"
    },
    {
        "text": "Die Weisheit ist nur in der Wahrheit.",
        "author": "Johann Wolfgang von Goethe"
    },
    {
        "text": "Jedes Ding hat drei Seiten: Eine, die du siehst, eine, die ich sehe und eine, die wir beide nicht sehen.",
        "author": "Redensart"
    },
    {
        "text": "Es gibt also drei Wahrheiten: Meine Wahrheit, deine Wahrheit und die Wahrheit.",
        "author": "Weisheit aus Asien"
    },
    {
        "text": "Es ist keine bessere Harmonie, als wenn Herz und Mund übereinstimmen.",
        "author": "Julius Wilhelm Zncgref"
    },
    {
        "text": "Überall geht ein frühes Ahnen dem späteren Wissen voraus.",
        "author": "Alexander von Humboldt"
    },
    {
        "text": "Man kann vieles unbewusst wissen, indem man es nur fühlt, aber nicht weiß.",
        "author": "Fjodor Dostojewski"
    },
    {
        "text": "Alle Dinge entstehen aus einer Ursache. Wer dies erkennt, der sieht die Wahrheit.",
        "author": "Buddha"
    },
    {
        "text": "Wer den Zweig untersucht und die Wurzel vergisst, geht in die Irre.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Dem Herz, das ehrlich ist, öffnen sich selbst Steine.",
        "author": "Lju Hsjuang"
    },
    {
        "text": "Verantwortlich ist man nicht nur für das, was man tut, sondern auch für das was man unterlässt.",
        "author": "Laotse"
    },
    {
        "text": "Und die Weisen sagen: Beurteile niemand, bis du an seiner Stelle gestanden hast.",
        "author": "Johann Wolfgang von Goethe"
    },
    {
        "text": "Wo Vertrauen ist, da genügen wenige Worte.",
        "author": "Redensart"
    },
    {
        "text": "Strahlende Augen erblicken eine strahlende Welt.",
        "author": "Charles Tchopp"
    },
    {
        "text": "Nicht unsere Stimmungen prägen unsere Gedanken: unsere Gedanken entscheiden über unsere Stimmungen.",
        "author": "Aron T. Beck"
    },
    {
        "text": "Wer ständig glücklich sein möchte, muss sich oft verändern.",
        "author": "Konfuzius"
    },
    {
        "text": "Humor ist gesunder Menschenverstand, der tanzt.",
        "author": "Aus England"
    },
    {
        "text": "Verstand und Genie rufen Achtung und Hochschätzung hervor. Witz und Humor erwecken Liebe und Zuneigung.",
        "author": "David Hume"
    },
    {
        "text": "Wenn man den Humor eines Menschen kennt, sieht man in sein Herz.",
        "author": "Helmut Thielicke"
    },
    {
        "text": "Selbst eine schwere Tür hat nur einen kleinen Schlüssel.",
        "author": "Charles Dickens"
    },
    {
        "text": "Wenn du aufhörst, es zu suchen, findest du das Glück.",
        "author": "Johann Wolfgang von Goethe"
    },
    {
        "text": "Das Glück ist wie ein Schmetterling: Jag ihm nach, und er entwischt dir - setz dich hin, und er setzt sich auf deine Schulter. Was soll ich also tun, um das Glück zu erlangen? Hör auf, hinter ihm herzulaufen. Aber gibt es nichts, was ich tun kann? Du könntest versuchen, dich ruhig hinzusetzen, wenn du es wagst.",
        "author": "Aus China"
    },
    {
        "text": "Der Mensch braucht Stunden, wo er sich sammelt und in sich hinein lebt.",
        "author": "Albert Schweizer"
    },
    {
        "text": "Ein erfahrener Mönch ward gefragt: 'Viel beschäftigt bist du, doch allzeit gesammelt. Was ist dein Geheimnis?' Dieser antwortet: 'Wenn ich stehe, dann stehe ich. Wenn ich gehe, dann gehe ich. Wenn ich sitze, dann sitze ich. Wenn ich esse, dann esse ich. Wenn ich spreche, dann spreche ich.' Da fielen ihm die Fragesteller ins Wort und sagten: 'Das gleiche tun wir auch. Wie kommt es, dass du glücklich bist in all dem, wir aber nicht?' Er antwortet: 'Vielleicht ist dies der Grund: Wenn ihr steht, dann geht ihr schon. Wenn ihr geht, dann lauft ihr schon, Wenn ihr lauft, dann seid ihr schon am Ziel.'",
        "author": "Nach einer Zen-Überlieferung"
    }
]