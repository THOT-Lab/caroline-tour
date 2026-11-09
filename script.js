// Caroline Tour — single-page site, hash routes: #/ · #/tours · #/tour/<id> · #/caroline · #/contact
// ⚠ À RENSEIGNER : coordonnées réelles de Caroline (l'adresse ci-dessous est provisoire).
const CONTACT = {
  email: 'contact@caroline-tour.com',
  whatsapp: '', // ex. '33612345678' (indicatif sans +). Vide : la tuile WhatsApp est masquée.
};

const LANGS = ['fr', 'en', 'es'];
const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6"/></svg>';

// ---------- Interface text ----------
const UI = {
  fr: {
    skip: 'Aller au contenu', 'nav.tours': 'Les tours', 'nav.about': 'Caroline', 'nav.contact': 'Réserver',
    'foot.line': 'Visites privées · Nice · Antibes · Saint-Paul-de-Vence', 'foot.credits': 'Crédits photos', close: 'Fermer',
    sub: 'Visit French Riviera <em>with Caroline</em>', enter: 'Découvrir les tours',
    place: 'Côte d’Azur · France',
    toursEyebrow: 'Trois journées signature', toursTitle: 'Choisissez <em>votre</em> Riviera',
    toursLead: 'Chaque tour est une journée entière, privée, au rythme qui vous ressemble. Caroline vous accompagne, raconte, et vous ouvre les portes d’une Côte d’Azur que l’on ne voit pas seul.',
    discover: 'Voir la journée', back: 'Tous les tours', day: 'Votre journée', includes: 'Le tour comprend', book: 'Réserver ce tour',
    ask: 'Une question, une date, un groupe ? Caroline adapte chaque journée à vos envies.',
    nextTour: 'Tour suivant',
    aboutEyebrow: 'Votre guide', aboutTitle: 'Caroline <em>Lebert</em>',
    contactEyebrow: 'Contact direct', contactTitle: 'Écrivez à <em>Caroline</em>',
    contactLead: 'Pas d’intermédiaire : votre message arrive directement chez votre guide. Réponse personnelle sous 24 heures.',
    mail: 'Par e-mail', whatsapp: 'Par WhatsApp', whatsappSmall: 'Message instantané',
    fName: 'Nom', fEmail: 'E-mail', fTour: 'Tour souhaité', fDate: 'Date', fPeople: 'Personnes', fLang: 'Langue de la visite', fMsg: 'Votre message',
    fAny: 'Je ne sais pas encore / sur mesure', fSend: 'Envoyer la demande', fNote: 'Votre messagerie s’ouvre avec la demande prête à partir.',
    fOk: 'Merci ! Votre messagerie s’est ouverte avec votre demande : il ne reste qu’à l’envoyer.',
    langNames: { fr: 'Français', en: 'Anglais', es: 'Espagnol' },
    mailSubject: 'Demande de visite',
  },
  en: {
    skip: 'Skip to content', 'nav.tours': 'Tours', 'nav.about': 'Caroline', 'nav.contact': 'Book',
    'foot.line': 'Private tours · Nice · Antibes · Saint-Paul-de-Vence', 'foot.credits': 'Photo credits', close: 'Close',
    sub: 'Visit French Riviera <em>with Caroline</em>', enter: 'Discover the tours',
    place: 'Côte d’Azur · France',
    toursEyebrow: 'Three signature days', toursTitle: 'Choose <em>your</em> Riviera',
    toursLead: 'Each tour is a full private day, at the pace that suits you. Caroline walks with you, tells the stories, and opens the doors of a Riviera you would never find alone.',
    discover: 'See the day', back: 'All tours', day: 'Your day', includes: 'The tour includes', book: 'Book this tour',
    ask: 'A question, a date, a group? Caroline tailors every day to what you love.',
    nextTour: 'Next tour',
    aboutEyebrow: 'Your guide', aboutTitle: 'Caroline <em>Lebert</em>',
    contactEyebrow: 'Direct contact', contactTitle: 'Write to <em>Caroline</em>',
    contactLead: 'No middleman: your message goes straight to your guide. A personal reply within 24 hours.',
    mail: 'By e-mail', whatsapp: 'On WhatsApp', whatsappSmall: 'Instant message',
    fName: 'Name', fEmail: 'E-mail', fTour: 'Tour', fDate: 'Date', fPeople: 'Guests', fLang: 'Tour language', fMsg: 'Your message',
    fAny: 'Not sure yet / tailor-made', fSend: 'Send request', fNote: 'Your mail app opens with the request ready to go.',
    fOk: 'Thank you! Your mail app has opened with your request — just press send.',
    langNames: { fr: 'French', en: 'English', es: 'Spanish' },
    mailSubject: 'Tour request',
  },
  es: {
    skip: 'Ir al contenido', 'nav.tours': 'Los tours', 'nav.about': 'Caroline', 'nav.contact': 'Reservar',
    'foot.line': 'Visitas privadas · Niza · Antibes · Saint-Paul-de-Vence', 'foot.credits': 'Créditos fotográficos', close: 'Cerrar',
    sub: 'Visit French Riviera <em>with Caroline</em>', enter: 'Descubrir los tours',
    place: 'Costa Azul · Francia',
    toursEyebrow: 'Tres jornadas exclusivas', toursTitle: 'Elija <em>su</em> Riviera',
    toursLead: 'Cada tour es una jornada completa y privada, a su propio ritmo. Caroline le acompaña, le cuenta sus historias y le abre las puertas de una Costa Azul que nunca descubriría solo.',
    discover: 'Ver la jornada', back: 'Todos los tours', day: 'Su jornada', includes: 'El tour incluye', book: 'Reservar este tour',
    ask: '¿Una pregunta, una fecha, un grupo? Caroline adapta cada jornada a sus deseos.',
    nextTour: 'Siguiente tour',
    aboutEyebrow: 'Su guía', aboutTitle: 'Caroline <em>Lebert</em>',
    contactEyebrow: 'Contacto directo', contactTitle: 'Escriba a <em>Caroline</em>',
    contactLead: 'Sin intermediarios: su mensaje llega directamente a su guía. Respuesta personal en 24 horas.',
    mail: 'Por correo', whatsapp: 'Por WhatsApp', whatsappSmall: 'Mensaje instantáneo',
    fName: 'Nombre', fEmail: 'Correo', fTour: 'Tour deseado', fDate: 'Fecha', fPeople: 'Personas', fLang: 'Idioma de la visita', fMsg: 'Su mensaje',
    fAny: 'Aún no lo sé / a medida', fSend: 'Enviar la solicitud', fNote: 'Su correo se abre con la solicitud lista para enviar.',
    fOk: '¡Gracias! Su correo se ha abierto con la solicitud: solo falta enviarla.',
    langNames: { fr: 'Francés', en: 'Inglés', es: 'Español' },
    mailSubject: 'Solicitud de visita',
  },
};

// ---------- Tours ----------
const TOURS = [
  {
    id: 'saint-paul', cover: 'assets/saint-paul.jpg', side: 'assets/maeght.jpg',
    fr: {
      tag: 'Art & arrière-pays', title: 'Saint-Paul-de-Vence', em: '& la Fondation Maeght',
      summary: 'Le village perché des peintres, ses remparts et ses ruelles de galets, puis la Fondation Maeght, temple de l’art moderne au milieu des pins.',
      facts: ['Journée · 9 h – 17 h 30', 'Départ Nice, Cannes ou Antibes', 'Privé · 1 à 8 personnes'],
      day: [
        ['9:00', 'Route de l’arrière-pays', 'Prise en charge à votre hôtel. On quitte la mer pour les collines : oliviers, villas, et le profil de Saint-Paul qui surgit sur son éperon.'],
        ['9:45', 'Les remparts du village', 'Le tour des fortifications élevées sous François Ier, avec la vue sur les Préalpes et la mer au loin. Entrée par la porte de Vence.'],
        ['10:30', 'Rue Grande & la Grande Fontaine', 'Ruelles pavées de galets en calade, ateliers d’artistes, collégiale et ses trésors, la place de la Grande Fontaine.'],
        ['11:45', 'Sur les pas de Chagall', 'Le petit cimetière face au paysage, où repose Marc Chagall. Les artistes, les poètes, les stars de cinéma : l’histoire du village racontée par ses visiteurs.'],
        ['12:30', 'Déjeuner provençal', 'Pause libre en terrasse : Caroline vous recommande ses adresses, de la plus simple à la plus légendaire.'],
        ['14:30', 'Fondation Maeght', 'Inaugurée en 1964, dessinée par Josep Lluís Sert : le labyrinthe de Miró, la cour Giacometti, la mosaïque de Chagall, le bassin de Braque. L’art dans la nature.'],
        ['16:30', 'Option : Vence', 'Selon les jours d’ouverture, détour par la chapelle du Rosaire de Matisse, ou flânerie dans la vieille ville de Vence.'],
        ['17:30', 'Retour', 'Retour à votre hôtel, la tête pleine de couleurs.'],
      ],
      includes: ['Guide-conférencière privée toute la journée', 'Commentaires en français, anglais ou espagnol', 'Itinéraire adaptable à votre rythme', 'Entrées et déjeuner non compris'],
    },
    en: {
      tag: 'Art & hill villages', title: 'Saint-Paul-de-Vence', em: '& the Maeght Foundation',
      summary: 'The painters’ hilltop village, its ramparts and pebbled lanes, then the Maeght Foundation, a temple of modern art among the pines.',
      facts: ['Full day · 9 am – 5:30 pm', 'Pick-up in Nice, Cannes or Antibes', 'Private · 1 to 8 guests'],
      day: [
        ['9:00', 'Into the hills', 'Pick-up at your hotel. We leave the sea for the hills: olive groves, villas, and Saint-Paul rising on its rocky spur.'],
        ['9:45', 'The village ramparts', 'A walk around the walls built under King François I, with views of the Pre-Alps and the sea beyond. In through the Porte de Vence.'],
        ['10:30', 'Rue Grande & the Great Fountain', 'Pebble-paved lanes, artists’ studios, the collegiate church and its treasures, the square of the Grande Fontaine.'],
        ['11:45', 'In Chagall’s footsteps', 'The little cemetery facing the landscape where Marc Chagall rests. Artists, poets, film stars: the village told through its visitors.'],
        ['12:30', 'Provençal lunch', 'Free time on a terrace: Caroline shares her favourite places, from the simplest to the most legendary.'],
        ['14:30', 'Maeght Foundation', 'Opened in 1964 and designed by Josep Lluís Sert: Miró’s labyrinth, the Giacometti courtyard, Chagall’s mosaic, Braque’s pool. Art in nature.'],
        ['16:30', 'Option: Vence', 'Depending on opening days, a detour to Matisse’s Rosary Chapel, or a stroll in Vence’s old town.'],
        ['17:30', 'Return', 'Back to your hotel, full of colour.'],
      ],
      includes: ['Private licensed guide for the whole day', 'Commentary in English, French or Spanish', 'Itinerary adapted to your pace', 'Entrance fees and lunch not included'],
    },
    es: {
      tag: 'Arte y pueblos', title: 'Saint-Paul-de-Vence', em: 'y la Fundación Maeght',
      summary: 'El pueblo encaramado de los pintores, sus murallas y callejuelas empedradas, y luego la Fundación Maeght, templo del arte moderno entre pinos.',
      facts: ['Jornada · 9:00 – 17:30', 'Salida desde Niza, Cannes o Antibes', 'Privado · 1 a 8 personas'],
      day: [
        ['9:00', 'Hacia el interior', 'Recogida en su hotel. Dejamos el mar por las colinas: olivos, villas y la silueta de Saint-Paul sobre su espolón.'],
        ['9:45', 'Las murallas del pueblo', 'Vuelta a las fortificaciones construidas bajo Francisco I, con vistas a los Prealpes y al mar. Entrada por la puerta de Vence.'],
        ['10:30', 'Rue Grande y la Gran Fuente', 'Callejuelas empedradas, talleres de artistas, la colegiata y sus tesoros, la plaza de la Grande Fontaine.'],
        ['11:45', 'Tras los pasos de Chagall', 'El pequeño cementerio frente al paisaje donde descansa Marc Chagall. Artistas, poetas, estrellas de cine: la historia del pueblo contada por sus visitantes.'],
        ['12:30', 'Almuerzo provenzal', 'Pausa libre en una terraza: Caroline le recomienda sus direcciones, de la más sencilla a la más legendaria.'],
        ['14:30', 'Fundación Maeght', 'Inaugurada en 1964, diseñada por Josep Lluís Sert: el laberinto de Miró, el patio Giacometti, el mosaico de Chagall, el estanque de Braque. El arte en la naturaleza.'],
        ['16:30', 'Opción: Vence', 'Según los días de apertura, visita a la capilla del Rosario de Matisse o paseo por el casco antiguo de Vence.'],
        ['17:30', 'Regreso', 'Regreso a su hotel, lleno de colores.'],
      ],
      includes: ['Guía oficial privada toda la jornada', 'Explicaciones en español, francés o inglés', 'Itinerario adaptable a su ritmo', 'Entradas y almuerzo no incluidos'],
    },
  },
  {
    id: 'nice', cover: 'assets/nice-panorama.jpg', side: 'assets/vieux-nice.jpg',
    fr: {
      tag: 'Ville & panoramas', title: 'Nice', em: 'la Belle',
      summary: 'Le Vieux Nice et ses églises baroques, le marché du cours Saleya, les collines et leurs panoramas, puis la Promenade des Anglais au soleil couchant.',
      facts: ['Journée · 9 h – 18 h', 'À pied & en véhicule', 'Privé · 1 à 8 personnes'],
      day: [
        ['9:00', 'Cours Saleya', 'Le marché aux fleurs et aux primeurs, les couleurs ocre et rouge des façades : Nice se réveille. Dégustation de socca, encore chaude.'],
        ['10:00', 'Le Vieux Nice', 'Ruelles étroites, linge aux fenêtres, Palais Lascaris : l’histoire d’une ville longtemps savoyarde, devenue française en 1860.'],
        ['11:00', 'Les églises baroques', 'La cathédrale Sainte-Réparate, l’église du Gesù, la chapelle de la Miséricorde : ors, stucs et trompe-l’œil, un baroque niçois flamboyant.'],
        ['12:30', 'Déjeuner niçois', 'Pissaladière, farcis, salade niçoise authentique : Caroline vous emmène là où mangent les Niçois.'],
        ['14:00', 'La colline du Château', 'Montée au belvédère : la baie des Anges entière, le port Lympia, les toits du Vieux Nice. La plus belle vue de la ville.'],
        ['15:00', 'Panoramique des collines', 'Mont Boron et Cimiez : villas Belle Époque, arènes romaines, monastère franciscain et ses jardins suspendus au-dessus de la ville.'],
        ['16:45', 'La Promenade des Anglais', 'Le Negresco, les chaises bleues, la mer turquoise : la promenade mythique racontée, des hivernants anglais aux années folles.'],
        ['18:00', 'Fin de journée', 'Retour à votre hôtel, ou apéritif face à la mer.'],
      ],
      includes: ['Guide-conférencière privée toute la journée', 'Dégustation de socca', 'Commentaires en français, anglais ou espagnol', 'Déjeuner non compris'],
    },
    en: {
      tag: 'City & viewpoints', title: 'Nice', em: 'la Belle',
      summary: 'Old Nice and its baroque churches, the cours Saleya market, the hills and their panoramas, then the Promenade des Anglais at sunset.',
      facts: ['Full day · 9 am – 6 pm', 'On foot & by car', 'Private · 1 to 8 guests'],
      day: [
        ['9:00', 'Cours Saleya', 'The flower and produce market, ochre and red façades: Nice wakes up. A taste of socca, still warm.'],
        ['10:00', 'Old Nice', 'Narrow lanes, laundry at the windows, the Palais Lascaris: the story of a city long ruled by Savoy, French only since 1860.'],
        ['11:00', 'The baroque churches', 'Sainte-Réparate Cathedral, the Gesù church, the Chapelle de la Miséricorde: gold, stucco and trompe-l’œil, Nice’s flamboyant baroque.'],
        ['12:30', 'Niçois lunch', 'Pissaladière, stuffed vegetables, a true salade niçoise: Caroline takes you where locals eat.'],
        ['14:00', 'Castle Hill', 'Up to the lookout: the whole Baie des Anges, the Lympia harbour, the rooftops of Old Nice. The city’s finest view.'],
        ['15:00', 'Hills panorama', 'Mont Boron and Cimiez: Belle Époque villas, Roman arenas, the Franciscan monastery and its gardens above the city.'],
        ['16:45', 'Promenade des Anglais', 'The Negresco, the blue chairs, the turquoise sea: the legendary seafront, from English winter guests to the Roaring Twenties.'],
        ['18:00', 'End of the day', 'Back to your hotel, or an aperitif by the sea.'],
      ],
      includes: ['Private licensed guide for the whole day', 'Socca tasting', 'Commentary in English, French or Spanish', 'Lunch not included'],
    },
    es: {
      tag: 'Ciudad y miradores', title: 'Niza', em: 'la Bella',
      summary: 'El casco antiguo y sus iglesias barrocas, el mercado del cours Saleya, las colinas y sus panoramas, y la Promenade des Anglais al atardecer.',
      facts: ['Jornada · 9:00 – 18:00', 'A pie y en vehículo', 'Privado · 1 a 8 personas'],
      day: [
        ['9:00', 'Cours Saleya', 'El mercado de flores y verduras, fachadas ocres y rojas: Niza despierta. Degustación de socca, aún caliente.'],
        ['10:00', 'El Vieux Nice', 'Callejuelas estrechas, ropa tendida, el Palacio Lascaris: la historia de una ciudad saboyana durante siglos, francesa desde 1860.'],
        ['11:00', 'Las iglesias barrocas', 'La catedral de Santa Reparata, la iglesia del Gesù, la capilla de la Misericordia: oros, estucos y trampantojos, un barroco deslumbrante.'],
        ['12:30', 'Almuerzo nizardo', 'Pissaladière, farcis, auténtica ensalada nizarda: Caroline le lleva donde comen los nizardos.'],
        ['14:00', 'La colina del Castillo', 'Subida al mirador: toda la bahía de los Ángeles, el puerto Lympia, los tejados del casco antiguo. La vista más bella de la ciudad.'],
        ['15:00', 'Panorámica de las colinas', 'Mont Boron y Cimiez: villas Belle Époque, arenas romanas, el monasterio franciscano y sus jardines sobre la ciudad.'],
        ['16:45', 'La Promenade des Anglais', 'El Negresco, las sillas azules, el mar turquesa: el paseo mítico, de los invernantes ingleses a los locos años veinte.'],
        ['18:00', 'Fin de la jornada', 'Regreso a su hotel, o un aperitivo frente al mar.'],
      ],
      includes: ['Guía oficial privada toda la jornada', 'Degustación de socca', 'Explicaciones en español, francés o inglés', 'Almuerzo no incluido'],
    },
  },
  {
    id: 'antibes', cover: 'assets/antibes.jpg', side: 'assets/picasso.jpg',
    fr: {
      tag: 'Mer & Picasso', title: 'Antibes', em: '& le Cap',
      summary: 'Le panoramique du Cap d’Antibes, le port Vauban et ses yachts, les remparts du vieil Antibes, puis le musée Picasso dans le château Grimaldi.',
      facts: ['Journée · 9 h – 17 h 30', 'Départ Nice, Cannes ou Antibes', 'Privé · 1 à 8 personnes'],
      day: [
        ['9:00', 'Le tour du Cap', 'La route du bord de mer entre pins et criques, les villas des années folles où séjournèrent Fitzgerald et tant d’autres.'],
        ['10:00', 'Plateau de la Garoupe', 'Le phare et la petite chapelle des marins : panorama à 360°, de l’Estérel aux Alpes enneigées par temps clair.'],
        ['11:00', 'Port Vauban & Fort Carré', 'Le plus grand port de plaisance d’Europe, le « quai des milliardaires », et la silhouette en étoile du Fort Carré.'],
        ['12:30', 'Déjeuner dans le vieil Antibes', 'Pause au cœur de la vieille ville, entre poissons du jour et cuisine provençale.'],
        ['14:00', 'Le vieil Antibes', 'Le marché provençal couvert, les remparts face à la mer, la cathédrale Notre-Dame de l’Immaculée-Conception, le quartier du Safranier.'],
        ['15:30', 'Musée Picasso', 'En 1946, Picasso installe son atelier au château Grimaldi et y peint « La Joie de vivre ». Œuvres du maître, et la terrasse des sculptures de Germaine Richier au-dessus de la mer.'],
        ['17:00', 'Option : Juan-les-Pins', 'La pinède du jazz et sa plage, pour terminer les pieds dans l’eau.'],
        ['17:30', 'Retour', 'Retour à votre hôtel.'],
      ],
      includes: ['Guide-conférencière privée toute la journée', 'Commentaires en français, anglais ou espagnol', 'Itinéraire adaptable à votre rythme', 'Entrée du musée et déjeuner non compris'],
    },
    en: {
      tag: 'Sea & Picasso', title: 'Antibes', em: '& the Cape',
      summary: 'A panoramic drive round Cap d’Antibes, Port Vauban and its yachts, the ramparts of old Antibes, then the Picasso Museum in the Château Grimaldi.',
      facts: ['Full day · 9 am – 5:30 pm', 'Pick-up in Nice, Cannes or Antibes', 'Private · 1 to 8 guests'],
      day: [
        ['9:00', 'Around the Cape', 'The coast road between pines and coves, past the Jazz Age villas where Fitzgerald and so many others stayed.'],
        ['10:00', 'La Garoupe plateau', 'The lighthouse and the sailors’ chapel: a 360° view from the Esterel to the snowy Alps on a clear day.'],
        ['11:00', 'Port Vauban & Fort Carré', 'Europe’s largest marina, the “billionaires’ quay”, and the star-shaped silhouette of Fort Carré.'],
        ['12:30', 'Lunch in old Antibes', 'A break in the heart of the old town, with the catch of the day and Provençal cooking.'],
        ['14:00', 'Old Antibes', 'The covered Provençal market, the sea ramparts, the cathedral, and the Safranier quarter.'],
        ['15:30', 'Picasso Museum', 'In 1946 Picasso set up his studio in the Château Grimaldi and painted “La Joie de vivre” there. His works, and the terrace of Germaine Richier’s sculptures above the sea.'],
        ['17:00', 'Option: Juan-les-Pins', 'The jazz pine grove and its beach, to end the day by the water.'],
        ['17:30', 'Return', 'Back to your hotel.'],
      ],
      includes: ['Private licensed guide for the whole day', 'Commentary in English, French or Spanish', 'Itinerary adapted to your pace', 'Museum entrance and lunch not included'],
    },
    es: {
      tag: 'Mar y Picasso', title: 'Antibes', em: 'y el Cabo',
      summary: 'Panorámica del Cap d’Antibes, el puerto Vauban y sus yates, las murallas del viejo Antibes y el museo Picasso en el castillo Grimaldi.',
      facts: ['Jornada · 9:00 – 17:30', 'Salida desde Niza, Cannes o Antibes', 'Privado · 1 a 8 personas'],
      day: [
        ['9:00', 'La vuelta al Cabo', 'La carretera costera entre pinos y calas, ante las villas de los años veinte donde se alojaron Fitzgerald y tantos otros.'],
        ['10:00', 'Meseta de la Garoupe', 'El faro y la capilla de los marineros: panorama de 360°, del Esterel a los Alpes nevados en días claros.'],
        ['11:00', 'Port Vauban y Fuerte Carré', 'El mayor puerto deportivo de Europa, el «muelle de los millonarios» y la silueta en estrella del Fuerte Carré.'],
        ['12:30', 'Almuerzo en el viejo Antibes', 'Pausa en el corazón del casco antiguo, entre pescado del día y cocina provenzal.'],
        ['14:00', 'El viejo Antibes', 'El mercado provenzal cubierto, las murallas frente al mar, la catedral y el barrio del Safranier.'],
        ['15:30', 'Museo Picasso', 'En 1946 Picasso instaló su taller en el castillo Grimaldi y pintó allí «La alegría de vivir». Sus obras y la terraza de esculturas de Germaine Richier sobre el mar.'],
        ['17:00', 'Opción: Juan-les-Pins', 'La pineda del jazz y su playa, para terminar junto al agua.'],
        ['17:30', 'Regreso', 'Regreso a su hotel.'],
      ],
      includes: ['Guía oficial privada toda la jornada', 'Explicaciones en español, francés o inglés', 'Itinerario adaptable a su ritmo', 'Entrada al museo y almuerzo no incluidos'],
    },
  },
];

// ---------- Caroline (sources : fiche guideyourtrip.com, tourHQ FR17631, Fédération des Guides Interprètes PACA) ----------
const ABOUT = {
  fr: {
    paras: [
      'Avant de devenir guide, Caroline Lebert a été pendant dix ans interprète de conférence à Paris. Elle a ensuite étudié l’histoire de l’art à l’École du Louvre et obtenu son diplôme de guide-conférencière en 1998.',
      'Depuis, elle fait découvrir la Côte d’Azur, de Cannes à Monaco, ainsi que la Provence : les grands sites incontournables comme les chemins de traverse, en visites thématiques d’une demi-journée, d’une journée ou de plusieurs jours.',
      'Elle donne aussi des conférences d’histoire de l’art, de l’Antiquité égyptienne à l’art contemporain. Membre de la Fédération des Guides Interprètes PACA, elle guide en français, en anglais et en espagnol.',
    ],
    badges: [['1998', 'guide-conférencière diplômée'], ['École du Louvre', 'formation en histoire de l’art'], ['3 langues', 'français, anglais, espagnol']],
    quote: 'La Riviera ne se visite pas, elle se raconte.',
    portrait: 'Guide-conférencière depuis 1998',
  },
  en: {
    paras: [
      'Before becoming a guide, Caroline Lebert spent ten years as a conference interpreter in Paris. She then studied art history at the École du Louvre and qualified as a licensed tour guide in 1998.',
      'Since then she has been showing visitors the French Riviera, from Cannes to Monaco, as well as Provence: the must-see highlights and the paths off the beaten track, on themed tours of half a day, a full day or several days.',
      'She also gives art history lectures, from ancient Egypt to contemporary art. A member of the Fédération des Guides Interprètes PACA, she guides in English, French and Spanish.',
    ],
    badges: [['1998', 'licensed tour guide'], ['École du Louvre', 'trained in art history'], ['3 languages', 'English, French, Spanish']],
    quote: 'The Riviera isn’t seen. It’s told.',
    portrait: 'Licensed guide since 1998',
  },
  es: {
    paras: [
      'Antes de ser guía, Caroline Lebert trabajó diez años como intérprete de conferencias en París. Después estudió historia del arte en la École du Louvre y obtuvo su título de guía oficial en 1998.',
      'Desde entonces da a conocer la Costa Azul, de Cannes a Mónaco, y también la Provenza: los lugares imprescindibles y los caminos menos transitados, en visitas temáticas de media jornada, una jornada o varios días.',
      'Imparte además conferencias de historia del arte, desde el antiguo Egipto hasta el arte contemporáneo. Miembro de la Fédération des Guides Interprètes PACA, guía en español, francés e inglés.',
    ],
    badges: [['1998', 'guía oficial titulada'], ['École du Louvre', 'formación en historia del arte'], ['3 idiomas', 'español, francés, inglés']],
    quote: 'La Riviera no se visita: se cuenta.',
    portrait: 'Guía oficial desde 1998',
  },
};

const HERO = [
  { src: 'assets/hero-eze.jpg', place: 'Èze' },
  { src: 'assets/hero-croisette.jpg', place: 'Cannes · La Croisette' },
  { src: 'assets/hero-nice.jpg', place: 'Nice · Baie des Anges' },
  { src: 'assets/hero-antibes.jpg', place: 'Cap d’Antibes' },
];

// ---------- State & helpers ----------
const store = { get(k) { try { return localStorage.getItem(k); } catch { return null; } }, set(k, v) { try { localStorage.setItem(k, v); } catch {} } };
let lang = store.get('ct-lang') || (navigator.languages || [navigator.language]).map(l => l.slice(0, 2)).find(l => LANGS.includes(l)) || 'fr';
let slideTimer = null;
const main = document.getElementById('main');
const t = key => UI[lang][key] ?? UI.fr[key] ?? key;
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// ---------- Views ----------
function home() {
  return `
  <section class="hero" aria-label="Caroline Tour">
    <div class="hero__slides">${HERO.map((s, i) => `<div class="hero__slide${i ? '' : ' is-on'}"><img src="${s.src}" alt="" ${i ? 'loading="lazy"' : 'fetchpriority="high"'}></div>`).join('')}</div>
    <div class="hero__inner">
      <h1 class="logo logo--hero"><span class="logo__script">Caroline</span><span class="logo__caps">Tour</span></h1>
      <p class="hero__sub">${t('sub')}</p>
      <a class="btn" href="#/tours">${t('enter')} ${arrow}</a>
    </div>
    <div class="hero__place" id="hero-place">${esc(HERO[0].place)}</div>
    <div class="hero__dots">${HERO.map((s, i) => `<button type="button" aria-label="${esc(s.place)}" class="${i ? '' : 'is-on'}" data-slide="${i}"></button>`).join('')}</div>
  </section>`;
}

function tours() {
  return `
  <section class="page">
    <span class="eyebrow">${t('toursEyebrow')}</span>
    <h1 class="title">${t('toursTitle')}</h1>
    <p class="lead">${t('toursLead')}</p>
    <div class="tours">
      ${TOURS.map((tour, i) => { const c = tour[lang]; return `
        <a class="card reveal" href="#/tour/${tour.id}">
          <img src="${tour.cover}" alt="${esc(c.title)}" loading="lazy">
          <span class="card__num">0${i + 1}</span>
          <span class="card__tag">${esc(c.tag)}</span>
          <div class="card__body">
            <h2>${esc(c.title)} <em>${esc(c.em)}</em></h2>
            <p>${esc(c.summary)}</p>
            <span class="btn">${t('discover')} ${arrow}</span>
          </div>
        </a>`; }).join('')}
    </div>
  </section>`;
}

function tourView(id) {
  const index = TOURS.findIndex(x => x.id === id);
  if (index < 0) return tours();
  const tour = TOURS[index], c = tour[lang], next = TOURS[(index + 1) % TOURS.length];
  return `
  <section class="detail-hero">
    <img src="${tour.cover}" alt="${esc(c.title)}">
    <div class="detail-hero__inner">
      <a class="back" href="#/tours">← ${t('back')}</a><br>
      <span class="eyebrow" style="color:var(--gold)">${esc(c.tag)}</span>
      <h1 class="title">${esc(c.title)} <em>${esc(c.em)}</em></h1>
      <p class="lead">${esc(c.summary)}</p>
      <ul class="facts">${c.facts.map(f => `<li>${esc(f)}</li>`).join('')}</ul>
    </div>
  </section>
  <section class="page" style="padding-top:0">
    <div class="detail">
      <div>
        <span class="eyebrow">${t('day')}</span>
        <ol class="day">${c.day.map(([time, h, p]) => `<li class="reveal"><time>${time}</time><div><h3>${esc(h)}</h3><p>${esc(p)}</p></div></li>`).join('')}</ol>
      </div>
      <aside class="aside">
        <figure><img src="${tour.side}" alt="" loading="lazy"></figure>
        <div class="panel">
          <h3>${t('includes')}</h3>
          <ul>${c.includes.map(x => `<li>${esc(x)}</li>`).join('')}</ul>
          <a class="btn btn--ochre" href="#/contact?tour=${tour.id}">${t('book')} ${arrow}</a>
        </div>
        <p class="lead" style="font-size:18px">${t('ask')}</p>
      </aside>
    </div>
    <nav class="next">
      <a href="#/tours"><small>←</small><span>${t('back')}</span></a>
      <a href="#/tour/${next.id}" style="text-align:right"><small>${t('nextTour')} →</small><span>${esc(next[lang].title)} ${esc(next[lang].em)}</span></a>
    </nav>
  </section>`;
}

function about() {
  const a = ABOUT[lang];
  return `
  <section class="page">
    <div class="about">
      <div class="portrait reveal">
        <img src="assets/caroline.jpg" alt="Caroline Lebert">
        <div class="portrait__mono"><b>Caroline Lebert</b><span>${esc(a.portrait)}</span></div>
      </div>
      <div class="about__text">
        <span class="eyebrow">${t('aboutEyebrow')}</span>
        <h1 class="title">${t('aboutTitle')}</h1>
        ${a.paras.map(p => `<p>${esc(p)}</p>`).join('')}
        <div class="badges">${a.badges.map(([b, s]) => `<div class="badge"><b>${esc(b)}</b><span>${esc(s)}</span></div>`).join('')}</div>
        <a class="btn btn--dark" href="#/contact">${t('nav.contact')} ${arrow}</a>
      </div>
    </div>
    <p class="quote reveal">${esc(a.quote)}</p>
  </section>`;
}

function contact(params) {
  const chosen = params.get('tour') || '';
  const wa = CONTACT.whatsapp ? `<a href="https://wa.me/${CONTACT.whatsapp}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3 3l-4.5 1.5Z"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8c-1-.5-2.3-1.8-2.8-2.8l.8-1-1-2L9 8.5Z"/></svg><span><b>${t('whatsapp')}</b><small>${t('whatsappSmall')}</small></span></a>` : '';
  return `
  <section class="page">
    <div class="contact">
      <div>
        <span class="eyebrow">${t('contactEyebrow')}</span>
        <h1 class="title">${t('contactTitle')}</h1>
        <p class="lead">${t('contactLead')}</p>
        <div class="direct">
          <a href="mailto:${CONTACT.email}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6 8.5 7 8.5-7"/></svg><span><b>${t('mail')}</b><small>${esc(CONTACT.email)}</small></span></a>
          ${wa}
        </div>
      </div>
      <form class="form" id="form" novalidate>
        <div class="field"><label for="f-name">${t('fName')}</label><input id="f-name" name="name" required autocomplete="name"></div>
        <div class="field"><label for="f-email">${t('fEmail')}</label><input id="f-email" name="email" type="email" required autocomplete="email"></div>
        <div class="field full"><label for="f-tour">${t('fTour')}</label>
          <select id="f-tour" name="tour">
            ${TOURS.map(x => `<option value="${x.id}"${x.id === chosen ? ' selected' : ''}>${esc(x[lang].title)} ${esc(x[lang].em)}</option>`).join('')}
            <option value="custom"${chosen ? '' : ' selected'}>${t('fAny')}</option>
          </select></div>
        <div class="field"><label for="f-date">${t('fDate')}</label><input id="f-date" name="date" type="date" min="${new Date().toISOString().slice(0, 10)}"></div>
        <div class="field"><label for="f-people">${t('fPeople')}</label><input id="f-people" name="people" type="number" min="1" max="30" value="2"></div>
        <div class="field full"><label for="f-lang">${t('fLang')}</label>
          <select id="f-lang" name="lang">${LANGS.map(l => `<option value="${l}"${l === lang ? ' selected' : ''}>${t('langNames')[l]}</option>`).join('')}</select></div>
        <div class="field full"><label for="f-msg">${t('fMsg')}</label><textarea id="f-msg" name="message"></textarea></div>
        <button class="btn btn--dark" type="submit">${t('fSend')} ${arrow}</button>
        <p class="form__note">${t('fNote')}</p>
      </form>
    </div>
  </section>`;
}

// ---------- Router ----------
function render() {
  const [path, query = ''] = location.hash.replace(/^#/, '').split('?');
  const parts = path.split('/').filter(Boolean);
  const params = new URLSearchParams(query);
  let view = parts[0] || 'home', html;
  if (view === 'tours') html = tours();
  else if (view === 'tour') html = tourView(parts[1]);
  else if (view === 'caroline') html = about();
  else if (view === 'contact') html = contact(params);
  else { view = 'home'; html = home(); }
  const swap = () => {
    clearInterval(slideTimer);
    document.body.dataset.view = view;
    main.innerHTML = html;
    document.querySelectorAll('.bar__nav a').forEach(a => a.toggleAttribute('aria-current', a.getAttribute('href') === `#/${view === 'tour' ? 'tours' : view}`));
    window.scrollTo(0, 0);
    if (view === 'home') startSlides();
    if (view === 'contact') bindForm();
  };
  if (document.startViewTransition && !document.hidden && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const vt = document.startViewTransition(swap);
    vt.ready.catch(() => {}); vt.finished.catch(() => {});
  } else swap();
}

function startSlides() {
  const slides = [...document.querySelectorAll('.hero__slide')], dots = [...document.querySelectorAll('.hero__dots button')], place = document.getElementById('hero-place');
  let i = 0;
  const go = n => {
    i = (n + slides.length) % slides.length;
    slides.forEach((s, k) => s.classList.toggle('is-on', k === i));
    dots.forEach((d, k) => d.classList.toggle('is-on', k === i));
    place.textContent = HERO[i].place;
  };
  dots.forEach((d, k) => d.addEventListener('click', () => { go(k); clearInterval(slideTimer); slideTimer = setInterval(() => go(i + 1), 7000); }));
  slideTimer = setInterval(() => go(i + 1), 7000);
}

function bindForm() {
  const form = document.getElementById('form');
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const d = Object.fromEntries(new FormData(form));
    const tour = TOURS.find(x => x.id === d.tour);
    const body = [
      `${t('fName')} : ${d.name}`, `${t('fEmail')} : ${d.email}`,
      `${t('fTour')} : ${tour ? `${tour[lang].title} ${tour[lang].em}` : t('fAny')}`,
      `${t('fDate')} : ${d.date || '—'}`, `${t('fPeople')} : ${d.people}`, `${t('fLang')} : ${t('langNames')[d.lang]}`,
      '', d.message || '',
    ].join('\n');
    location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(`${t('mailSubject')} · ${tour ? tour[lang].title : 'Caroline Tour'} · ${d.name}`)}&body=${encodeURIComponent(body)}`;
    if (!form.querySelector('.form__ok')) form.insertAdjacentHTML('beforeend', `<p class="form__ok" role="status">${t('fOk')}</p>`);
  });
}

// ---------- Language ----------
function setLang(next) {
  lang = LANGS.includes(next) ? next : 'fr';
  store.set('ct-lang', lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('.lang button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  render();
}
document.querySelectorAll('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

// ---------- Credits ----------
const CREDITS = [
  ['Èze vu de la Grande Corniche', 'Jimi magic', 'Domaine public', 'Eze_viewed_from_Grand_Corniche.JPG'],
  ['Cannes, la Croisette', 'Txllxt TxllxT', 'CC BY-SA 4.0', 'Cannes_-_Boulevard_de_la_Croisette_-_View_ESE.jpg'],
  ['Nice, vue de la colline du Château', 'Spike', 'CC BY-SA 4.0', 'Nice_from_Castle_Hill_01.jpg'],
  ['Cap d’Antibes, vue aérienne', 'Patrick Rouzet', 'CC BY-SA 3.0', 'Cap_d%27Antibes_vue_aerienne.jpg'],
  ['Saint-Paul-de-Vence', 'Jean-Pierre Lozi', 'CC BY-SA 4.0', 'Saint-Paul-de-Vence,_Alpes-Maritimes,_France.jpg'],
  ['Fondation Maeght', 'Waterborough', 'CC BY-SA 3.0', '08_Fondation_Maeght.JPG'],
  ['Nice, Promenade des Anglais', 'Uhooep', 'CC BY-SA 4.0', 'Promenade_des_Anglais_(Nice),_France.jpg'],
  ['Nice, cours Saleya', 'Zairon', 'CC BY-SA 4.0', 'Nice_Cours_Saleya_12.jpg'],
  ['Musée Picasso, Antibes', 'Clemensfranz', 'CC BY-SA 3.0', 'Antibes_Museum_Picasso.jpg'],
];
const dialog = document.getElementById('credits');
document.getElementById('credits-open').addEventListener('click', () => {
  document.getElementById('credits-list').innerHTML = CREDITS.map(([what, who, lic, file]) =>
    `<li>${esc(what)} — ${esc(who)}, ${esc(lic)}, <a href="https://commons.wikimedia.org/wiki/File:${file}" target="_blank" rel="noopener">Wikimedia Commons</a></li>`).join('')
    + '<li>Portrait de Caroline Lebert — sa fiche de guide, <a href="https://guideyourtrip.com/en/tourguide/french-riviera/caroline-lebert" target="_blank" rel="noopener">guideyourtrip.com</a></li>';
  dialog.showModal();
});

window.addEventListener('hashchange', render);
setLang(lang);
