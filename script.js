const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");
const gamesGrid = document.getElementById("games-grid");
const gearGrid = document.getElementById("gear-grid");
const itemModal = document.getElementById("item-modal");
const modalClose = document.getElementById("modal-close");
const modalImage = document.getElementById("modal-image");
const modalBrand = document.getElementById("modal-brand");
const modalTitle = document.getElementById("modal-title");
const modalPrice = document.getElementById("modal-price");
const modalTags = document.getElementById("modal-tags");
const modalDescription = document.getElementById("modal-description");
const modalDetails = document.getElementById("modal-details");
const modalGallery = document.getElementById("modal-gallery");
const requirementsWrap = document.getElementById("requirements-wrap");
const modalLink = document.getElementById("modal-link");
const tabLinks = document.querySelectorAll("[data-open-tab]");
const gamesSearch = document.getElementById("games-search");
const gearSearch = document.getElementById("gear-search");
const gamesCategories = document.getElementById("games-categories");
const gearCategories = document.getElementById("gear-categories");

const baseGames = [
    { brand: "Steam", name: "Cyberpunk 2077", price: "8 990 Ft", tags: ["RPG", "Open-World"], desc: "Neon jovo, eros sztori es brutal latvany Night City utcain." },
    { brand: "Steam", name: "Elden Ring", price: "10 990 Ft", tags: ["Soulslike", "Fantasy"], desc: "Hatalmas vilag, nehez bossok es felfedezes minden iranyban." },
    { brand: "Steam", name: "Red Dead Redemption 2", price: "7 490 Ft", tags: ["Open-World", "Story"], desc: "Western hangulat, eros karakterek es elkepeszto reszletesseg." },
    { brand: "Steam", name: "Hogwarts Legacy", price: "9 990 Ft", tags: ["Adventure", "Magic"], desc: "Varazslat, kastelyfelfedezes es sajat iskolai kaland." },
    { brand: "Steam", name: "Baldur's Gate 3", price: "12 490 Ft", tags: ["RPG", "Co-op"], desc: "Mely szerepjatek rendszer, nagy szabadsag es ikonikus csapat." },
    { brand: "Steam", name: "Helldivers 2", price: "8 490 Ft", tags: ["Co-op", "Action"], desc: "Kaotikus osztott kuldetesek es jo csapatos szorakozas." },
    { brand: "Steam", name: "Palworld", price: "5 990 Ft", tags: ["Survival", "Crafting"], desc: "Furcsa, vicces es meglepoen addiktiv tulelo sandbox." },
    { brand: "Steam", name: "Lethal Company", price: "2 890 Ft", tags: ["Horror", "Co-op"], desc: "Baratokkal a legjobb, tele panikkal es rohogessel." },
    { brand: "Steam", name: "Rust", price: "6 990 Ft", tags: ["Survival", "PvP"], desc: "Kemeny tuleles, bazisepites es feszült online harcok." },
    { brand: "Steam", name: "ARK: Survival Ascended", price: "8 990 Ft", tags: ["Survival", "Dinok"], desc: "Orias map, dinoszelidites es epites next-gen latvannyal." },
    { brand: "Steam", name: "Forza Horizon 5", price: "9 490 Ft", tags: ["Racing", "Open-World"], desc: "Gyonyoru versenyzes hatalmas palyakkal es sok autoval." },
    { brand: "Steam", name: "EA Sports FC 25", price: "13 990 Ft", tags: ["Sport", "Online"], desc: "Focis meccsek, Ultimate Team es haverokkal couch hangulat." },
    { brand: "Steam", name: "NBA 2K25", price: "12 990 Ft", tags: ["Sport", "Career"], desc: "Kosaras latvany es porgos park meg karrier mod." },
    { brand: "Steam", name: "Call of Duty", price: "17 490 Ft", tags: ["FPS", "Multiplayer"], desc: "Gyors reflexek, fegyver build-ek es adrenalinos meccsek." },
    { brand: "Steam", name: "Ready or Not", price: "6 490 Ft", tags: ["Tactical", "FPS"], desc: "Komoly taktikai rajtautes csapatos kommunikacioval." },
    { brand: "Steam", name: "Battlefield 2042", price: "7 990 Ft", tags: ["FPS", "Multiplayer"], desc: "Nagy csatak, jarmuvek es modern hadszinter porgos online meccsekkel." },
    { brand: "Steam", name: "Battlefield V", price: "5 990 Ft", tags: ["FPS", "Action"], desc: "Masodik vilaghaborus hangulat intenziv gunplayjel es grand operations moddal." },
    { brand: "Steam", name: "Battlefield 1", price: "5 490 Ft", tags: ["FPS", "Story"], desc: "Ikonikus haborus atmosferaju shooter eros kampannyal es nagy multis csatakkal." },
    { brand: "Steam", name: "Insurgency: Sandstorm", price: "4 990 Ft", tags: ["FPS", "Tactical"], desc: "Kemeny, realisztikus lovolde gyors halallal es csapatmunkara epitve." },
    { brand: "Steam", name: "Squad", price: "11 990 Ft", tags: ["FPS", "Tactical"], desc: "Nagy csapatharc, kommunikacio es komoly taktikai jatekmenet." },
    { brand: "Steam", name: "Dead by Daylight", price: "5 490 Ft", tags: ["Horror", "Online"], desc: "Aszimmetrikus horror, ikonikus karakterek es hatalmas kozosseg." },
    { brand: "Steam", name: "Phasmophobia", price: "4 290 Ft", tags: ["Horror", "Co-op"], desc: "Szellemvadaszat mikrofonnal, para pillanatokkal es csapatmunkaval." },
    { brand: "Steam", name: "Sons of the Forest", price: "8 190 Ft", tags: ["Survival", "Horror"], desc: "Setet sziget, epites, tuleles es nyomaszto hangulat." },
    { brand: "Steam", name: "The Witcher 3", price: "3 990 Ft", tags: ["RPG", "Story"], desc: "Legendas fantasy tortenet rengeteg kuldetessel es DLC-vel." },
    { brand: "Steam", name: "Monster Hunter: World", price: "4 990 Ft", tags: ["Action", "Co-op"], desc: "Orisi szornyek, jo fegyverek es addiktiv lootolas." },
    { brand: "Steam", name: "Stardew Valley", price: "2 690 Ft", tags: ["Chill", "Indie"], desc: "Laza farmolos jatek, ami mindig visszahuz egy korre." },
    { brand: "Steam", name: "Terraria", price: "1 990 Ft", tags: ["Sandbox", "Indie"], desc: "Rengeteg tartalom, craftolas es bossfight pixel stilusban." },
    { brand: "Steam", name: "Hades II", price: "8 490 Ft", tags: ["Roguelike", "Action"], desc: "Gyors harc, eros stilus es ujabb addiktiv runok." },
    { brand: "Steam", name: "No Man's Sky", price: "6 990 Ft", tags: ["Space", "Exploration"], desc: "Bolygok, bazisepites es vegtelen urkutatas chill tempoban." },
    { brand: "Steam", name: "Sea of Thieves", price: "7 990 Ft", tags: ["Pirate", "Co-op"], desc: "Hajozas, lootolas es baratokkal a legjobb kalandozas." },
    { brand: "Steam", name: "Delta Force", price: "0 Ft", tags: ["FPS", "Free"], desc: "Modern military shooter nagy palyakkal, jarmuvekkel es porgos osszecsapasokkal." },
    { brand: "Steam", name: "Remnant II", price: "9 290 Ft", tags: ["Shooter", "Co-op"], desc: "Soulslike lovolde sok builddel es kemeny bossokkal." },
    { brand: "Steam", name: "Dragon's Dogma 2", price: "15 990 Ft", tags: ["RPG", "Fantasy"], desc: "Nagy fantasy utazas, latvanyos harc es kulonleges tarsak." },
    { brand: "Steam", name: "God of War", price: "9 990 Ft", tags: ["Action", "Story"], desc: "Eros sztori, nehez harcok es filmes minosegu pillanatok." },
    { brand: "Steam", name: "Marvel's Spider-Man Remastered", price: "10 490 Ft", tags: ["Action", "Open-World"], desc: "Lendulekeny mozgas, jo harc es szuperhos varosi hangulat." },
    { brand: "Steam", name: "Ghost of Tsushima Director's Cut", price: "14 990 Ft", tags: ["Action", "Samurai"], desc: "Gyonyoru nyilt vilag, kardparbajok es eros japan atmosfera." },
    { brand: "Steam", name: "Resident Evil 4", price: "11 990 Ft", tags: ["Horror", "Action"], desc: "Modern remake eros atmoszferaval, brutal harcokkal es ikonikus jelenetekkel." },
    { brand: "Steam", name: "Diablo IV", price: "14 990 Ft", tags: ["RPG", "Online"], desc: "Dark fantasy lootolas, szezonok es vegtelen buildeles egyutt vagy solo modban." },
    { brand: "Steam", name: "Lies of P", price: "10 990 Ft", tags: ["Soulslike", "Story"], desc: "Sotet mesevilag, jo harcrendszer es folyamatos kihivas minden bossnal." },
    { brand: "Steam", name: "Persona 3 Reload", price: "12 990 Ft", tags: ["RPG", "Story"], desc: "Stilusos JRPG eros zenekkel, karakterekkel es napkozbeni school life elemekkel." },
    { brand: "Steam", name: "Black Myth: Wukong", price: "18 990 Ft", tags: ["Action", "Fantasy"], desc: "Latvanyos bossfightok es kinai mitologia hangulat egy modern akciojatekban." },
    { brand: "Steam", name: "Satisfactory", price: "7 990 Ft", tags: ["Sandbox", "Crafting"], desc: "Gyargepites, optimalizalas es chill, de addiktiv fejlodes egy idegen bolygon." },
    { brand: "Steam", name: "Euro Truck Simulator 2", price: "2 990 Ft", tags: ["Chill", "Simulation"], desc: "Nyugodt utak, sok kamion es meglepoen jo relax jatek hosszabb estekre." },
    { brand: "Steam", name: "Tom Clancy's Rainbow Six Siege", price: "5 490 Ft", tags: ["FPS", "Tactical"], desc: "Operator alapu taktikai lovolde rombolhato kornyezettel es komoly csapatjatekkal." },
    { brand: "Steam", name: "Tekken 8", price: "16 990 Ft", tags: ["Fighting", "Online"], desc: "Porges verekedes, latvanyos kombok es nagy online kozosseg." },
    { brand: "Steam", name: "Street Fighter 6", price: "13 990 Ft", tags: ["Fighting", "Competitive"], desc: "Preciz harcrendszer, tanulhato mechanikak es eros stilus minden meccsben." },
    { brand: "Steam", name: "NieR: Automata", price: "8 490 Ft", tags: ["Action", "Sci-Fi"], desc: "Kulonleges sztori, gyors harc es emlekezetes soundtrack egyedi vilaggal." },
    { brand: "Steam", name: "Metaphor: ReFantazio", price: "19 990 Ft", tags: ["RPG", "Fantasy"], desc: "Nagyszabasu fantasy JRPG stilusos kezelofelulettel es mely csapatrendszerrel." },
    { brand: "Steam", name: "Counter-Strike 2", price: "0 Ft", tags: ["FPS", "Free"], desc: "Klasszikus kompetitiv shooter, gyors korokkel es preciz celzassal." },
    { brand: "Steam", name: "Overwatch 2", price: "0 Ft", tags: ["FPS", "Multiplayer"], desc: "Hos alapu csapatharc porgos meccsekkel es latvanyos kepessegekkel." },
    { brand: "Steam", name: "Need for Speed Unbound", price: "8 990 Ft", tags: ["Racing", "Action"], desc: "Arcade versenyzes eros stilussal, tuninggal es varosi ejszakakkal." },
    { brand: "Steam", name: "F1 24", price: "13 490 Ft", tags: ["Racing", "Sport"], desc: "Forma-1 elmeny gyors korokkel, karrierrel es komoly tempoval." },
    { brand: "Steam", name: "Assassin's Creed Valhalla", price: "10 490 Ft", tags: ["Adventure", "Open-World"], desc: "Nagy kaland, felfedezes es viking hangulat sok kuldetessel." },
    { brand: "Steam", name: "It Takes Two", price: "6 990 Ft", tags: ["Adventure", "Co-op"], desc: "Kreativ kozos kaland, ami ket jatekossal igazan emlekezetes." },
    { brand: "Steam", name: "Subnautica", price: "4 990 Ft", tags: ["Adventure", "Survival"], desc: "Vizi tuleles, felfedezes es kulonleges idegen oceanvilag." },
    { brand: "Steam", name: "Alan Wake 2", price: "15 990 Ft", tags: ["Adventure", "Horror"], desc: "Sotet atmoszfera, eros sztori es nyomaszto tulvilagi hangulat." },
    { brand: "Steam", name: "Divinity: Original Sin 2", price: "7 490 Ft", tags: ["RPG", "Co-op"], desc: "Mely taktikai szerepjatek hatalmas szabadsaggal es remek csapattal." },
    { brand: "Steam", name: "Grim Dawn", price: "3 990 Ft", tags: ["RPG", "Fantasy"], desc: "Dark fantasy lootolas, jo buildeles es hosszu endgame fejlodes." },
    { brand: "Steam", name: "Devil May Cry 5", price: "6 490 Ft", tags: ["Action", "Story"], desc: "Stilusos kombozas, gyors harc es menő demonvadasz hangulat." },
    { brand: "Steam", name: "Control", price: "5 990 Ft", tags: ["Action", "Sci-Fi"], desc: "Kulonleges kepessegek, titokzatos sztori es latvanyos paranormalis akcio." }
];

const baseGear = [
    { brand: "Logitech", name: "G Pro X Superlight 2", price: "54 990 Ft", tags: ["Eger", "Esport"], desc: "Ultrakönnyu gamer eger gyors szenzorral es kompetitiv fokuszra." },
    { brand: "Logitech", name: "G502 X Lightspeed", price: "49 990 Ft", tags: ["Eger", "Wireless"], desc: "Sok gomb, eros fogas es sokoldalu hasznalat MMO-tol FPS-ig." },
    { brand: "Logitech", name: "G915 TKL", price: "82 990 Ft", tags: ["Billentyuzet", "Low Profile"], desc: "Vekony, premium vezetek nelkuli billentyuzet RGB-vel." },
    { brand: "Logitech", name: "G Pro X TKL Rapid", price: "79 990 Ft", tags: ["Billentyuzet", "Esport"], desc: "Gyors reakcio, tiszta design es versenyre hangolt elmeny." },
    { brand: "Logitech", name: "G733 Lightspeed", price: "49 990 Ft", tags: ["Headset", "Wireless"], desc: "Konnyu headset jo mikrofonnal es karakteres RGB stilussal." },
    { brand: "Logitech", name: "G Astro A50 X", price: "159 990 Ft", tags: ["Headset", "Premium"], desc: "Csucskategorias hangzas es kenyelmes, hosszu sessionos viselet." },
    { brand: "SteelSeries", name: "Aerox 5 Wireless", price: "42 990 Ft", tags: ["Eger", "Honeycomb"], desc: "Konnyu vaz, gyors mozgas es sokoldalu gamer forma." },
    { brand: "SteelSeries", name: "Prime Mini Wireless", price: "34 990 Ft", tags: ["Eger", "Wireless"], desc: "Kompakt eger preciz kontrollal es esportos erzettel." },
    { brand: "SteelSeries", name: "Apex Pro TKL", price: "94 990 Ft", tags: ["Billentyuzet", "Magnetic"], desc: "Allithato kapcsolok es brutalisan gyors aktivalasi pont." },
    { brand: "SteelSeries", name: "Apex 9 Mini", price: "49 990 Ft", tags: ["Billentyuzet", "Compact"], desc: "Mini formatum kis helyre, gyors kapcsolokkal es RGB-vel." },
    { brand: "SteelSeries", name: "Arctis Nova Pro Wireless", price: "139 990 Ft", tags: ["Headset", "ANC"], desc: "Eros hang, cserelheto akku es premium iroda-meets-gamer vibe." },
    { brand: "SteelSeries", name: "QcK Prism XL", price: "24 990 Ft", tags: ["Egerpad", "RGB"], desc: "Nagy meretu egerpad, ami setup kozponti elemkent is mukodik." },
    { brand: "Razer", name: "DeathAdder V3 Pro", price: "59 990 Ft", tags: ["Eger", "Esport"], desc: "Ikonikus forma, top szenzor es komfort hosszu ranked estekhez." },
    { brand: "Razer", name: "Viper V3 Pro", price: "67 990 Ft", tags: ["Eger", "Pro"], desc: "Villamgyors es nagyon konnyu eger kompetitiv jatekosoknak." },
    { brand: "Razer", name: "BlackWidow V4 75%", price: "79 990 Ft", tags: ["Billentyuzet", "Hot Swap"], desc: "Jol tuningolhato billentyuzet eros RGB es premium hangulattal." },
    { brand: "Razer", name: "Huntsman V3 Pro TKL", price: "94 990 Ft", tags: ["Billentyuzet", "Optical"], desc: "Speed focus, gyors aktivalas es letisztult esport vonal." },
    { brand: "Razer", name: "BlackShark V2 Pro", price: "78 990 Ft", tags: ["Headset", "Wireless"], desc: "Kivalo mikrofon, jo izolacio es fps-hez eros hangkep." },
    { brand: "Razer", name: "Gigantus V2 XXL", price: "16 990 Ft", tags: ["Egerpad", "XXL"], desc: "Hatalmas felulet az egernek, billentyuzetnek es teljes setupnak." },
    { brand: "HyperX", name: "Pulsefire Haste 2", price: "24 990 Ft", tags: ["Eger", "Lightweight"], desc: "Konnyu eger gyors flickekhez es napi kompetitiv hasznalatra." },
    { brand: "HyperX", name: "Alloy Origins Core", price: "39 990 Ft", tags: ["Billentyuzet", "TKL"], desc: "Massziv femhaz, jo switch erzet es klassz HyperX stilus." },
    { brand: "HyperX", name: "Cloud III Wireless", price: "59 990 Ft", tags: ["Headset", "Comfort"], desc: "Kenyelmes, hosszu akkuidos headset remek jatekhangzassal." },
    { brand: "HyperX", name: "Pulsefire Mat RGB", price: "19 990 Ft", tags: ["Egerpad", "RGB"], desc: "RGB keret es nagy meret a latvanyos setup kedveert." },
    { brand: "Corsair", name: "M75 Air Wireless", price: "44 990 Ft", tags: ["Eger", "Ultralight"], desc: "Konnyu es stabil vezetek nelkuli opcio gyors jatekokhoz." },
    { brand: "Corsair", name: "K70 RGB Pro", price: "69 990 Ft", tags: ["Billentyuzet", "Mechanical"], desc: "Eros gamer billentyuzet sok testreszabassal es jo RGB-vel." },
    { brand: "Corsair", name: "HS80 Max Wireless", price: "62 990 Ft", tags: ["Headset", "Dolby"], desc: "Kenyelmes viselet, terhangzas es tiszta kommunikacio." },
    { brand: "Corsair", name: "MM700 RGB Extended", price: "29 990 Ft", tags: ["Egerpad", "Extended"], desc: "Desk mat formatum, ami a teljes asztal setupot egybe fogja." },
    { brand: "ASUS ROG", name: "Harpe Ace Mini", price: "51 990 Ft", tags: ["Eger", "Pro"], desc: "Gyors, konnyu eger kimondottan kompetitiv jatekosoknak." },
    { brand: "ASUS ROG", name: "Azoth", price: "109 990 Ft", tags: ["Billentyuzet", "Custom"], desc: "Premium kis meretu billentyuzet OLED kijelzovel es tuning opciokkal." },
    { brand: "ASUS ROG", name: "Delta S Wireless", price: "71 990 Ft", tags: ["Headset", "RGB"], desc: "Futurisztikus forma, jo mikrofonnal es eros gamer jelenlettel." },
    { brand: "ASUS ROG", name: "Scabbard II", price: "21 990 Ft", tags: ["Egerpad", "Water Repel"], desc: "Nagy felulet, strapabiro anyag es tiszta siklas." },
    { brand: "Glorious", name: "Model O 2 Wireless", price: "38 990 Ft", tags: ["Eger", "Wireless"], desc: "Konnyu honeycomb stilus jo akkuval es gyors reagalassal." },
    { brand: "Glorious", name: "GMMK 2 65%", price: "47 990 Ft", tags: ["Billentyuzet", "Modular"], desc: "Moddolhato kis meretu billentyuzet szep RGB fenyekkel." },
    { brand: "Cooler Master", name: "MH752", price: "28 990 Ft", tags: ["Headset", "Value"], desc: "Kellemes hangzas es kenyelmes viselet jo aron." },
    { brand: "BenQ Zowie", name: "G-SR-SE Rouge II", price: "17 990 Ft", tags: ["Egerpad", "Control"], desc: "FPS jatekosok kedvelt kontrollos egerpadja stabil celzashoz." },
    { brand: "Elgato", name: "Wave 3", price: "54 990 Ft", tags: ["Mikrofon", "Streaming"], desc: "Tiszta hang Discordhoz, streamhez es videozashoz is." },
    { brand: "Streamplify", name: "CAM Pro", price: "24 990 Ft", tags: ["Webcam", "Streaming"], desc: "Facecam opcio streamhez vagy community hivasokhoz." },
    { brand: "Logitech", name: "G305 Lightspeed", price: "18 990 Ft", tags: ["Eger", "Wireless"], desc: "Kompakt es megbizhato wireless eger, jo belepo kompetitiv jatekhoz." },
    { brand: "Logitech", name: "Pro X 2 Lightspeed", price: "94 990 Ft", tags: ["Headset", "Wireless"], desc: "Kenyelmes premium headset esport fokuszu hangkeppel es jo mikrofonnal." },
    { brand: "SteelSeries", name: "Rival 3 Wireless", price: "22 990 Ft", tags: ["Eger", "Wireless"], desc: "Jo ar-erteku wireless eger gyors jatekokhoz es mindennapi hasznalatra." },
    { brand: "SteelSeries", name: "Alias", price: "79 990 Ft", tags: ["Mikrofon", "Streaming"], desc: "Tiszta streamer mikrofon jo szoftverrel es asztali setupba illo kivitellel." },
    { brand: "Razer", name: "Basilisk V3 Pro", price: "66 990 Ft", tags: ["Eger", "Wireless"], desc: "Sokoldalu premium gamer eger sok gombbal es eros RGB jelenlettel." },
    { brand: "Razer", name: "Seiren V3 Chroma", price: "59 990 Ft", tags: ["Mikrofon", "RGB"], desc: "Latvanyos mikrofon streamhez, Discordhoz es tartalomgyartashoz." },
    { brand: "HyperX", name: "QuadCast S", price: "54 990 Ft", tags: ["Mikrofon", "Streaming"], desc: "Ikonikus RGB mikrofon egyszeru kezelessel es tiszta beszeddel." },
    { brand: "Corsair", name: "K65 Plus Wireless", price: "62 990 Ft", tags: ["Billentyuzet", "Wireless"], desc: "Modern compact billentyuzet jo akkuval es eros gaming hangulattal." },
    { brand: "Corsair", name: "MM300 Pro Extended", price: "18 990 Ft", tags: ["Egerpad", "Extended"], desc: "Nagy feluletu egerpad stabil csuszassal es konnyu tisztithatosaggal." },
    { brand: "ASUS ROG", name: "Falchion RX Low Profile", price: "82 990 Ft", tags: ["Billentyuzet", "Low Profile"], desc: "Kis meretu premium billentyuzet gyors gaming reakciokhoz es tiszta setuphoz." },
    { brand: "Elgato", name: "Stream Deck MK.2", price: "64 990 Ft", tags: ["Streaming", "Controller"], desc: "Makro vezerlo streamhez, shortcutokhoz es workflow gyorsitashoz." },
    { brand: "BenQ Zowie", name: "EC2-CW", price: "59 990 Ft", tags: ["Eger", "Esport"], desc: "FPS-re hangolt wireless eger komfortos formaval es stabil kovetessel." },
    { brand: "Razer", name: "Cobra Pro", price: "52 990 Ft", tags: ["Eger", "Wireless"], desc: "Kompakt premium eger gyors reakciora es sokoldalu jatekstilushoz." },
    { brand: "Cooler Master", name: "MM712", price: "21 990 Ft", tags: ["Eger", "Lightweight"], desc: "Konnyu wireless eger gyors mozgassal es jo ar-ertek arannyal." },
    { brand: "SteelSeries", name: "Apex Pro Mini", price: "79 990 Ft", tags: ["Billentyuzet", "Magnetic"], desc: "Mini billentyuzet allithato kapcsolokkal es nagyon gyors aktivalassal." },
    { brand: "HyperX", name: "Alloy Rise", price: "56 990 Ft", tags: ["Billentyuzet", "Hot Swap"], desc: "Moddolhato gamer billentyuzet tiszta gepelettel es eros alapokkal." },
    { brand: "Corsair", name: "Virtuoso Max Wireless", price: "119 990 Ft", tags: ["Headset", "Premium"], desc: "Premium headset eros hangzassal, jo mikrofonnal es kenyelmes viselettel." },
    { brand: "Logitech", name: "Yeti GX", price: "62 990 Ft", tags: ["Mikrofon", "Streaming"], desc: "Dinamikus gamer mikrofon tiszta hanggal streamhez es Discordhoz." },
    { brand: "Elgato", name: "Wave DX", price: "44 990 Ft", tags: ["Mikrofon", "Streaming"], desc: "Letisztult mikrofon tiszta beszedhanggal tartalomgyartoknak." },
    { brand: "Streamplify", name: "MIC RGB", price: "27 990 Ft", tags: ["Mikrofon", "RGB"], desc: "Latvanyos gamer mikrofon egyszeru kezelessel es jo alap hangzassal." },
    { brand: "ASUS ROG", name: "Moonstone Ace L", price: "39 990 Ft", tags: ["Egerpad", "Glass"], desc: "Uveg feluletu premium egerpad nagyon sima siklassal es eros designnal." },
    { brand: "Elgato", name: "Facecam MK.2", price: "59 990 Ft", tags: ["Webcam", "Streaming"], desc: "Kepes facecam streamhez, meetinghez es tartalomgyartashoz." },
    { brand: "Logitech", name: "MX Brio", price: "79 990 Ft", tags: ["Webcam", "Streaming"], desc: "Eles 4K webcam, ami jatek mellett videohivashoz es streamhez is eros." },
    { brand: "Razer", name: "Stream Controller X", price: "44 990 Ft", tags: ["Streaming", "Controller"], desc: "Makro es jelenetkezelo panel streamhez, shortcutokhoz es workflowhoz." }
];

const extraGames = [
    { brand: "Steam", name: "Apex Legends", price: "0 Ft", tags: ["FPS", "Free"], desc: "Hos alapu battle royale porgos gunplayjel es folyamatos szezonokkal." },
    { brand: "Steam", name: "Warframe", price: "0 Ft", tags: ["Action", "Free"], desc: "Gyors sci-fi looter shooter rengeteg builddel es kooperativ tartalommal." },
    { brand: "Steam", name: "Destiny 2", price: "0 Ft", tags: ["FPS", "Sci-Fi"], desc: "Looter shooter raidokkal, seasonokkal es eros co-op endgamegel." },
    { brand: "Steam", name: "Deep Rock Galactic", price: "6 490 Ft", tags: ["Co-op", "Shooter"], desc: "Barlangi kuldetesek, torpok es remek csapatjatek rengeteg ujrajatszhatosaggal." },
    { brand: "Steam", name: "PUBG: BATTLEGROUNDS", price: "0 Ft", tags: ["FPS", "Battle Royale"], desc: "Klasszikus battle royale feszult vegjatekokkal es taktikus rotaciokkal." },
    { brand: "Steam", name: "The Finals", price: "0 Ft", tags: ["FPS", "Multiplayer"], desc: "Romolhato arena, gyors csapatmeccsek es latvanyos showmusor hangulat." },
    { brand: "Steam", name: "Grand Theft Auto V", price: "9 990 Ft", tags: ["Action", "Open-World"], desc: "Varosi sandbox, nagy szabadsag es GTA Online kaotikus jatektere." },
    { brand: "Steam", name: "Sekiro: Shadows Die Twice", price: "12 990 Ft", tags: ["Action", "Story"], desc: "Preciz parry rendszer, gyors bossharcok es eros szamuraj hangulat." },
    { brand: "Steam", name: "Armored Core VI Fires of Rubicon", price: "16 490 Ft", tags: ["Action", "Sci-Fi"], desc: "Mech epites, brutal kuldetesek es intenziv bossfightok futurisztikus stilusban." },
    { brand: "Steam", name: "Path of Exile", price: "0 Ft", tags: ["RPG", "Free"], desc: "Sotet lootolos ARPG hatalmas passziv farendszerrel es szezonokkal." },
    { brand: "Steam", name: "Path of Exile 2", price: "13 990 Ft", tags: ["RPG", "Fantasy"], desc: "Modernizalt akcio RPG mely buildelesi lehetosegekkel es latvanyos harcokkal." },
    { brand: "Steam", name: "Dota 2", price: "0 Ft", tags: ["Action", "Competitive"], desc: "Ikonikus MOBA komoly tanulasi gorbevel es oriasi kompetitiv meccsekkel." },
    { brand: "Steam", name: "Valheim", price: "7 490 Ft", tags: ["Survival", "Co-op"], desc: "Viking tuleles, epites es chill felfedezes jo tarsasagi elmenykent." },
    { brand: "Steam", name: "Portal 2", price: "1 990 Ft", tags: ["Adventure", "Puzzle"], desc: "Legendasan kreativ logikai jatek erosen megirt humorral es co-op palyakkal." },
    { brand: "Steam", name: "Left 4 Dead 2", price: "1 490 Ft", tags: ["FPS", "Co-op"], desc: "Klasszikus zombis kooperativ akcio gyors rohamokkal es jo ujrajatszhatosaggal." },
    { brand: "Steam", name: "NARAKA: BLADEPOINT", price: "0 Ft", tags: ["Action", "Online"], desc: "Melee kozpontu battle royale latvanyos mozdulatokkal es vertikalis jatekkal." },
    { brand: "Steam", name: "Risk of Rain 2", price: "5 990 Ft", tags: ["Roguelike", "Action"], desc: "Porges runok, sok karakter es meglepoen addiktiv skalaodo kihivas." },
    { brand: "Steam", name: "Slay the Spire", price: "3 490 Ft", tags: ["Indie", "Strategy"], desc: "Pakliepitos roguelike okos dontesekkel es nagyon eros ujrajatszhatosaggal." },
    { brand: "Steam", name: "Hollow Knight", price: "4 490 Ft", tags: ["Adventure", "Indie"], desc: "Hangulatos metroidvania eros bossokkal es gyonyoru, sotet foldalatti vilaggal." },
    { brand: "Steam", name: "Ori and the Will of the Wisps", price: "5 490 Ft", tags: ["Adventure", "Story"], desc: "Lenyugozo platformer finom mozgassal, eros zenekkel es erzelmes tortenettel." },
    { brand: "Steam", name: "Disco Elysium - The Final Cut", price: "4 990 Ft", tags: ["RPG", "Story"], desc: "Dialogus kozpontu szerepjatek kulonleges hangulattal es memorabilis karakterekkel." },
    { brand: "Steam", name: "Kingdom Come: Deliverance", price: "6 490 Ft", tags: ["RPG", "Open-World"], desc: "Realistabb kozepkori kaland sok kuldetessel es elmerulos vilaggal." },
    { brand: "Steam", name: "Fallout 4", price: "5 490 Ft", tags: ["RPG", "Open-World"], desc: "Posztapokaliptikus felfedezes, craftolas es bazisepites sok tartalommal." },
    { brand: "Steam", name: "STAR WARS Jedi: Survivor", price: "14 990 Ft", tags: ["Action", "Story"], desc: "Filmes Star Wars kaland jo fenykard harccal es nagy bolygo bejarassal." },
    { brand: "Steam", name: "Horizon Zero Dawn Complete Edition", price: "9 490 Ft", tags: ["Adventure", "Open-World"], desc: "Robot dinoszauruszok, nagy tajak es latvanyos nyilt vilagu akcio." },
    { brand: "Steam", name: "Days Gone", price: "7 990 Ft", tags: ["Adventure", "Survival"], desc: "Motoros tuleles, horda harcok es roadtrip hangulat egy veszelyes vilagban." },
    { brand: "Steam", name: "Like a Dragon: Infinite Wealth", price: "19 990 Ft", tags: ["RPG", "Story"], desc: "Orult mellekkuldetesek, stilusos turn based harc es sok karakterpillanat." },
    { brand: "Steam", name: "Yakuza: Like a Dragon", price: "8 990 Ft", tags: ["RPG", "Story"], desc: "Modern JRPG es yakuzas drama humorral, jo csapattal es sok side contenttel." },
    { brand: "Steam", name: "DRAGON BALL: Sparking! ZERO", price: "18 990 Ft", tags: ["Action", "Fighting"], desc: "Nagy anime csatak latvanyos effektekkel es sok karakterrel." },
    { brand: "Steam", name: "Dead Space", price: "11 990 Ft", tags: ["Horror", "Sci-Fi"], desc: "Sotet sci-fi horror feszes atmoszferaval es nyomaszto hajobeli tulelessel." },
    { brand: "Steam", name: "Resident Evil Village", price: "9 990 Ft", tags: ["Horror", "Story"], desc: "Eros tulelo horror kulonleges ellenfelekkel es jo tempoval." },
    { brand: "Steam", name: "Project Zomboid", price: "5 490 Ft", tags: ["Survival", "Sandbox"], desc: "Kemeny zombis tuleles rengeteg rendszerrel es hosszu tavra tervezett fejlodessel." },
    { brand: "Steam", name: "Factorio", price: "12 490 Ft", tags: ["Sandbox", "Strategy"], desc: "Gyargepites, automatizalas es vegtelen optimalizalas nagyon addiktiv formatumban." },
    { brand: "Steam", name: "Crusader Kings III", price: "14 490 Ft", tags: ["Strategy", "Story"], desc: "Dinamikus dinasztiak, intrikak es grand strategy drak sok meglepetessel." },
    { brand: "Steam", name: "Age of Empires IV: Anniversary Edition", price: "13 990 Ft", tags: ["Strategy", "Online"], desc: "Modern RTS bazisepitessel, tortenelmi frakciokkal es jo multis tempoval." },
    { brand: "Steam", name: "Sid Meier's Civilization VI", price: "2 990 Ft", tags: ["Strategy", "Turn-Based"], desc: "Korokre osztott birodalomepites, sok civilizacio es nagyon egyben levo jatekloop." },
    { brand: "Steam", name: "Manor Lords", price: "11 990 Ft", tags: ["Strategy", "Simulation"], desc: "Varosepitos es taktikai kozepkori menedzsment latvanyos atmoszferaval." },
    { brand: "Steam", name: "Frostpunk 2", price: "15 490 Ft", tags: ["Strategy", "Survival"], desc: "Kemeny moralis dontesek, varosvezetes es hideg posztapokaliptikus hangulat." },
    { brand: "Steam", name: "Borderlands 3", price: "7 490 Ft", tags: ["Shooter", "Co-op"], desc: "Lootolos looter shooter elvetemult fegyverekkel es laza kooperativ akcioval." },
    { brand: "Steam", name: "DOOM Eternal", price: "8 490 Ft", tags: ["FPS", "Action"], desc: "Szuper gyors arena FPS agressziv tempoval es brutal zenevel." }
];

const extraGear = [
    { brand: "Logitech", name: "G309 Lightspeed", price: "31 990 Ft", tags: ["Eger", "Wireless"], desc: "Konnyu, modern gamer eger gyors szenzorral es megbizhato wireless kapcsolattal." },
    { brand: "Logitech", name: "G515 Lightspeed TKL", price: "64 990 Ft", tags: ["Billentyuzet", "Wireless"], desc: "Low profile gamer billentyuzet tiszta designnal es gyors valaszidovel." },
    { brand: "Logitech", name: "G840 XL Cloth", price: "17 990 Ft", tags: ["Egerpad", "Extended"], desc: "Nagy szovet desk mat stabil csuszassal es kenyelmes teljes setup felulettel." },
    { brand: "Logitech", name: "Blue Sona", price: "119 990 Ft", tags: ["Mikrofon", "Streaming"], desc: "Dinamikus premium mikrofon tiszta beszedhanggal streamhez es podcasthoz." },
    { brand: "Logitech", name: "C922 Pro Stream", price: "29 990 Ft", tags: ["Webcam", "Streaming"], desc: "Nepszeru streamer webcam egyszeru beallitassal es tiszta kepminoseggel." },
    { brand: "SteelSeries", name: "Rival 650 Wireless", price: "44 990 Ft", tags: ["Eger", "Wireless"], desc: "Sulyozhato gaming eger jo fogassal es sokoldalu jatekhasznalattal." },
    { brand: "SteelSeries", name: "Apex 7 TKL", price: "62 990 Ft", tags: ["Billentyuzet", "TKL"], desc: "Massziv TKL billentyuzet jo switch erzettel es kis kijelzos extraval." },
    { brand: "SteelSeries", name: "Arctis Nova 7 Wireless", price: "74 990 Ft", tags: ["Headset", "Wireless"], desc: "Sokoldalu headset eros kenyelmi szinttel es jo voice chat teljesitmennyel." },
    { brand: "SteelSeries", name: "QcK Heavy XXL", price: "18 990 Ft", tags: ["Egerpad", "Control"], desc: "Vastag kontrollos egerpad stabil celzasra es biztos desk lefedesre." },
    { brand: "SteelSeries", name: "Alias Pro", price: "149 990 Ft", tags: ["Mikrofon", "Streaming"], desc: "Komoly streamer mikrofon audio interfesszel es nagyon tiszta hangkeppel." },
    { brand: "Razer", name: "DeathStalker V2 Pro TKL", price: "84 990 Ft", tags: ["Billentyuzet", "Low Profile"], desc: "Gyors es vekony premium billentyuzet letisztult RGB gamer stilussal." },
    { brand: "Razer", name: "Kraken V4 Pro", price: "159 990 Ft", tags: ["Headset", "Premium"], desc: "Csucskategorias hangzas haptikus extrakkal es eros gamer jelenlettel." },
    { brand: "Razer", name: "Firefly V2 Pro", price: "39 990 Ft", tags: ["Egerpad", "RGB"], desc: "Vilagito gamer egerpad latvanyos setuphoz es sima siklashoz." },
    { brand: "Razer", name: "Kiyo Pro Ultra", price: "119 990 Ft", tags: ["Webcam", "Streaming"], desc: "Premium webcam nagy szenzorral, tiszta kepminoseggel es streambarat beallitasokkal." },
    { brand: "Razer", name: "Seiren Mini", price: "23 990 Ft", tags: ["Mikrofon", "Streaming"], desc: "Kompakt mikrofon egyszeru asztali setuphoz es tiszta Discord hanghoz." },
    { brand: "HyperX", name: "Pulsefire Dart", price: "33 990 Ft", tags: ["Eger", "Wireless"], desc: "Kenyelmes formaju wireless eger megbizhato napi gamingre es munkara." },
    { brand: "HyperX", name: "Alloy Elite 2", price: "46 990 Ft", tags: ["Billentyuzet", "Mechanical"], desc: "Massziv full size gamer billentyuzet eros RGB-vel es jo gepelessel." },
    { brand: "HyperX", name: "Cloud Alpha Wireless", price: "72 990 Ft", tags: ["Headset", "Wireless"], desc: "Hosszu akkuido, kenyelmes parnazas es tiszta jatekhang egyben." },
    { brand: "HyperX", name: "SoloCast", price: "21 990 Ft", tags: ["Mikrofon", "Streaming"], desc: "Kis helyigenyu mikrofon egyszeru plug and play kezelessel." },
    { brand: "HyperX", name: "Pulsefire Mat XXL", price: "14 990 Ft", tags: ["Egerpad", "Extended"], desc: "Extra nagy egerpad puha felulettel es jol hasznalhato desk mat merettel." },
    { brand: "Corsair", name: "Scimitar Elite Wireless", price: "54 990 Ft", tags: ["Eger", "Wireless"], desc: "Sokgombos MMO gamer eger makrozasra es sokoldalu jatekstilushoz." },
    { brand: "Corsair", name: "K100 Air Wireless", price: "124 990 Ft", tags: ["Billentyuzet", "Low Profile"], desc: "Premium vekony billentyuzet gyors reagalasra es elegans gaming setuphoz." },
    { brand: "Corsair", name: "HS65 Wireless", price: "47 990 Ft", tags: ["Headset", "Wireless"], desc: "Kenyelmes headset jo mikrofonminoseggel es stabil jatekhangzassal." },
    { brand: "Corsair", name: "MM350 Champion Series XL", price: "16 990 Ft", tags: ["Egerpad", "Extended"], desc: "Nagy feluletu egerpad FPS es altalanos setup hasznalatra." },
    { brand: "ASUS ROG", name: "Keris II Ace", price: "57 990 Ft", tags: ["Eger", "Esport"], desc: "Konnyu pro eger gyors kovetessel es tiszta kompetitiv fokuszszal." },
    { brand: "ASUS ROG", name: "Strix Scope II 96 Wireless", price: "94 990 Ft", tags: ["Billentyuzet", "Wireless"], desc: "96 szazalekos gamer billentyuzet jo kompromisszummal es premium anyagokkal." },
    { brand: "ASUS ROG", name: "Delta II", price: "98 990 Ft", tags: ["Headset", "Wireless"], desc: "Modern ROG headset tiszta hangkeppel es eros setup megjelenessel." },
    { brand: "ASUS ROG", name: "Hone Ace XXL", price: "24 990 Ft", tags: ["Egerpad", "Control"], desc: "Kontrollos feluletu nagy egerpad preciz celzashoz es stabil mozgashoz." },
    { brand: "ASUS ROG", name: "Eye S", price: "34 990 Ft", tags: ["Webcam", "Streaming"], desc: "Full HD gamer webcam streamhez, megbeszeleshez es community hivasokhoz." },
    { brand: "Glorious", name: "Model D 2 Pro", price: "44 990 Ft", tags: ["Eger", "Wireless"], desc: "Ergonomikus konnyu gaming eger gyors mozdulatokra es hosszabb sessionokhoz." },
    { brand: "Glorious", name: "GMMK Pro", price: "89 990 Ft", tags: ["Billentyuzet", "Custom"], desc: "Massziv alu billentyuzet moddolhato felulettel es premium gepelesi erzettel." },
    { brand: "Glorious", name: "Extended Mousepad", price: "13 990 Ft", tags: ["Egerpad", "Extended"], desc: "Letisztult nagy egerpad a teljes asztal gamer osszkepenek rendezesehez." },
    { brand: "Cooler Master", name: "MM731", price: "23 990 Ft", tags: ["Eger", "Wireless"], desc: "Jo ar-erteku wireless gamer eger gyors mozgassal es konnyu testtel." },
    { brand: "Cooler Master", name: "CK721", price: "39 990 Ft", tags: ["Billentyuzet", "Wireless"], desc: "Compact billentyuzet multi-device tamogatassal es jo gaming alapokkal." },
    { brand: "Cooler Master", name: "MP511 XL", price: "14 990 Ft", tags: ["Egerpad", "Speed"], desc: "Gyorsabb feluletu egerpad strapabiro anyaggal es sima siklassal." },
    { brand: "BenQ Zowie", name: "U2", price: "61 990 Ft", tags: ["Eger", "Esport"], desc: "FPS-re hangolt ergonomikus eger stabil szenzorral es sallangmentes megkozelitessel." },
    { brand: "BenQ Zowie", name: "G-SR III", price: "18 990 Ft", tags: ["Egerpad", "Control"], desc: "Preciz kontrollos felulet, amit sok kompetitiv jatekos szeret." },
    { brand: "Elgato", name: "Cam Link 4K", price: "44 990 Ft", tags: ["Streaming", "Capture"], desc: "Konzol vagy kamera kepenek egyszeru atvitele streamhez es felvetelhez." },
    { brand: "Elgato", name: "HD60 X", price: "74 990 Ft", tags: ["Streaming", "Capture"], desc: "Nepszeru kulso capture card streamhez es gameplay rogzitesehez." },
    { brand: "Elgato", name: "Key Light Neo", price: "39 990 Ft", tags: ["Streaming", "Lighting"], desc: "Kompakt fenyforras facecam setuphoz es tisztabb on-camera megjeleneshez." }
];

const CATALOG_TARGET = 100;

function ensureCatalogSize(baseItems, extraItems, label) {
    const merged = [...baseItems, ...extraItems].slice(0, CATALOG_TARGET);

    if (merged.length < CATALOG_TARGET) {
        throw new Error(`${label} catalog is too short: ${merged.length}/${CATALOG_TARGET}`);
    }

    return merged;
}

const games = ensureCatalogSize(baseGames, extraGames, "games");
const gear = ensureCatalogSize(baseGear, extraGear, "gear");

function slugify(value) {
    return value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

function normalizeText(value) {
    return String(value || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

const TAG_LABELS = {
    Racer: "Verseny",
    Adventure: "Kaland",
    Action: "Akció",
    Eger: "Egér",
    Billentyuzet: "Billentyűzet",
    Headset: "Headset",
    Egerpad: "Egérpad",
    Mikrofon: "Mikrofon",
    Free: "Ingyenes",
    Story: "Történet"
};

const DISPLAY_TEXT_FIXES = [
    [/Ă¶/g, "ö"],
    [/ĂĽ/g, "ű"],
    [/Ĺ‘/g, "ő"],
    [/\bEs\b/g, "És"],
    [/\bes\b/g, "és"],
    [/\bJo\b/g, "Jó"],
    [/\bjo\b/g, "jó"],
    [/\bJovo\b/g, "Jövő"],
    [/\bjovo\b/g, "jövő"],
    [/\bEros\b/g, "Erős"],
    [/\beros\b/g, "erős"],
    [/\bVilag\b/g, "Világ"],
    [/\bvilag\b/g, "világ"],
    [/\bNehez\b/g, "Nehéz"],
    [/\bnehez\b/g, "nehéz"],
    [/\bLatvanyos\b/g, "Látványos"],
    [/\blatvanyos\b/g, "látványos"],
    [/\blatvany\b/g, "látvány"],
    [/\bKulonleges\b/g, "Különleges"],
    [/\bkulonleges\b/g, "különleges"],
    [/\bKulonbozo\b/g, "Különböző"],
    [/\bkulonbozo\b/g, "különböző"],
    [/\bKozosseg\b/g, "Közösség"],
    [/\bkozosseg\b/g, "közösség"],
    [/\bkozossegi\b/g, "közösségi"],
    [/\bfelfedezes\b/g, "felfedezés"],
    [/\bfelfedezesek\b/g, "felfedezések"],
    [/\breszletes\b/g, "részletes"],
    [/\breszletesseg\b/g, "részletesség"],
    [/\bszerepjatek\b/g, "szerepjáték"],
    [/\bszabadsag\b/g, "szabadság"],
    [/\bVarazslat\b/g, "Varázslat"],
    [/\bvarazslat\b/g, "varázslat"],
    [/\bkastelyfelfedezes\b/g, "kastélyfelfedezés"],
    [/\bMely\b/g, "Mély"],
    [/\bmely\b/g, "mély"],
    [/\bsajat\b/g, "saját"],
    [/\bbaratokkal\b/g, "barátokkal"],
    [/\brohogessel\b/g, "röhögéssel"],
    [/\bKemeny\b/g, "Kemény"],
    [/\bkemeny\b/g, "kemény"],
    [/\bTuleles\b/g, "Túlélés"],
    [/\btuleles\b/g, "túlélés"],
    [/\bfeszult\b/g, "feszült"],
    [/\bbazisepites\b/g, "bázisépítés"],
    [/\bjarmuvek\b/g, "járművek"],
    [/\bPorgos\b/g, "Pörgős"],
    [/\bporgos\b/g, "pörgős"],
    [/\bGyonyoru\b/g, "Gyönyörű"],
    [/\bgyonyoru\b/g, "gyönyörű"],
    [/\bGyargepites\b/g, "Gyárépítés"],
    [/\bgyargepites\b/g, "gyárépítés"],
    [/\bepites\b/g, "építés"],
    [/\bOrias\b/g, "Óriás"],
    [/\borias\b/g, "óriás"],
    [/\bmeglepoen\b/g, "meglepően"],
    [/\bkonnyu\b/g, "könnyű"],
    [/\bKonnyu\b/g, "Könnyű"],
    [/\bkenyelmes\b/g, "kényelmes"],
    [/\bKenyelmes\b/g, "Kényelmes"],
    [/\bpreciz\b/g, "precíz"],
    [/\bPreciz\b/g, "Precíz"],
    [/\beles\b/g, "éles"],
    [/\bEles\b/g, "Éles"],
    [/\bvillamgyors\b/g, "villámgyors"],
    [/\bVillamgyors\b/g, "Villámgyors"],
    [/\bhos\b/g, "hős"],
    [/\bHos\b/g, "Hős"],
    [/\borult\b/g, "őrült"],
    [/\bOrult\b/g, "Őrült"],
    [/\berzelmes\b/g, "érzelmes"],
    [/\bErzelmes\b/g, "Érzelmes"],
    [/\bkozepkori\b/g, "középkori"],
    [/\bKozepkori\b/g, "Középkori"],
    [/\bkarakterekkel\b/g, "karakterekkel"],
    [/\bkuldetessel\b/g, "küldetéssel"],
    [/\bkuldetesek\b/g, "küldetések"],
    [/\bmoddolhato\b/g, "moddolható"],
    [/\bvezetek nelkuli\b/g, "vezeték nélküli"],
    [/\bvezetekes\b/g, "vezetékes"],
    [/\bmegbizhato\b/g, "megbízható"],
    [/\bakkuido\b/g, "akkuidő"],
    [/\bminosegu\b/g, "minőségű"],
    [/\bkepessegek\b/g, "képességek"],
    [/\bkepminoseggel\b/g, "képminőséggel"],
    [/\bbeallitassal\b/g, "beállítással"],
    [/\bformaju\b/g, "formájú"],
    [/\bhangkeppel\b/g, "hangképpel"],
    [/\bkovetessel\b/g, "követéssel"],
    [/\bmegkozelitessel\b/g, "megközelítéssel"],
    [/\bhosszu\b/g, "hosszú"],
    [/\bHosszu\b/g, "Hosszú"],
    [/\bkivalo\b/g, "kiváló"],
    [/\bKivalo\b/g, "Kiváló"],
    [/\brogzitesehez\b/g, "rögzítéséhez"],
    [/\bmegjeleneshez\b/g, "megjelenéshez"],
    [/\bkomolyabb\b/g, "komolyabb"],
    [/\bhangulatu\b/g, "hangulatú"]
];

function localizeText(value) {
    let text = String(value || "");

    DISPLAY_TEXT_FIXES.forEach(([pattern, replacement]) => {
        text = text.replace(pattern, replacement);
    });

    return text;
}

function formatTag(tag) {
    return TAG_LABELS[tag] || localizeText(tag);
}

function escapeSvgText(value) {
    return String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}

function splitArtLines(value, maxLength = 26) {
    const words = String(value || "").split(/\s+/).filter(Boolean);
    const lines = [];
    let current = "";

    words.forEach((word) => {
        const nextValue = current ? `${current} ${word}` : word;

        if (nextValue.length <= maxLength || !current) {
            current = nextValue;
            return;
        }

        lines.push(current);
        current = word;
    });

    if (current) {
        lines.push(current);
    }

    return lines.slice(0, 2);
}

function buildGeneratedArt(type, item, variant = 0) {
    const palettes = type === "games"
        ? [
            ["#09111f", "#102645", "#35d6ff", "#ffd44d"],
            ["#160c28", "#2b1a4d", "#8a5cff", "#35d6ff"],
            ["#140d18", "#2d132f", "#ff4fd8", "#ffd44d"]
        ]
        : [
            ["#07101e", "#11345a", "#35d6ff", "#c1f6ff"],
            ["#0d1628", "#22395f", "#8a5cff", "#ffd44d"],
            ["#101015", "#24243f", "#ff4fd8", "#35d6ff"]
        ];
    const [bgStart, bgEnd, accent, accentSoft] = palettes[variant % palettes.length];
    const label = type === "games" ? "GAME SELECT" : "GEAR LOADOUT";
    const meta = escapeSvgText((item.tags || []).slice(0, 2).map((tag) => formatTag(tag)).join(" / "));
    const brand = escapeSvgText(item.brand);
    const titleLines = splitArtLines(item.name, type === "games" ? 24 : 22);
    const titleMarkup = titleLines
        .map((line, index) => `<text x="72" y="${262 + index * 68}" fill="#f4f7ff" font-size="${titleLines.length > 1 ? 54 : 62}" font-family="Arial, sans-serif" font-weight="800">${escapeSvgText(line)}</text>`)
        .join("");
    const dividerY = 312 + Math.max(titleLines.length - 1, 0) * 68;
    const metaY = dividerY + 56;
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 640" role="img" aria-label="${escapeSvgText(item.name)}">
            <defs>
                <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="${bgStart}" />
                    <stop offset="100%" stop-color="${bgEnd}" />
                </linearGradient>
                <linearGradient id="stripe" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="${accent}" stop-opacity="0.15" />
                    <stop offset="100%" stop-color="${accentSoft}" stop-opacity="0.55" />
                </linearGradient>
            </defs>
            <rect width="960" height="640" fill="url(#bg)" />
            <circle cx="760" cy="120" r="160" fill="${accent}" opacity="0.12" />
            <circle cx="170" cy="520" r="190" fill="${accentSoft}" opacity="0.12" />
            <path d="M0 460 L960 220" stroke="url(#stripe)" stroke-width="18" opacity="0.72" />
            <path d="M0 540 L960 300" stroke="${accent}" stroke-width="4" opacity="0.36" />
            <rect x="56" y="58" width="220" height="42" rx="21" fill="${accent}" opacity="0.88" />
            <text x="86" y="86" fill="#04111d" font-size="26" font-family="Arial, sans-serif" font-weight="700" letter-spacing="4">${label}</text>
            <text x="72" y="180" fill="#f4f7ff" font-size="34" font-family="Arial, sans-serif" font-weight="700" letter-spacing="2">${brand}</text>
            ${titleMarkup}
            <rect x="72" y="${dividerY}" width="440" height="2" fill="${accentSoft}" opacity="0.55" />
            <text x="72" y="${metaY}" fill="${accentSoft}" font-size="28" font-family="Arial, sans-serif" letter-spacing="3">${meta}</text>
            <text x="72" y="560" fill="#f4f7ff" font-size="22" font-family="Arial, sans-serif" opacity="0.72">Gamer Kings katalógus vizuál</text>
        </svg>
    `;

    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const FALLBACK_IMAGES = {
    games: "assets/hero/feature-releases.jpg",
    gear: "assets/hero/feature-tech.jpg"
};

const GAME_MAIN_CATEGORIES = [
    {
        tag: "FPS",
        label: "FPS játékok",
        description: "Lövölde, tactical shooter és battle royale címek."
    },
    {
        tag: "Racer",
        label: "Versenyjátékok",
        description: "Autós, sportos és vezetésközpontú játékok."
    },
    {
        tag: "Adventure",
        label: "Kalandjátékok",
        description: "Story, horror, sandbox és felfedezős kalandok."
    },
    {
        tag: "RPG",
        label: "RPG játékok",
        description: "Szerepjátékok, fantasy világok és buildelés."
    },
    {
        tag: "Action",
        label: "Akciójátékok",
        description: "Pörgős harc, fighting és látványos akció."
    }
];

const GEAR_MAIN_CATEGORIES = [
    {
        tag: "Eger",
        label: "Egerek",
        description: "Könnyű, wireless és kompetitív gamer egerek."
    },
    {
        tag: "Billentyuzet",
        label: "Billentyűzetek",
        description: "TKL, compact és gyors kapcsolós billentyűzetek."
    },
    {
        tag: "Headset",
        label: "Headsetek",
        description: "Játékhangra, voice chatre és hosszabb sessionökhöz."
    },
    {
        tag: "Egerpad",
        label: "Egérpadok",
        description: "Speed, control és nagy méretű desk mat megoldások."
    },
    {
        tag: "Mikrofon",
        label: "Mikrofonok",
        description: "Discordhoz, streamhez és tiszta kommunikációhoz."
    },
    {
        tag: "Streaming",
        label: "Streaming gear",
        description: "Webcamok, controllerek és creator setup eszközök."
    }
];

function buildStoreMeta(type, item) {
    if (type === "games") {
        return {
            label: "Steam oldal",
            cardLabel: "Steam vásárlás",
            url: `https://store.steampowered.com/search/?term=${encodeURIComponent(item.name)}`
        };
    }

    return {
        label: "Vásárlási link",
        cardLabel: "Termék link",
        url: `https://www.arukereso.hu/CategorySearch.php?st=${encodeURIComponent(`${item.brand} ${item.name}`)}`
    };
}

function getImageFallback(type) {
    return FALLBACK_IMAGES[type] || FALLBACK_IMAGES.games;
}

function buildImageWithFallback(src, fallback, alt, className) {
    return `<img class="${className}" src="${src}" alt="${alt}" loading="lazy" onerror="this.onerror=null;this.src='${fallback}'">`;
}

function buildGallery(slug, primaryImage) {
    return [
        primaryImage,
        `assets/gallery/${slug}-1.jpg`,
        `assets/gallery/${slug}-2.jpg`,
        `assets/gallery/${slug}-3.jpg`
    ];
}

function buildGameRequirements(name, tags) {
    const intense = ["FPS", "Action", "Open-World", "Shooter", "Sci-Fi", "RPG"];
    const relaxed = ["Chill", "Indie", "Sandbox", "Party"];
    const hasIntense = tags.some((tag) => intense.includes(tag));
    const hasRelaxed = tags.some((tag) => relaxed.includes(tag));

    if (hasRelaxed) {
        return {
            minimum: [
                "CPU: Intel Core i3 / Ryzen 3",
                "RAM: 8 GB",
                "GPU: GTX 750 Ti / RX 560",
                "Tárhely: 8-20 GB SSD"
            ],
            recommended: [
                "CPU: Intel Core i5 / Ryzen 5",
                "RAM: 16 GB",
                "GPU: GTX 1660 / RX 6600",
                "Tárhely: SSD javasolt"
            ]
        };
    }

    if (name.includes("Call of Duty") || name.includes("Cyberpunk") || name.includes("Dragon's Dogma 2") || name.includes("Ghost of Tsushima")) {
        return {
            minimum: [
                "CPU: Intel Core i5-8400 / Ryzen 5 2600",
                "RAM: 12-16 GB",
                "GPU: GTX 1060 / RX 580",
                "Tárhely: 70-150 GB SSD"
            ],
            recommended: [
                "CPU: Intel Core i7-10700K / Ryzen 7 5700X",
                "RAM: 16-32 GB",
                "GPU: RTX 3060 Ti / RX 6700 XT",
                "Tárhely: NVMe SSD javasolt"
            ]
        };
    }

    if (hasIntense) {
        return {
            minimum: [
                "CPU: Intel Core i5 / Ryzen 5",
                "RAM: 16 GB",
                "GPU: GTX 1060 / RX 580",
                "Tárhely: 40-80 GB"
            ],
            recommended: [
                "CPU: Intel Core i7 / Ryzen 7",
                "RAM: 16-32 GB",
                "GPU: RTX 3060 / RX 6700 XT",
                "Tárhely: SSD javasolt"
            ]
        };
    }

    return {
        minimum: [
            "CPU: Intel Core i5 / Ryzen 5",
            "RAM: 8-16 GB",
            "GPU: GTX 970 / RX 570",
            "Tárhely: 20-50 GB"
        ],
        recommended: [
            "CPU: Intel Core i7 / Ryzen 7",
            "RAM: 16 GB",
            "GPU: RTX 2060 / RX 6600",
            "Tárhely: SSD javasolt"
        ]
    };
}

function buildGearSpecs(item) {
    const type = item.tags[0];
    const shared = [`Márka: ${item.brand}`, `Kategória: ${item.tags.map((tag) => formatTag(tag)).join(" / ")}`];

    if (type === "Eger") {
        return [...shared, "Kapcsolat: vezetékes vagy wireless gamer mód", "Szenzor: gyors, kompetitív célzásra hangolt", "Tömeg: könnyű kivitel hosszú sessionökhöz"];
    }

    if (type === "Billentyuzet") {
        return [...shared, "Kiosztás: gamer TKL / compact / full-size változat", "Kapcsolók: mechanikus vagy gyors optikai switch", "Világítás: testreszabható RGB effektek"];
    }

    if (type === "Headset") {
        return [...shared, "Hangzás: térhangzásra és FPS audióra hangolva", "Mikrofon: voice chatre és Discordra optimalizált", "Kényelem: hosszú játékra tervezett párnázás"];
    }

    if (type === "Egerpad") {
        return [...shared, "Felület: speed vagy control gamer szövet", "Méret: desk setuphoz is passzoló nagy felület", "Használat: stabil célzás és sima siklás"];
    }

    if (type === "Mikrofon" || type === "Webcam") {
        return [...shared, "Tartalom: streamhez, Discordhoz és tartalomgyártáshoz", "Kezelés: plug and play setup", "Design: gaming deskhez illő megjelenés"];
    }

    return [...shared, "Gaming setupra hangolt kivitel", "Stabil teljesítmény mindennapi használatra", "Látványos RGB vagy modern gamer design"];
}

function resolveGameMainTag(item) {
    const tags = new Set(item.tags);

    if (["FPS", "Shooter", "Tactical", "Battle Royale", "Looter"].some((tag) => tags.has(tag))) {
        return "FPS";
    }

    if (["Racing", "Sport", "Simulation"].some((tag) => tags.has(tag)) || item.name.includes("Truck")) {
        return "Racer";
    }

    if (["RPG", "Soulslike"].some((tag) => tags.has(tag))) {
        return "RPG";
    }

    if (["Action", "Fighting"].some((tag) => tags.has(tag))) {
        return "Action";
    }

    return "Adventure";
}

function resolveGearMainTag(item) {
    const tags = new Set(item.tags);

    if (tags.has("Eger")) {
        return "Eger";
    }

    if (tags.has("Billentyuzet")) {
        return "Billentyuzet";
    }

    if (tags.has("Headset")) {
        return "Headset";
    }

    if (tags.has("Egerpad")) {
        return "Egerpad";
    }

    if (tags.has("Mikrofon")) {
        return "Mikrofon";
    }

    return "Streaming";
}

function enrichItems(items, type) {
    return items.map((item, index) => {
        const slug = slugify(`${type}-${item.brand}-${item.name}`);
        const assetImage = `assets/images/${slug}.jpg`;
        const generatedPrimaryImage = buildGeneratedArt(type, item, 0);
        const image = assetImage;
        const imageFallback = generatedPrimaryImage;
        const gallery = buildGallery(slug, image);
        const store = buildStoreMeta(type, item);
        const mainTag = type === "games"
            ? resolveGameMainTag(item)
            : resolveGearMainTag(item);
        const displayDesc = localizeText(item.desc);
        const displayTags = item.tags.map((tag) => formatTag(tag));
        const displayMainTag = formatTag(mainTag);
        const details = type === "games"
            ? [
                { label: "Fő típus", value: displayMainTag },
                { label: "Témák", value: displayTags.join(", ") },
                { label: "Platform", value: "Steam / PC" },
                { label: "Miért jó", value: `${displayDesc} Ideális választás, ha jó áron keresel látványos vagy pörgős címet.` }
            ]
            : [
                { label: "Fő típus", value: displayMainTag },
                { label: "Témák", value: displayTags.join(", ") },
                { label: "Brand vibe", value: `${item.brand} gamer setupra hangolt darab, erős stílussal és megbízható teljesítménnyel.` },
                { label: "Kinek ajánlott", value: `${displayDesc} Jó választás casual, ranked vagy stream setuphoz is.` }
            ];

        return {
            ...item,
            id: `${type}-${slug}-${index}`,
            type,
            mainTag,
            displayMainTag,
            displayTags,
            desc: displayDesc,
            image,
            gallery,
            imageFallback,
            store,
            details,
            specs: type === "games" ? buildGameRequirements(item.name, item.tags) : buildGearSpecs(item)
        };
    });
}

const enrichedGames = enrichItems(games, "games");
const enrichedGear = enrichItems(gear, "gear");
const itemLookup = new Map([...enrichedGames, ...enrichedGear].map((item) => [item.id, item]));
const catalogState = {
    games: {
        type: "games",
        items: enrichedGames,
        grid: gamesGrid,
        searchInput: gamesSearch,
        categoriesContainer: gamesCategories,
        selectedTag: "all",
        query: "",
        emptyTitle: "Nincs találat a játékok között.",
        emptyText: "Próbáld meg másik kereséssel vagy válassz egy másik műfajt.",
        allLabel: "Minden játék",
        accent: "Akció"
    },
    gear: {
        type: "gear",
        items: enrichedGear,
        grid: gearGrid,
        searchInput: gearSearch,
        categoriesContainer: gearCategories,
        selectedTag: "all",
        query: "",
        emptyTitle: "Nincs találat a perifériák között.",
        emptyText: "Próbáld meg másik márkával, kategóriával vagy kereséssel.",
        allLabel: "Minden periféria",
        accent: "Setup"
    }
};

function renderCards(items, target, accent) {
    if (!target) {
        return;
    }

    if (!items.length) {
        target.innerHTML = `
            <article class="empty-state alert">
                <h5>Nincs találat</h5>
                <p>Próbáld meg másik kereséssel vagy válassz másik kategóriát.</p>
            </article>
        `;
        return;
    }

    target.innerHTML = items.map((item, index) => {
        const visibleTags = item.mainTag
            ? [item.mainTag, ...item.tags.filter((tag) => tag !== item.mainTag)].slice(0, 2)
            : item.tags;
        const visibleDisplayTags = visibleTags.map((tag) => formatTag(tag));

        return `
        <article class="product-card card h-100" style="--card-index:${index % 12}" data-item-id="${item.id}" tabindex="0" role="button" aria-label="${item.name} megnyitása">
            <div class="product-media">
                ${buildImageWithFallback(item.image, item.imageFallback, item.name, "product-image")}
            </div>
            <div class="product-top">
                <div>
                <span class="product-brand">${item.brand}</span>
                    <h5>${item.name}</h5>
                </div>
                <span class="product-price">${item.price}</span>
            </div>
            <div class="product-tags">
                ${visibleDisplayTags.map((tag) => `<span class="product-tag">${tag}</span>`).join("")}
                <span class="product-tag">${accent}</span>
            </div>
            <p class="product-desc">${item.desc}</p>
            <div class="product-actions">
                <a class="action-link btn btn-outline-info" href="${item.store.url}" target="_blank" rel="noreferrer">${item.store.cardLabel}</a>
            </div>
            <span class="product-hint">Kattints a nagy nézetért vagy nyisd meg a linket</span>
        </article>
        `;
    }).join("");
}

function getCategoryLabel(type, tag) {
    if (tag === "all") {
        return type === "games" ? "Minden játék" : "Minden periféria";
    }

    if (type === "games") {
        const mainCategory = GAME_MAIN_CATEGORIES.find((category) => category.tag === tag);

        if (mainCategory) {
            return mainCategory.label;
        }

        const specialLabels = {
            "Open-World": "Open-world játékok",
            "Battle Royale": "Battle royale játékok",
            "Sci-Fi": "Sci-fi játékok",
            Free: "Ingyenes játékok",
            Story: "Történetközpontú játékok"
        };

        return specialLabels[tag] || `${formatTag(tag)} játékok`;
    }

    if (type === "gear") {
        const mainCategory = GEAR_MAIN_CATEGORIES.find((category) => category.tag === tag);

        if (mainCategory) {
            return mainCategory.label;
        }
    }

    return tag;
}

function getCategoryDescription(type, tag) {
    if (tag === "all") {
        return type === "games"
            ? "Az összes játék egyszerre, hogy gyorsan át tudd nézni a teljes listát."
            : "Az összes periféria egy helyen, márka és funkció szerint is kereshetően.";
    }

    if (type === "games") {
        const mainCategory = GAME_MAIN_CATEGORIES.find((category) => category.tag === tag);

        if (mainCategory) {
            return mainCategory.description;
        }
    }

    if (type === "gear") {
        const mainCategory = GEAR_MAIN_CATEGORIES.find((category) => category.tag === tag);

        if (mainCategory) {
            return mainCategory.description;
        }
    }

    return type === "games"
        ? `Mutasd a ${formatTag(tag)} címkével jelölt játékokat.`
        : `Mutasd a ${formatTag(tag)} címkével jelölt perifériákat.`;
}

function buildCategoryOptions(items, type) {
    if (type === "games" || type === "gear") {
        const mainCategories = type === "games" ? GAME_MAIN_CATEGORIES : GEAR_MAIN_CATEGORIES;
        const categories = mainCategories.map((category) => ({
            tag: category.tag,
            count: items.filter((item) => item.mainTag === category.tag).length,
            label: category.label,
            description: category.description
        }));

        return [
            {
                tag: "all",
                count: items.length,
                label: getCategoryLabel(type, "all"),
                description: getCategoryDescription(type, "all")
            },
            ...categories
        ];
    }

    return [];
}

function getFilteredItems(catalog) {
    const normalizedQuery = normalizeText(catalog.query);

    return catalog.items.filter((item) => {
        const matchesTag = catalog.selectedTag === "all" || item.mainTag === catalog.selectedTag;
        const searchable = normalizeText(`${item.brand} ${item.name} ${item.mainTag || ""} ${item.tags.join(" ")} ${item.desc}`);
        const matchesQuery = !normalizedQuery || searchable.includes(normalizedQuery);

        return matchesTag && matchesQuery;
    });
}

function renderCategoryCards(catalog) {
    if (!catalog.categoriesContainer) {
        return;
    }

    const options = buildCategoryOptions(catalog.items, catalog.type);

    catalog.categoriesContainer.innerHTML = options.map((option, index) => `
        <button
            class="category-card btn ${catalog.selectedTag === option.tag ? "active" : ""}"
            style="--card-index:${index % 8}"
            type="button"
            data-catalog="${catalog.type}"
            data-tag="${option.tag}"
            aria-pressed="${catalog.selectedTag === option.tag ? "true" : "false"}"
        >
            <span class="category-kicker">Fő típus</span>
            <strong>${option.label}</strong>
            <p>${option.description}</p>
            <span class="category-count">${option.count} db</span>
        </button>
    `).join("");
}

function renderCatalog(type) {
    const catalog = catalogState[type];

    if (!catalog) {
        return;
    }

    renderCategoryCards(catalog);

    const filteredItems = getFilteredItems(catalog);

    if (!filteredItems.length) {
        catalog.grid.innerHTML = `
            <article class="empty-state alert">
                <h5>${catalog.emptyTitle}</h5>
                <p>${catalog.emptyText}</p>
            </article>
        `;
        return;
    }

    renderCards(filteredItems, catalog.grid, catalog.accent);
}

function activateTab(targetId) {
    if (!targetId) {
        return;
    }

    tabButtons.forEach((item) => {
        const isActive = item.dataset.tab === targetId;
        item.classList.toggle("active", isActive);
        item.setAttribute("aria-selected", String(isActive));
    });

    tabPanels.forEach((panel) => {
        panel.classList.toggle("active", panel.id === targetId);
    });
}

function setModalImageSource(src, fallback, alt) {
    modalImage.alt = alt;
    modalImage.onerror = () => {
        modalImage.onerror = null;
        modalImage.src = fallback;
    };
    modalImage.src = src;
}

function openModal(item) {
    if (!itemModal) {
        return;
    }

    modalBrand.textContent = item.brand;
    modalTitle.textContent = item.name;
    modalPrice.textContent = item.price;
    modalDescription.textContent = item.desc;
    if (modalLink) {
        modalLink.href = item.store.url;
        modalLink.textContent = item.store.label;
    }
    modalTags.innerHTML = item.tags
        .map((tag) => `<span class="product-tag">${formatTag(tag)}</span>`)
        .join("");
    setModalImageSource(item.gallery[0] || item.image, item.imageFallback, item.name);
    modalDetails.innerHTML = item.details
        .map((detail) => `
            <div class="detail-card">
                <span class="detail-label">${detail.label}</span>
                <p>${detail.value}</p>
            </div>
        `)
        .join("");
    modalGallery.innerHTML = item.gallery
        .map((src, index) => `
            <button class="gallery-thumb ${index === 0 ? "active" : ""}" type="button" data-gallery-src="${src}" aria-label="${item.name} kép ${index + 1}">
                ${buildImageWithFallback(src, item.imageFallback, `${item.name} kép ${index + 1}`, "")}
            </button>
        `)
        .join("");

    requirementsWrap.innerHTML = item.type === "games"
        ? `
            <div class="requirements-grid">
                <div class="requirements-card">
                    <span class="requirements-title">Minimum Hardver</span>
                    <ul>${item.specs.minimum.map((line) => `<li>${line}</li>`).join("")}</ul>
                </div>
                <div class="requirements-card">
                    <span class="requirements-title">Ajánlott Hardver</span>
                    <ul>${item.specs.recommended.map((line) => `<li>${line}</li>`).join("")}</ul>
                </div>
            </div>
        `
        : `
            <div class="requirements-card">
                <span class="requirements-title">Specifikációk</span>
                <ul>${item.specs.map((line) => `<li>${line}</li>`).join("")}</ul>
            </div>
        `;

    modalGallery.querySelectorAll(".gallery-thumb").forEach((thumb) => {
        thumb.addEventListener("click", () => {
            setModalImageSource(thumb.dataset.gallerySrc, item.imageFallback, item.name);
            modalGallery.querySelectorAll(".gallery-thumb").forEach((itemThumb) => {
                itemThumb.classList.remove("active");
            });
            thumb.classList.add("active");
        });
    });

    itemModal.classList.add("open");
    itemModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    if (!itemModal) {
        return;
    }

    itemModal.classList.remove("open");
    itemModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

function bindGridEvents(grid) {
    if (!grid) {
        return;
    }

    const openCardFromTarget = (target) => {
        if (target.closest(".action-link")) {
            return;
        }

        const card = target.closest(".product-card");

        if (!card) {
            return;
        }

        const matched = itemLookup.get(card.dataset.itemId || "");

        if (matched) {
            openModal(matched);
        }
    };

    grid.addEventListener("click", (event) => {
        openCardFromTarget(event.target);
    });

    grid.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") {
            return;
        }

        if (event.target.closest(".action-link")) {
            return;
        }

        const card = event.target.closest(".product-card");

        if (!card) {
            return;
        }

        event.preventDefault();
        openCardFromTarget(card);
    });
}

if (modalClose) {
    modalClose.addEventListener("click", closeModal);
}

if (itemModal) {
    itemModal.addEventListener("click", (event) => {
        if (event.target === itemModal) {
            closeModal();
        }
    });
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && itemModal && itemModal.classList.contains("open")) {
        closeModal();
    }
});

tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
        activateTab(button.dataset.tab);
    });
});

tabLinks.forEach((link) => {
    link.addEventListener("click", () => {
        activateTab(link.dataset.openTab);
    });
});

Object.values(catalogState).forEach((catalog) => {
    if (catalog.searchInput) {
        catalog.searchInput.addEventListener("input", (event) => {
            catalog.query = event.target.value;
            renderCatalog(catalog.type);
        });
    }

    if (catalog.categoriesContainer) {
        catalog.categoriesContainer.addEventListener("click", (event) => {
            const trigger = event.target.closest(".category-card");

            if (!trigger) {
                return;
            }

            catalog.selectedTag = trigger.dataset.tag || "all";
            renderCatalog(catalog.type);
        });
    }
});

bindGridEvents(gamesGrid);
bindGridEvents(gearGrid);
renderCatalog("games");
renderCatalog("gear");
