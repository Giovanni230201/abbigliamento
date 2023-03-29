import { Product } from './../models/product.model';

export const PRODUCTS: Product[]=[
  {
    _id: 1,
    sesso: 'uomo',
    title: 'Il cappotto lungo',
    description: "Il maxi cappotto sarà il capo chiave dell'inverno 2023/24. Avvolgente, scende fino ai piedi spazzando il terreno, preferibilmente tagliato in una bella lana. Proposto anche in pelle, tweed, cashmere double face e altro ancora, a volte si trasforma in mantella. Spesso disponibile in nero, in stile abito talare o con un tocco gotico alla Matrix o simil-Nosferatu, oppure sotto forma di grande pelliccia, s’indossa a petto e gambe scoperte, tra gli altri da Loewe, Dolce & Gabbana e Ami Paris" ,
    image: 'https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000/m/4b5c/52e4/90c3/62a9/4392/41d7/36f7/c21b/7adc/16f5/16f5.jpg',
    price: 700,
    published: true
  },

  {
    _id: 2,
    sesso: 'uomo',
    title: 'Il completo in tutte le sue declinazioni',
    description: "L'uomo torna ai fondamentali, ma attraverso un approccio più sofisticato e mirato. Il ritorno del completo, già da qualche stagione, continua. Ma questo grande classico viene rivisitato attraverso piccoli tocchi, nella costruzione, nell'abbottonatura, nelle proporzioni. È prediletta una silhouette elegante-disinvolta, con pantaloni ampi e grandi giacche destrutturate con spalle cadenti. La giacca spesso si sdoppia, si allunga in una stola, sperimentano asimmetrie e aperture insolite, volentieri indossata con un dolcevita.",
    image: 'https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000/m/f388/df12/84b8/e523/5b4d/1d13/110b/34ae/1fee/3e65/3e65.jpg',
    price: 500,
    published: true
  },

  {
    _id: 3,
    sesso: 'uomo',
    title: 'I pantaloni larghi',
    description: "La silhouette si slancia e si allunga più che mai attraverso pantaloni oversize, che scivolano e a volte addirittura si avvitano a spirale in fondo alle gambe in uno spirito anni Novanta. Comfort è la nuova parola d'ordine. Con le pince o chiusi con la coulisse, o ancora a pieghe o a drappeggi, i pantaloni sono ampi e larghissimi, a volte assumono l'aspetto di gonne, come da Kenzo. Particolarmente in ascesa il modello cargo, arricchito da maxi tasche, disponibile in tutti i materiali.",
    image: 'https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000/m/5d08/0f7b/da46/e9c6/33c2/3739/ca37/e72a/3bb1/4532/4532.jpg',
    price: 250,
    published: true
  },

  {
    _id: 4,
    sesso: 'uomo',
    title: 'Cocooning',
    description:"Se lo streetwear è meno presente nei guardaroba maschili, la nozione di comfort rimane essenziale e viene addirittura accentuata da una dimensione quasi affettivo-infantile, con molti capi regressivi che rimandano all'infanzia. Gli abiti devono proteggere, ma anche e soprattutto coccolare, attraverso materiali caldi e soffici e volumi avvolgenti. Il guardaroba del prossimo inverno deve avere almeno un capo loungewear (legging, jogging o altro, realizzato in un materiale ultra morbido) e un capo ad effetto peluche, come giacca o pantalone in lana pettinata, giubbotto in pelo morbido, cardigan in lana riccia, completi in cashmere, ecc.",
    image: 'https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000/m/b799/3fb4/48b0/9105/b815/4911/7de6/924a/029d/171a/171a.jpg',
    price: 451,
    published: true
  },

  {
    _id: 5,
    sesso: 'uomo',
    title: ' Un tocco scozzese',
    description: "Fra tartan, fantasie Fair Isle e kilt, lo spirito scozzese ha attraversato le passerelle di questa stagione. Innanzitutto è stata definitivamente sdoganata la gonna per l’uomo. Introdotta nel guardaroba maschile qualche anno fa, è ormai onnipresente, soprattutto sotto forma di kilt con gonna a portafoglio plissettata, più facile da indossare. La vena scozzese è molto presente anche grazie ai quadretti tipici dei guerrieri scozzesi usati per evidenziare, a scelta, uno spirito punk, uno stile grunge attraverso le camicie da boscaiolo, o un lato british chic tramite il classico completo a quadri.",
    image: 'https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000/m/7e8c/2978/23e7/d148/adb3/7430/8cc0/bee3/9427/1adc/1adc.jpg',
    price: 320,
    published: true
  },

  {
    _id: 6,
    sesso: 'uomo',
    title: 'Running',
    description: "Gli short indossati sopra pantaloni o leggings saranno l'ultima moda chic del prossimo inverno, per un look sportivo da maratoneta. Alti e larghi, i pantaloncini si trasformano facilmente in comodi bermuda da sostituire ai pantaloni. La tendenza è anche parte di un movimento di fondo, visto sulla maggior parte delle passerelle, che consiste nel sovrapporre e moltiplicare strati di vestiti.",
    image: 'https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000/m/be2a/6458/377c/95ee/3b6b/d4f2/7fb6/d232/ee46/9497/9497.jpg',
    price: 444,
    published: true
  },

  {
    _id: 7,
    sesso: 'uomo',
    title: 'La giacca dello smoking',
    description: "Con il ritorno a un guardaroba più tradizionale, la giacca da smoking si preannuncia come il nuovo capo irrinunciabile da avere nel proprio guardaroba. Riconoscibile tra tutte con i suoi revers a punta o sciallata e ricoperta di raso nero, viene sdrammatizzata, indossata a torso nudo, oppure abbinata a una felpa con cappuccio o pantaloni casual. Viene rivisitata in forme insolite o trasformata in cappotto da Dolce & Gabbana, Emporio Armani, Fendi, Hed Mayner e Sean Suen.",
    image: 'https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000/m/3403/9b08/24fd/986c/5082/5f29/d662/64a7/a489/8f3d/8f3d.JPG',
    price: 780,
    published: true
  },

  {
    _id: 8,
    sesso: 'uomo',
    title: 'L’azzurro da banchiere',
    description: "Questo blu-azzurro tipicamente maschile, simboleggiato dalla camicia del banchiere, che oscilla tra l'azzurro e una tonalità più cinerea, ha fatto un progresso spettacolare sulle passerelle. Viene spesso proposto come total look o in piccoli tocchi su un solo capo, come una sciarpa.",
    image: 'https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000/m/857a/6d23/6609/8b33/d6a1/9f0b/064d/f174/f412/03bf/03bf.jpg',
    price: 522,
    published: true
  },

  {
    _id: 9,
    sesso: 'uomo',
    title: 'Casa dolce casa',
    description: "La pandemia non è del tutto cancellata e la dimensione domestica si fa sentire in molte collezioni. Bode e Louis Vuitton hanno ricreato una vera casa sulla loro passerella. Federico Cina e Magliano hanno fatto sfilare i loro modelli con delle sedie. Da JW Anderson, stringevano forte un cuscino sotto il braccio o contro il petto. Nel guardaroba questo si traduce in cappotti con piumini o coperte, mantelle-plaid con frange e completi in piuma accoglienti e voluminosi.",
    image: 'https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000/m/3b14/05bd/b882/e550/2727/605e/8df6/1288/363f/212e/212e.jpg',
    price: 218,
    published: true
  },

  {
    _id: 10,
    sesso: 'uomo',
    title: ' Gli zoccoli',
    description: "Dopo l'impennata delle sneaker e la mania per gli stivali, che si sono visti su tantissime passerelle, dal modello da pioggia in gomma a quello in pelle per completare un look biker ancora molto in voga, lo zoccolo si preannuncia come il nuovo fenomeno dell'inverno 2023/24. Proposto, tra gli altri, da Kenzo, Dries Van Noten, Dhruv Kapoor ed Etro, che lo ricopre di feltro e lo decora con borchie dorate.",
    image: 'https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000/m/7bbc/d44e/c541/0135/b8b0/d94d/10ef/f544/d962/4747/4747.jpg',
    price: 300,
    published: true
  },

  {
    _id: 11,
    sesso: 'uomo',
  title: 'Prada Autunno Inverno 2023',
  description: "Un’asserzione del ruolo primario degli abiti. La nuova collezione di Prada uomo Autunno Inverno 2023, dal titolo Let’s Talk About Clothes, è un’esplorazione sui fondamenti della moda stessa, sul suo ruolo e significato. L’esito è una sequenza di capi che non lascia spazio a dettagli superflui. Comfort, esagerazione e intimità assecondano canoni di essenzialità e semplicità. La grande riforma avviene non nelle forme ma nel cambio di prospettiva: i volumi passano da un estremo all’altro dell’architettura sartoriale, con silhouette di volta in volta enfatizzate, amplificate o attenuate. I colli delle camicie, i cardigan e le maglie, si allungano e si accorciano mutando significato e identità con un piccolo gesto. Le proporzioni possono cambiare la percezione.x",
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/49-pradauomofw23-1673985681.jpg?crop=1xw:1xh;center,top&resize=980:*',
  price: 300,
  published: true
},

{
  _id: 12,
sesso: 'uomo',
title: 'Etro Autunno Inverno 2023',
description: "Come casa di moda, Etro è stata costruita sulla materia fondante della moda: il tessuto. Dando il suo punto di vista sull’argomento, come esercizio di studio e omaggio alla maison milanese, Marco De Vincenzo costruisce la sua prima collezione uomo per Etro attorno alla materia. Sullo sfondo di pile di tessuti provenienti dagli archivi Etro, sfila una collezione intima, tattile, confortevole, che fonde, mescola e confonde il pubblico e il privato, il familiare e il sociale. Stampe tappezzeria, coperte come cappotti, camicie come tovaglie, tute che ricordano tende. La tattilità è fondamentale, con jacquard e intrecci che prevalgono sulle fantasie. I pezzi sono messi insieme e assemblati per stimolare sia la vista che il tatto. Un percorso creativo nato nel senso di rassicurazione offerto da una coperta di velluto jacquard, che Marco amava da bambino e il cui motivo è riprodotto su ampi cappotti e giacche di lana.",
image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/etro-m-f23-033-1673896420.jpg?crop=1xw:1xh;center,top&resize=980:*',
price: 420,
published: true
},

{
  _id: 13,
sesso: 'uomo',
title: 'Fendi Autunno Inverno 2023',
description: "Su una colonna sonora dance firmata Giorgio Moroder, da suonare in loop, sfila una collezione che è cozy + sexy + cool. La nuova visione di Silvia Venturini Fendi per la collezione uomo è un concentrato di comfort raffinato, opulenza quotidiana, ed eleganza dell'inatteso. L'Abc del guardaroba formale sartoriale, in cui primeggiano filati pregiati, come il cashmere, e abiti da lavoro, si contamina di riferimenti anni Settanta sensuali, audaci e allo stesso tempo iper-sofisticati: toghe extra soft, doppiopetto con fondi di frange, maglie monospalla trasparenti che prendono la funzione del gilet, camicie illuminate da piccole stud che si illuminano quando incontrano le luci della nightlife.",
image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fendi-m-f23-001-1673976830.jpg?crop=1xw:1xh;center,top&resize=980:*',
price: 870 ,
published: true
},

{
  _id: 14,
  sesso: 'uomo',
title: 'K-Way Autunno Inverno 2023',
description: "La sala della sfilata all’interno del nuovo BasicVillage, in Via dell’Aprica 12 a Milano, si trasforma nel Café de la Paix di Parigi, location in cui, seduto sulla terrasse in una giornata di pioggia del 1965, l'imprenditore Léon-Claude Duhamel ebbe l'idea per la primissima packable rain jacket, oggi conosciuta da tutti come k-way (termine entrato ufficialmente nel dizionario italiano). Il resto è storia. E innovazione. La sfilata K-Way Autunno Inverno 2023 2024, in cui fanno incursione anche qualche look donna, è un omaggio al passato ma è proiettata sul futuro: imbottiture e volumi sperimentali incontrano materiali hi-tech ad alta performance come le lane merino con la tecnologia Loro Piana STORM SYSTEM e l'AMIABLE, tessuto sostenibile ottenuto da nylon riciclato.",
image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/k-way-fw23-01-1673887110.jpg?crop=1xw:1xh;center,top&resize=980:*',
price: 330,
published: true
},

{
  _id: 15,
  sesso: 'uomo',
title: 'Gucci Autunno Inverno 2023',
description: "Una performance live della boy band Ceramic Dog capitanata dal frontman Marc Ribot fa da sfondo a uno show che sembra assemblato per loro: musicisti, cantanti, artisti della scena indie. Il noise rock del trio emula alla perfezione le energie che scaturiscono i look, beanie dopo canotta, sacca dopo giacca di pelle, tra chiari riferimenti rock, jazz e punk. Animati dalle varie personalità che li indossano, i capi esprimono una carica sensuale che vibra dalla prima all'ultima nota dello show. Gli archetipi del guardaroba maschile sono ridefiniti e ampliati dal lusso artigianale e dalla lente sovversiva dell’improvvisazione, il metodo di lavoro applicato alla costruzione di questa collezione.",
image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gucci-m-f23-001-1673958629.jpg?crop=1xw:1xh;center,top&resize=980:*',
price: 520,
published: true
},

{
  _id: 16,
  sesso: 'uomo',
title: 'Magliano Autunno Inverno 2023',
description: "Una sinfonia di suoni biomeccanici dell' artista e compositrice Pan Daijing, una parete di sedie ammassate su cui il pubblico non ci si potrà sedere, mai, una location cupa e drammatica: nella nuova collezione di Magliano si avverte un'aria di conflitto. I capi si intersecano, s’intrecciano, s’annodano, si trasformano. Sono ibridi e dinamici. Lo styling è articolato, il suo risultato è sublime. Vecchie coperte militari sono trasformate in vestaglie. Giacche con asole e tasche modulabili fanno impazzire la struttura annoiata dei grandi classici. Drappeggi tempestosi riparano dal mondo esterno, giacche tropicali proteggono da ogni clima, pastelli tenebrosi le colorano. L'intimo è di mohair. L'imbottitura dei piumini è bio, ricavata dai fiori. Il lusso non è niente di più che un gesto.",
image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/magliano-m-f23-028-1673959345.jpg?crop=1xw:1xh;center,top&resize=980:*',
price: 460 ,
published: true
},

{
  _id: 17,
  sesso: 'uomo',
title: 'Jw Anderson Autunno Inverno 2023',
description: "JW Anderson fa tabula rasa. Capi senza fronzoli, senza superfluo, senza nient’altro. Una collezione che vuole essere rassicurante, intima e personale, tra ricordi autentici e puerili, come un paio di Wellipets - i famosi wellingtons a forma di rana britannici, che hanno conquistato le pagine di tutti i tabloid quando la Principessa Diana li fece indossare ai suoi figli - e capisaldi del guardaroba invernale ridotti alla loro essenza e funzione: un maglione accogliente come un abbraccio, un cappotto avvolgente e sicuro, uno stivaletto chiuso da lucchetti.",
image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/23-1673890619.jpg?crop=1xw:1xh;center,top&resize=980:*',
price: 300 ,
published: true
},

{
  _id: 18,
   sesso: 'uomo',
title: 'Dsquared2 Autunno Inverno 2023',
description: "Courtesy Photo Lingerie su texani, jacquard canadesi su lane merino, preppy su cowboy, baseball cap con patches, vite bassissime, cinturoni tex-mex, frange, pelle, tartan, denim rotto, distressed, con macchie di colore. I gemelli Dean e Dan Caten, in arte Dsquared2, ritornano alle origini. Sfila il geek, l'atleta, il goth, l'emo, la femme fetale: stereotipi che vengono frantumati e rimessi insieme, ognuno è libero di essere ciò che vuole, vestire come vuole, quando vuole. A vent'anni dalla prima sfilata donna - des 2003, si chiamava Star 24/7 mandata in passerella subito dopo aver disegnato i costumi per lo Stripped Tour 2003 di Cristina Aguilera - il duo canadese riscrive il suo Dna per la nuova generazione. Ed è subito #D2TEMPTATION.",
image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dsquared2-fw23-19-1673891496.jpg?crop=1xw:1xh;center,top&resize=980:*',
price: 650,
published: true
},

{
  _id: 19,
  sesso: 'uomo',
title: 'Iuter Autunno Inverno 2023',
description: "In una riproduzione semi-statica della piazza, una cricca di amici, tra attitude da strada e scooter modificati, indossa la nuova collezione Autunno Inverno 2023 di Iuter, dal titolo Spirit, Un concentrato di tutto ciò che ha definito e continua a definire lo spirito del brand milanese indipendente che affonda le radici nel landscape subculturale urbano: un mix audace di consapevolezza, tecnica e incoscienza, messo a punto in vent’anni di strada e una community in continua espansione. La nuova collezione include anche collaborazioni con gli specialisti militari di Alpha Industries, i maestri italiani del tuning di Polini e la serie cult di David Lynch Twin Peaks. Fanno parte della collezione anche giacche racing in pelle con ricami e patch intarsiate, flight jacket con patch oversize e giacche in pelle con stampe di Laura Palmer. E la prima serie di capi di abbigliamento e accessori femminili.",
image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/iuter-fw23-look11-a-1673949938.jpg?crop=1xw:1xh;center,top&resize=980:*',
price: 510,
published: true
},

{
  _id: 20,
  sesso: 'donna',
title: 'EDGY LEATHER',
description: "I capi in pelle rimarranno un must have del guardaroba per la stagione autunno inverno 2023-24, ma con nuove interpretazioni. Da Bottega Veneta il direttore Matthieu Blazy propone un trench coat in pelle di struzzo, Demna Gvasalia da Balenciaga un cappotto con extra-shoulder di pitone bordeaux, mentre da Louis Vuitton Nicolas Ghesquière struttura un suit interamente di pelle imbottita.",
image: 'https://www.lofficielitalia.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F38011%2F1678284376-tendenza-pelle-silhouette-moda-donna-sfilate-autunno-inverno-2023-24-collezione-foto-look2.webp%3Fauto%3Dformat%252Ccompress%26cs%3Dsrgb&w=3840&q=75',
price: 410,
published: true
},

{
  _id: 21,
sesso: 'donna',
title: 'FLUCTUATING MARABOU',
description: "Stilisti e direttori creativi hanno portato in passerella un trionfo di piume marabou che continuano ad essere una tendenza moda donna anche per il prossimo inverno. Accenti svolazzanti e ultra-glamorous che vengono inseriti nelle collezioni di Coperni, Dolce & Gabbana, Chanel e Valentino con piume fluttuanti innescate nei mini-dress, cappotti e camicie.",
image: 'https://www.lofficielitalia.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F38011%2F1677414501-bottega-veneta-sfilata-donna-uomo-autunno-inverno-2023-24-collezione-foto-look-lofficielitalia4.jpg%3Fauto%3Dformat%252Ccompress%26cs%3Dsrgb&w=3840&q=75',
price: 620 ,
published: true
},

{
  _id: 22,
sesso: 'donna',
title: 'EYES ON DECORS',
description: "Durante le settimane della moda donna, stilisti e direttori creativi hanno riposto l'attenzione anche al decoro. Finissimi ricami, decori ornamentali, applicazioni creative e orpelli che arricchiscono i capi delle collezioni moda donna autunno inverno 2023-24. Dai fiocchetti di Simone Rocha e i cristalli di swarovski di Valentino fino ad arrivare ai raffinatissimi ricami di Dries Van Noten, e alle applicazioni floreali di Prada e Chanel.",
image: 'https://www.lofficielitalia.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F38011%2F1678283650-tendenza-decorazioni-applicazioni-silhouette-moda-donna-sfilate-autunno-inverno-2023-24-collezione-foto-look6.webp%3Fauto%3Dformat%252Ccompress%26cs%3Dsrgb&w=3840&q=75',
price: 400,
published: true
},

{
  _id: 23,
sesso: 'donna',
title: 'FOCUS ON VOLUME',
description: "Continua ad esserci anche un grande focus sulle silhouette. Il corpo della donna viene enfatizzato da nuovi volumi e forme tridimensionali che ripensano al design dei capi a tutto tondo. Dai voluminosi abiti di Simone Rocha presentati durante la London Fashion Week, gli abiti scultorei progettati dallo studio di Gucci e l'outerwear di Undercover e Louis Vuitton che stravolgono il figurino della donna.",
image: 'https://www.lofficielitalia.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F38011%2F1678283423-tendenza-volumi-silhouette-moda-donna-sfilate-autunno-inverno-2023-24-collezione-foto-look2.webp%3Fauto%3Dformat%252Ccompress%26cs%3Dsrgb&w=3840&q=75',
price: 320,
published: true
},

{
  _id: 24,
sesso: 'donna',
title: 'OVER-PRINTED',
description: "Tra i main trend e le tendenze moda donna della stagione autunno inverno 2023-24 si sono posizionate anche le stampe all-over. Grafiche a regola d’arte che diventano figurative e che invadono gli abiti rispettando l’ispirazione della collezione. Naturalmente non mancano le sofisticate fantasie botaniche di Dries Van Noten, l’interpretazione quasi minimale di Marco De Vincenzo del Paisley di Etro, la stampa floreale sfocata di Dior e la versione collage fotografica che sfida la censura di Glenn Martens da Y/Project. ",
image: 'https://www.lofficielitalia.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F38011%2F1678278113-tendenza-stampe-moda-donna-sfilate-autunno-inverno-2023-24-collezione-foto-look9.webp%3Fauto%3Dformat%252Ccompress%26cs%3Dsrgb&w=3840&q=75',
price: 280,
published: true
},

{
  _id: 25,
sesso: 'donna',
title: 'MONOCHROME',
description: "Se non sono stampe sono look monocromatici. Alle sfilate presentate durante le settimane della moda di New York, Londra, Milano e Parigi si sono visti tantissimi look realizzati con un unico colore. Perciò tinta unita per Valentino, Ferragamo e Givenchy che propongono un eleganza minimale rigorosamente tone sur tone.",
image: 'https://www.lofficielitalia.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F38011%2F1678285457-tendenza-tinta-unita-moda-donna-sfilate-autunno-inverno-2023-24-collezione-foto-look0.webp%3Fauto%3Dformat%252Ccompress%26cs%3Dsrgb&w=3840&q=75',
price: 550 ,
published: true
},

{
  _id: 26,
sesso: 'donna',
title: 'FURRY AESTHETIC',
description: "Calde, soffici e avvolgenti. Non esiste inverno in cui stilisti e direttori creativi con le sfilate moda donna non ritirano fuori la pelliccia. Non importa se vera, upcycled o sintetica i designer hanno proposto la loro versione del fur coat. Dalle eco-pellicce della pioniera dell'etica green Stella McCartney, alle pellicce rosse di MSGM e Ferragamo, le versioni di Gucci e quella animalier di Bottega Veneta ispirata chiaramente a Crudelia De Mon.",
image: 'https://www.lofficielitalia.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F38011%2F1678285068-tendenza-pelliccia-moda-donna-sfilate-autunno-inverno-2023-24-collezione-foto-look4.jpg%3Fauto%3Dformat%252Ccompress%26cs%3Dsrgb&w=3840&q=75',
price: 1130,
published: true
},

{
  _id: 27,
sesso: 'donna',
title: 'LIVE, LONG, LEGS',
description: "Anche se il guardaroba invernale prevede un abbigliamento più caldo e coprente, le sfilate che sono andate in scena durante le settimane della moda donna hanno scardinato questo cliché. Fuori le gambe con culotte ricoperte di cristallini e applicazioni nel caso di Miu Miu ma anche micro shorts progettati dal direttore creativo di Ferragamo Maximilian Davis. Più sfacciata la versione di Vivienne Westwood con la collezione di Andreas Kronthaler e la lingerie in vista per la donna audace di Dolce & Gabbana.",
image: 'https://www.lofficielitalia.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F38011%2F1678287817-tendenza-moda-donna-sfilate-autunno-inverno-2023-24-collezione-foto-look1.jpg%3Fauto%3Dformat%252Ccompress%26cs%3Dsrgb&w=3840&q=75',
price: 770 ,
published: true
},

{
  _id: 28,
sesso: 'donna',
title: 'NEW KNITWEAR',
description: "L'inverno chiama il knitwear, ma questa volta nelle collezioni femminili ci sono state lavorazioni innovative, interpretazioni creative e realizzazioni con filati inaspettati. Da Miu Miu la collezione si è riempita di cardigan in maglia minimali, alcuni di questi realizzati con filati leggerissimi che donano trasparenza al look. Bottega Veneta punta invece sulle lavorazioni tridimensionali come quella 'a scaglie' realizzata per i pullover, mentre da Acne Studios il direttore creativo Jonny Johansson crea maxi abiti cut-out sgualciti che rivelano il corpo delle modelle.",
image: 'https://www.lofficielitalia.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F38011%2F1678282976-tendenza-maglia-moda-donna-sfilate-autunno-inverno-2023-24-collezione-foto-look0.jpg%3Fauto%3Dformat%252Ccompress%26cs%3Dsrgb&w=3840&q=75',
price: 910 ,
published: true
},

{
  _id: 29,
sesso: 'donna',
title: 'DRAPING DRESS',
description: "Con le sfilate autunno inverno 2023-24, il corpo della donna è diventato uno spazio sulla quale esercitare la propria maestria del drappeggio. Designer e direttori creativi hanno plasmato incantevoli draping-dress come se fossero vere e proprie sculture sulla silhouette femminile. Tra i veri intenditori citiamo Maximilian Davis da Ferragamo con minidress, Massimo Giorgetti da MSGM con abiti strutturati con mega bow e Jonathan Anderson da Loewe che racchiude tutto il drappeggio dell'abito di seta dentro ad una sfera metallica posizionata sul decolleté.",
image: 'https://www.lofficielitalia.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F38011%2F1678282935-tendenza-abiti-moda-donna-sfilate-autunno-inverno-2023-24-collezione-foto-look1.webp%3Fauto%3Dformat%252Ccompress%26cs%3Dsrgb&w=3840&q=75',
price: 630,
published: true
},

]
