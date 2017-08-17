// Generic .js-toggle using data-element and data-group. Use .js-active-default if needed in responsive design
var kommuner = {
  "101": { "navn":"København", "Tilskud":990, "Folkeskole":450, "Daginstitutioner":1111, "Handicap":263, "Aeldre":450},
  "147": { "navn":"Frederiksberg", "Tilskud":174, "Folkeskole":79, "Daginstitutioner":195, "Handicap":46, "Aeldre":79},
  "151": { "navn":"Ballerup", "Tilskud":80, "Folkeskole":36, "Daginstitutioner":89, "Handicap":21, "Aeldre":36},
  "153": { "navn":"Brøndby", "Tilskud":59, "Folkeskole":27, "Daginstitutioner":66, "Handicap":16, "Aeldre":27},
  "155": { "navn":"Dragør", "Tilskud":23, "Folkeskole":11, "Daginstitutioner":26, "Handicap":6, "Aeldre":11},
  "157": { "navn":"Gentofte", "Tilskud":124, "Folkeskole":57, "Daginstitutioner":140, "Handicap":33, "Aeldre":57},
  "159": { "navn":"Gladsaxe", "Tilskud":112, "Folkeskole":51, "Daginstitutioner":126, "Handicap":30, "Aeldre":51},
  "161": { "navn":"Glostrup", "Tilskud":37, "Folkeskole":17, "Daginstitutioner":42, "Handicap":10, "Aeldre":17},
  "163": { "navn":"Herlev", "Tilskud":47, "Folkeskole":21, "Daginstitutioner":53, "Handicap":13, "Aeldre":21},
  "165": { "navn":"Albertslund", "Tilskud":46, "Folkeskole":21, "Daginstitutioner":52, "Handicap":12, "Aeldre":21},
  "167": { "navn":"Hvidovre", "Tilskud":88, "Folkeskole":40, "Daginstitutioner":99, "Handicap":23, "Aeldre":40},
  "169": { "navn":"Høje-Taastrup", "Tilskud":83, "Folkeskole":38, "Daginstitutioner":93, "Handicap":22, "Aeldre":38},
  "173": { "navn":"Lyngby-Taarbæk", "Tilskud":91, "Folkeskole":42, "Daginstitutioner":102, "Handicap":24, "Aeldre":42},
  "175": { "navn":"Rødovre", "Tilskud":63, "Folkeskole":29, "Daginstitutioner":71, "Handicap":17, "Aeldre":29},
  "183": { "navn":"Ishøj", "Tilskud":37, "Folkeskole":17, "Daginstitutioner":42, "Handicap":10, "Aeldre":17},
  "185": { "navn":"Tårnby", "Tilskud":71, "Folkeskole":32, "Daginstitutioner":80, "Handicap":19, "Aeldre":32},
  "187": { "navn":"Vallensbæk", "Tilskud":26, "Folkeskole":12, "Daginstitutioner":29, "Handicap":7, "Aeldre":12},
  "190": { "navn":"Furesø", "Tilskud":66, "Folkeskole":30, "Daginstitutioner":75, "Handicap":18, "Aeldre":30},
  "201": { "navn":"Allerød", "Tilskud":41, "Folkeskole":19, "Daginstitutioner":46, "Handicap":11, "Aeldre":19},
  "210": { "navn":"Fredensborg", "Tilskud":66, "Folkeskole":30, "Daginstitutioner":74, "Handicap":18, "Aeldre":30},
  "217": { "navn":"Helsingør", "Tilskud":102, "Folkeskole":47, "Daginstitutioner":115, "Handicap":27, "Aeldre":47},
  "219": { "navn":"Hillerød", "Tilskud":82, "Folkeskole":37, "Daginstitutioner":92, "Handicap":22, "Aeldre":37},
  "223": { "navn":"Hørsholm", "Tilskud":41, "Folkeskole":19, "Daginstitutioner":46, "Handicap":11, "Aeldre":19},
  "230": { "navn":"Rudersdal", "Tilskud":92, "Folkeskole":42, "Daginstitutioner":103, "Handicap":24, "Aeldre":42},
  "240": { "navn":"Egedal", "Tilskud":71, "Folkeskole":32, "Daginstitutioner":79, "Handicap":19, "Aeldre":32},
  "250": { "navn":"Frederikssund", "Tilskud":74, "Folkeskole":33, "Daginstitutioner":83, "Handicap":20, "Aeldre":33},
  "260": { "navn":"Halsnæs", "Tilskud":51, "Folkeskole":23, "Daginstitutioner":57, "Handicap":14, "Aeldre":23},
  "270": { "navn":"Gribskov", "Tilskud":67, "Folkeskole":31, "Daginstitutioner":76, "Handicap":18, "Aeldre":31},
  "400": { "navn":"Bornholms kommune", "Tilskud":65, "Folkeskole":30, "Daginstitutioner":73, "Handicap":17, "Aeldre":30},
  "253": { "navn":"Greve", "Tilskud":82, "Folkeskole":37, "Daginstitutioner":92, "Handicap":22, "Aeldre":37},
  "259": { "navn":"Køge", "Tilskud":99, "Folkeskole":45, "Daginstitutioner":111, "Handicap":26, "Aeldre":45},
  "265": { "navn":"Roskilde", "Tilskud":143, "Folkeskole":65, "Daginstitutioner":160, "Handicap":38, "Aeldre":65},
  "269": { "navn":"Solrød", "Tilskud":36, "Folkeskole":16, "Daginstitutioner":40, "Handicap":10, "Aeldre":16},
  "306": { "navn":"Odsherred", "Tilskud":54, "Folkeskole":24, "Daginstitutioner":60, "Handicap":14, "Aeldre":24},
  "316": { "navn":"Holbæk", "Tilskud":115, "Folkeskole":52, "Daginstitutioner":129, "Handicap":30, "Aeldre":52},
  "320": { "navn":"Faxe", "Tilskud":58, "Folkeskole":27, "Daginstitutioner":66, "Handicap":16, "Aeldre":27},
  "326": { "navn":"Kalundborg", "Tilskud":80, "Folkeskole":36, "Daginstitutioner":90, "Handicap":21, "Aeldre":36},
  "329": { "navn":"Ringsted", "Tilskud":56, "Folkeskole":26, "Daginstitutioner":63, "Handicap":15, "Aeldre":26},
  "330": { "navn":"Slagelse", "Tilskud":128, "Folkeskole":58, "Daginstitutioner":144, "Handicap":34, "Aeldre":58},
  "336": { "navn":"Stevns", "Tilskud":37, "Folkeskole":17, "Daginstitutioner":41, "Handicap":10, "Aeldre":17},
  "340": { "navn":"Sorø", "Tilskud":48, "Folkeskole":22, "Daginstitutioner":54, "Handicap":13, "Aeldre":22},
  "350": { "navn":"Lejre", "Tilskud":45, "Folkeskole":20, "Daginstitutioner":50, "Handicap":12, "Aeldre":20},
  "360": { "navn":"Lolland", "Tilskud":69, "Folkeskole":32, "Daginstitutioner":78, "Handicap":18, "Aeldre":32},
  "370": { "navn":"Næstved", "Tilskud":135, "Folkeskole":62, "Daginstitutioner":152, "Handicap":36, "Aeldre":61},
  "376": { "navn":"Guldborgsund", "Tilskud":100, "Folkeskole":45, "Daginstitutioner":112, "Handicap":26, "Aeldre":45},
  "390": { "navn":"Vordingborg", "Tilskud":75, "Folkeskole":34, "Daginstitutioner":84, "Handicap":20, "Aeldre":34},
  "410": { "navn":"Middelfart", "Tilskud":62, "Folkeskole":28, "Daginstitutioner":70, "Handicap":17, "Aeldre":28},
  "420": { "navn":"Assens", "Tilskud":68, "Folkeskole":31, "Daginstitutioner":76, "Handicap":18, "Aeldre":31},
  "430": { "navn":"Faaborg-Midtfyn", "Tilskud":84, "Folkeskole":38, "Daginstitutioner":94, "Handicap":22, "Aeldre":38},
  "440": { "navn":"Kerteminde", "Tilskud":39, "Folkeskole":18, "Daginstitutioner":44, "Handicap":10, "Aeldre":18},
  "450": { "navn":"Nyborg", "Tilskud":52, "Folkeskole":24, "Daginstitutioner":59, "Handicap":14, "Aeldre":24},
  "461": { "navn":"Odense", "Tilskud":330, "Folkeskole":150, "Daginstitutioner":371, "Handicap":88, "Aeldre":150},
  "479": { "navn":"Svendborg", "Tilskud":96, "Folkeskole":43, "Daginstitutioner":107, "Handicap":25, "Aeldre":43},
  "480": { "navn":"Nordfyn", "Tilskud":48, "Folkeskole":22, "Daginstitutioner":54, "Handicap":13, "Aeldre":22},
  "482": { "navn":"Langeland", "Tilskud":21, "Folkeskole":9, "Daginstitutioner":23, "Handicap":5, "Aeldre":9},
  "492": { "navn":"Ærø", "Tilskud":10, "Folkeskole":5, "Daginstitutioner":11, "Handicap":3, "Aeldre":5},
  "510": { "navn":"Haderslev", "Tilskud":92, "Folkeskole":42, "Daginstitutioner":103, "Handicap":24, "Aeldre":42},
  "530": { "navn":"Billund", "Tilskud":44, "Folkeskole":20, "Daginstitutioner":49, "Handicap":12, "Aeldre":20},
  "540": { "navn":"Sønderborg", "Tilskud":122, "Folkeskole":56, "Daginstitutioner":137, "Handicap":32, "Aeldre":56},
  "550": { "navn":"Tønder", "Tilskud":62, "Folkeskole":28, "Daginstitutioner":69, "Handicap":16, "Aeldre":28},
  "561": { "navn":"Esbjerg", "Tilskud":191, "Folkeskole":87, "Daginstitutioner":214, "Handicap":51, "Aeldre":87},
  "563": { "navn":"Fanø", "Tilskud":5, "Folkeskole":2, "Daginstitutioner":6, "Handicap":1, "Aeldre":2},
  "573": { "navn":"Varde", "Tilskud":83, "Folkeskole":38, "Daginstitutioner":93, "Handicap":22, "Aeldre":38},
  "575": { "navn":"Vejen", "Tilskud":71, "Folkeskole":32, "Daginstitutioner":79, "Handicap":19, "Aeldre":32},
  "580": { "navn":"Aabenraa", "Tilskud":97, "Folkeskole":44, "Daginstitutioner":109, "Handicap":26, "Aeldre":44},
  "607": { "navn":"Fredericia", "Tilskud":84, "Folkeskole":38, "Daginstitutioner":94, "Handicap":22, "Aeldre":38},
  "621": { "navn":"Kolding", "Tilskud":152, "Folkeskole":69, "Daginstitutioner":170, "Handicap":40, "Aeldre":69},
  "630": { "navn":"Vejle", "Tilskud":184, "Folkeskole":84, "Daginstitutioner":207, "Handicap":49, "Aeldre":84},
  "615": { "navn":"Horsens", "Tilskud":146, "Folkeskole":66, "Daginstitutioner":164, "Handicap":39, "Aeldre":66},
  "657": { "navn":"Herning", "Tilskud":145, "Folkeskole":66, "Daginstitutioner":162, "Handicap":38, "Aeldre":66},
  "661": { "navn":"Holstebro", "Tilskud":95, "Folkeskole":43, "Daginstitutioner":107, "Handicap":25, "Aeldre":43},
  "665": { "navn":"Lemvig", "Tilskud":33, "Folkeskole":15, "Daginstitutioner":37, "Handicap":9, "Aeldre":15},
  "671": { "navn":"Struer", "Tilskud":35, "Folkeskole":16, "Daginstitutioner":39, "Handicap":9, "Aeldre":16},
  "706": { "navn":"Syddjurs", "Tilskud":69, "Folkeskole":31, "Daginstitutioner":77, "Handicap":18, "Aeldre":31},
  "707": { "navn":"Norddjurs", "Tilskud":63, "Folkeskole":28, "Daginstitutioner":70, "Handicap":17, "Aeldre":28},
  "710": { "navn":"Favrskov", "Tilskud":78, "Folkeskole":36, "Daginstitutioner":88, "Handicap":21, "Aeldre":36},
  "727": { "navn":"Odder", "Tilskud":37, "Folkeskole":17, "Daginstitutioner":41, "Handicap":10, "Aeldre":17},
  "730": { "navn":"Randers", "Tilskud":161, "Folkeskole":73, "Daginstitutioner":181, "Handicap":43, "Aeldre":73},
  "740": { "navn":"Silkeborg", "Tilskud":150, "Folkeskole":68, "Daginstitutioner":168, "Handicap":40, "Aeldre":68},
  "741": { "navn":"Samsø", "Tilskud":6, "Folkeskole":3, "Daginstitutioner":7, "Handicap":2, "Aeldre":3},
  "746": { "navn":"Skanderborg", "Tilskud":98, "Folkeskole":45, "Daginstitutioner":110, "Handicap":26, "Aeldre":45},
  "751": { "navn":"Aarhus", "Tilskud":550, "Folkeskole":250, "Daginstitutioner":617, "Handicap":146, "Aeldre":250},
  "756": { "navn":"Ikast-Brande", "Tilskud":67, "Folkeskole":31, "Daginstitutioner":75, "Handicap":18, "Aeldre":31},
  "760": { "navn":"Ringkøbing-Skjern", "Tilskud":94, "Folkeskole":43, "Daginstitutioner":105, "Handicap":25, "Aeldre":43},
  "766": { "navn":"Hedensted", "Tilskud":76, "Folkeskole":35, "Daginstitutioner":85, "Handicap":20, "Aeldre":34},
  "779": { "navn":"Skive", "Tilskud":76, "Folkeskole":35, "Daginstitutioner":86, "Handicap":20, "Aeldre":35},
  "791": { "navn":"Viborg", "Tilskud":158, "Folkeskole":72, "Daginstitutioner":177, "Handicap":42, "Aeldre":72},
  "773": { "navn":"Morsø", "Tilskud":34, "Folkeskole":15, "Daginstitutioner":38, "Handicap":9, "Aeldre":15},
  "787": { "navn":"Thisted", "Tilskud":72, "Folkeskole":33, "Daginstitutioner":81, "Handicap":19, "Aeldre":33},
  "810": { "navn":"Brønderslev", "Tilskud":59, "Folkeskole":27, "Daginstitutioner":67, "Handicap":16, "Aeldre":27},
  "813": { "navn":"Frederikshavn", "Tilskud":99, "Folkeskole":45, "Daginstitutioner":111, "Handicap":26, "Aeldre":45},
  "820": { "navn":"Vesthimmerland", "Tilskud":61, "Folkeskole":28, "Daginstitutioner":69, "Handicap":16, "Aeldre":28},
  "825": { "navn":"Læsø", "Tilskud":3, "Folkeskole":1, "Daginstitutioner":3, "Handicap":1, "Aeldre":1},
  "840": { "navn":"Rebild", "Tilskud":48, "Folkeskole":22, "Daginstitutioner":54, "Handicap":13, "Aeldre":22},
  "846": { "navn":"Mariagerfjord", "Tilskud":69, "Folkeskole":31, "Daginstitutioner":77, "Handicap":18, "Aeldre":31},
  "849": { "navn":"Jammerbugt", "Tilskud":63, "Folkeskole":29, "Daginstitutioner":71, "Handicap":17, "Aeldre":29},
  "851": { "navn":"Aalborg", "Tilskud":349, "Folkeskole":159, "Daginstitutioner":392, "Handicap":93, "Aeldre":159},
  "860": { "navn":"Hjørring", "Tilskud":107, "Folkeskole":49, "Daginstitutioner":121, "Handicap":28, "Aeldre":49}
}

function ready(event) {
  function addEventListenerList(list, event, fn) {
    for (var i = 0, len = list.length; i < len; i++) {
      list[i].addEventListener(event, fn, false);
    }
  }

  function handleClick() {
    var dataElement = this.dataset.element;
    var group = document.getElementsByClassName(this.dataset.group);
    var element = document.getElementById(dataElement);
    if (element.className === 'js-active-default') {
      element.classList.remove('js-active-default');
    } else {
      if (!element.className === 'js-active') {
        if (group) {
          Array.prototype.forEach.call(group, function(el) {
            el.classList.remove('js-active');
          });
        }
        element.classList.toggle('js-active');
      } else {
        element.classList.toggle('js-active');
      }
    }
  }

  function displayName() {
    //this.style.fill = "red"
    var komId = parseInt(this.id.replace('k',''));
    var currentKomm = kommuner[komId];
    var popupStats = document.getElementById('popup-stats');
    var popupPlaceholder = document.getElementById('popup-placeholder')
    var popupName = document.getElementById('popup-name');
    var popupSchool = document.getElementById('popup-school');
    var popupDayCare = document.getElementById('popup-daycare');
    var popupDisability = document.getElementById('popup-disability');
    var popupElder = document.getElementById('popup-elder');
    popupName.innerText = 'Ekstra ansatte i ' + currentKomm.navn;
    popupSchool.innerText = currentKomm.Folkeskole
    popupDayCare.innerText = currentKomm.Daginstitutioner
    popupDisability.innerText = currentKomm.Handicap
    popupElder.innerText = currentKomm.Aeldre
    popupPlaceholder.style.display = 'none';
    popupStats.style.display = 'block';
    // console.log();
  }
  var listJsToggle = document.getElementsByClassName('js-toggle');
  var listKommuner = document.getElementsByClassName('kgroup');
  addEventListenerList(listJsToggle, 'click', handleClick);
  addEventListenerList(listKommuner, 'click', displayName);

  // console.log(kommuner[101]);
  // clean up event binding
  window.removeEventListener('DOMContentLoaded', ready);
}
// bind to the load event
window.addEventListener('DOMContentLoaded', ready);
