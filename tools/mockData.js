const books = [
  {
    id: 1,
    title: "Ognjem i macem 1",
    description:
      "Ognjem i mačem je istorijski fiktivni roman smešten u 17. vek. u poljsko-litvansku državnu zajednicu tokom Ustanka Bogdana Hmeljnickog. Stekao je ogromnu popularnost u Poljskoj, a do kraja 20. veka postao je jedna od najčitanijih poljskih knjiga u istoriji. U prvom delu Sjenkjevičeve trilogije, ... ",
    price: 1000,
    authorId: 1,
    genres: "1,2",
    image: "https://m.media-amazon.com/images/I/51hjEDsaNGL._AC_SY780_.jpg",
  },
  {
    id: 2,
    title: "Ognjem i macem 2",
    description:
      "Ognjem i mačem je istorijski fiktivni roman smešten u 17. vek. u poljsko-litvansku državnu zajednicu tokom Ustanka Bogdana Hmeljnickog. Stekao je ogromnu popularnost u Poljskoj, a do kraja 20. veka postao je jedna od najčitanijih poljskih knjiga u istoriji. U prvom delu Sjenkjevičeve trilogije, ... ",
    price: 1100,
    authorId: 1,
    genres: "1,2,3",
    image: "https://m.media-amazon.com/images/I/51I3a876D8L._AC_SY780_.jpg",
  },
  {
    id: 3,
    title: "Na Drini cuprija",
    description:
      'Najpoznatiji roman Ive Andrića, "Na Drini ćurpija" (1945), hronološki prati četiri veka zbivanja oko velikog mosta preko reke Drine u Višegradu, koji je izgradio veliki vezir Mehmed paša Sokolović, poreklom iz tih krajeva. Godine 1516. Mehmed paša je, prema vladajućem običaju uzimanja "danka u krvi", kao srpski dečak na silu odveden u tursku vojsku i poturčen da bi se kasnije uzdigao lestvicama...',
    price: 1200,
    authorId: 2,
    genres: "1,2",
    image:
      "https://dereta.rs/cached/dereta.rs/Images/Na-Drini-cuprija0-1000x0-0000111376564.jpg",
  },
  {
    id: 4,
    title: "Taras Buljba",
    description:
      "Smeštena negde između sredine 16. i početka 17. veka, Gogoljeva priča govori o junačkoj borbi kozaka protiv poljskih osvajača. U njoj je opisana moćna i divlja priroda kozaka i izuzetna snaga jednog čoveka – Tarasa Buljbe. Nakon što je svoja dva sina poslao u rat, stari Taras Buljba gubi starijeg u neprijateljskim napadima...",
    price: 700,
    authorId: 3,
    genres: "1,2",
    image: "https://www.delfi.rs/_img/artikli/2016/10/taras_bulba_vv.jpg",
  },
  {
    id: 5,
    title: "Kockar",
    description:
      "Obimom malen, ali izuzetan roman Fjodora Mihajloviča Dostojevskog. Roman koji govori o trima temama koje se međusobno prepliću. Govori o temi kockarske strasti, temi Rusa u inostranstvu i temi nekoliko ljubavnih odnosa...",
    price: 800,
    authorId: 4,
    genres: "1,3",
    image:
      "https://www.knjizare-vulkan.rs/files/watermark/files/images/slike_proizvoda/thumbs_w/322114_w.jpg",
  },
  {
    id: 6,
    title: "Prolom",
    description:
      "Obiman roman Prolom (1952) Branka Ćopića pruža obilje mogućnosti za interpretaciju. Sastoji se iz tri dela. U prvom delu je opisano ustaško nasilje nad srpskim narodom u NDH; odvođenje u zarobljeništvo pod lukavim izgovorom kuluka i stravična, jeziva i sablasna, noćna egzekucija vezanih ljudi nad jamom. To je žestoka osuda ustaške države i ustaške genocidne politike. Kao da se, međutim, pisac uplašio intenziteta te osude, pa u druga dva dela romana prikazuje ustanak naroda i nesrećnu deobu u njemu na dve frakcije: na partizane i četnike, podležući tako zvaničnom ideološkom diskursu. Pažljivim čitanjem teksta romana, naglašavajući njegove najreprezentativnije delove, što je, na izvestan način, predstavljalo i metodološki okvir rada, nije bilo teško dopreti do njegove osnovne zamisli, ili zadatka koji je pisac sebi postavio: da opiše buđenje naroda u njemu, istakne narod u prvi plan, stavi naglasak na govor naroda...",
    price: 1500,
    authorId: 6,
    genres: "1,2",
    image:
      "https://static.kupindoslike.com/Prolom-Branko-Copic_slika_O_73299349.jpg",
  },
  {
    id: 7,
    title: "Tihi Don",
    description:
      "Tihi Don je jedno od najmonumentalnijih dela svetske literature i ne može se podvesti pod jedan žanr. To je pre svega istorijski roman, koji prikazuje rusko društvo u jednom od najvažnijih trenutaka u istoriji Rusije — u vreme Revolucije 1917., a i politički jer se bavi političkim previranjima i sukobima između monarhista i komunista. Najveći deo knjige posvećen je opisivanju Istočnog fronta na kraju Prvog svetskog rata i građanskog rata 1917, kao i mukotrpnom životu donskih kozaka te se može smatrati ratnim i socijalnim romanom. Strasti i emocionalna preživljavanja glavnih junaka do tančina su opisana, pa je Tihi Don dobio i psihološku notu. Kao glavni lajtmotiv romana, ističe se nekonvencionalna veza između Grigorija Melehova i Aksinje, što romanu daje ljubavni karakter. Na kraju, sam naziv dela nagoveštava da pisac posebnu pažnju posvećuje opisima prirode – tihog Dona i mirne stepe, ravnodušnih nad teškom kozačkom sudbinom...",
    price: 2400,
    authorId: 12,
    genres: "1,2",
    image: "https://www.delfi.rs/_img/artikli/2017/01/tihi_don_vv.jpg",
  },
  {
    id: 8,
    title: "Knjiga o Milutinu",
    description:
      "U romanu je predstavljena istorija Srba od Sarajevskog atentata na princa Ferninada, pa sve do nekoliko godina posle Drugog svetskog rata.U svojim razmišljanjima glavni junak Milutin, običan seljak iz sela Koštunića, iz Šumadije, otvara niz pitanja koja nam ukazuju na besmisao rata. Njegova razmišljanja nas upućuju na to da su u ratu i pobednici i pobeđeni – gubitnici.Knjiga o Milutinu ispovest je nekadašnjeg ratnika, koju on imaginarnom slušaocu (piscu) kazuje u zatvoru negde posle Drugog svetskog rata, posle iskustva istorije i tragične sudbine sopstvene porodice, Šumadije i srpske države",
    price: 600,
    authorId: 9,
    genres: "1,2,8,9",
    image:
      "https://www.knjigakomerc.rs/wp-content/uploads/2020/05/Knjiga-o-Milu.jpg",
  },
  {
    id: 9,
    title: "Tajne albanske mafije",
    description:
      "Tajne albanske mafije su istiniti zapis o vremenu zla, koje traje do danas. Knjiga se pojavila 1988. godine i bila je šok za jugoslovensku javnost, uljuljkanu komunističkim bajkama o bratstvu i jedinstvu. Njome sam lupio šamar komunističkoj eliti, dokazavši da postoji zavera čiji je cilj secesija Kosova i Metohije. CIA, MI-6, turska tajna služba, albanski Sigurimi i turski Sivi vukovi dali su bazu za stvaranje albanske mafije, koja je kao kancer prodrla među Albance na Kosovu i Metohiji. Zavera se proširila na sve srbofobe u Jugoslaviji – tajne službe Hrvatske i Slovenije uključile su se u šverc droge i tako finansirale emigrantske političke grupacije. Hilmija Hasanagić, bivši komunistički rukovodilac, pomogao mi je da krenem u opasnu potragu za Muratom Bajrakom, „kumom“ Sivih vukova: svaki kontakt sa „izvorom“ mogao je da bude zamka i – moj kraj! Tragajući za njim, dospeo sam do Dauta Kadriovskog i Sadika Tezdogana, organizatora krijumčarenja heroina. Obaveštajac Gojko Medenica, bivši pomoćnik Aleksandra Rankovića, povezao me je s ljudima koji su mi dali dragocene podatke – tako sam sastavio listu tajnih agenata Sigurimija i krijumčara širom sveta. Zli jezici su širili trač da te informacije potiču od mog kolege s fakulteta Jovice Stanišića, šefa tajne službe Srbije, pa sam dobio epitet „tajni agent“ RDB-a. Urbanu legendu nemoguće je uništiti. Rešio sam da je iskoristim i postao sam pisac špijunskih romana. Mit da sam operativac Službe otvarao mi je vrata u inostranstvu, pa sam imao kontakte sa templarima u Americi, masonima u Nemačkoj, sufistima u Iranu, bivšim pripadnicima KGB-a u Azerbejdžanu… Tajne albanske mafije su temelj moje karijere. Razlika između špijuna i novinara je što jednom istraživanje završi u fioci, a drugom postane knjiga koju držite u ruci!",
    price: 900,
    authorId: 8,
    genres: "3,4",
    image:
      "https://www.domla-publishing.rs/images/blogs_pages/1387997260-Dejan_Lucic_Tajne_albanske_mafije_iNovi_Sad_1991_.jpg",
  },
];

const authors = [
  { id: 1, name: "Henrik Sjenkjevic" },
  { id: 2, name: "Ivo Andric" },
  { id: 3, name: "Nikolaj Gogolj" },
  { id: 4, name: "Fjodor M. Dostojevski" },
  { id: 5, name: "Lav Nikolajevic Tolstoj" },
  { id: 6, name: "Branko Copic" },
  { id: 7, name: "Mesa Selimovic" },
  { id: 8, name: "Dejan Lucic" },
  { id: 9, name: "Danko Popovic" },
  { id: 10, name: "Petar Petrovic Njegos" },
  { id: 12, name: "Mihail Solohov" },
];

const genres = [
  { id: 1, title: "History" },
  { id: 2, title: "War" },
  { id: 3, title: "Mistery" },
  { id: 4, title: "Thriler" },
  { id: 5, title: "Children's book" },
  { id: 6, title: "Poem" },
  { id: 7, title: "Epic song" },
  { id: 8, title: "Drama" },
  { id: 9, title: "Autobiography" },
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: "",
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  books,
  authors,
  genres,
};
