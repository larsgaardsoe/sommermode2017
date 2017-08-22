// Generic .js-toggle using data-element and data-group. Use .js-active-default if needed in responsive design
var data = {
  "101": { "name":"Københavns", "amount":990, "total":2471, "school":450, "daycare":1111, "disability":263, "elder":450, "health":197, "region":"Region Hovedstaden", "hospitals":1229},
  "147": { "name":"Frederiksberg ", "amount":174, "total":433, "school":79, "daycare":195, "disability":46, "elder":79, "health":35, "region":"Region Hovedstaden", "hospitals":1229},
  "151": { "name":"Ballerup ", "amount":80, "total":199, "school":36, "daycare":89, "disability":21, "elder":36, "health":16, "region":"Region Hovedstaden", "hospitals":1229},
  "153": { "name":"Brøndby ", "amount":59, "total":146, "school":27, "daycare":66, "disability":16, "elder":27, "health":12, "region":"Region Hovedstaden", "hospitals":1229},
  "155": { "name":"Dragør ", "amount":23, "total":59, "school":11, "daycare":26, "disability":6, "elder":11, "health":5, "region":"Region Hovedstaden", "hospitals":1229},
  "157": { "name":"Gentofte ", "amount":124, "total":311, "school":57, "daycare":140, "disability":33, "elder":57, "health":25, "region":"Region Hovedstaden", "hospitals":1229},
  "159": { "name":"Gladsaxe ", "amount":112, "total":280, "school":51, "daycare":126, "disability":30, "elder":51, "health":22, "region":"Region Hovedstaden", "hospitals":1229},
  "161": { "name":"Glostrup ", "amount":37, "total":92, "school":17, "daycare":42, "disability":10, "elder":17, "health":7, "region":"Region Hovedstaden", "hospitals":1229},
  "163": { "name":"Herlev ", "amount":47, "total":118, "school":21, "daycare":53, "disability":13, "elder":21, "health":9, "region":"Region Hovedstaden", "hospitals":1229},
  "165": { "name":"Albertslund ", "amount":46, "total":115, "school":21, "daycare":52, "disability":12, "elder":21, "health":9, "region":"Region Hovedstaden", "hospitals":1229},
  "167": { "name":"Hvidovre ", "amount":88, "total":219, "school":40, "daycare":99, "disability":23, "elder":40, "health":17, "region":"Region Hovedstaden", "hospitals":1229},
  "169": { "name":"Høje-Taastrup ", "amount":83, "total":207, "school":38, "daycare":93, "disability":22, "elder":38, "health":16, "region":"Region Hovedstaden", "hospitals":1229},
  "173": { "name":"Lyngby-Taarbæk ", "amount":91, "total":228, "school":42, "daycare":102, "disability":24, "elder":42, "health":18, "region":"Region Hovedstaden", "hospitals":1229},
  "175": { "name":"Rødovre ", "amount":63, "total":157, "school":29, "daycare":71, "disability":17, "elder":29, "health":13, "region":"Region Hovedstaden", "hospitals":1229},
  "183": { "name":"Ishøj ", "amount":37, "total":93, "school":17, "daycare":42, "disability":10, "elder":17, "health":7, "region":"Region Hovedstaden", "hospitals":1229},
  "185": { "name":"Tårnby ", "amount":71, "total":178, "school":32, "daycare":80, "disability":19, "elder":32, "health":14, "region":"Region Hovedstaden", "hospitals":1229},
  "187": { "name":"Vallensbæk ", "amount":26, "total":64, "school":12, "daycare":29, "disability":7, "elder":12, "health":5, "region":"Region Hovedstaden", "hospitals":1229},
  "190": { "name":"Furesø ", "amount":66, "total":166, "school":30, "daycare":75, "disability":18, "elder":30, "health":13, "region":"Region Hovedstaden", "hospitals":1229},
  "201": { "name":"Allerød ", "amount":41, "total":102, "school":19, "daycare":46, "disability":11, "elder":19, "health":8, "region":"Region Hovedstaden", "hospitals":1229},
  "210": { "name":"Fredensborg ", "amount":66, "total":165, "school":30, "daycare":74, "disability":18, "elder":30, "health":13, "region":"Region Hovedstaden", "hospitals":1229},
  "217": { "name":"Helsingør ", "amount":102, "total":256, "school":47, "daycare":115, "disability":27, "elder":47, "health":20, "region":"Region Hovedstaden", "hospitals":1229},
  "219": { "name":"Hillerød ", "amount":82, "total":204, "school":37, "daycare":92, "disability":22, "elder":37, "health":16, "region":"Region Hovedstaden", "hospitals":1229},
  "223": { "name":"Hørsholm ", "amount":41, "total":103, "school":19, "daycare":46, "disability":11, "elder":19, "health":8, "region":"Region Hovedstaden", "hospitals":1229},
  "230": { "name":"Rudersdal ", "amount":92, "total":229, "school":42, "daycare":103, "disability":24, "elder":42, "health":18, "region":"Region Hovedstaden", "hospitals":1229},
  "240": { "name":"Egedal ", "amount":71, "total":176, "school":32, "daycare":79, "disability":19, "elder":32, "health":14, "region":"Region Hovedstaden", "hospitals":1229},
  "250": { "name":"Frederikssund ", "amount":74, "total":184, "school":33, "daycare":83, "disability":20, "elder":33, "health":15, "region":"Region Hovedstaden", "hospitals":1229},
  "260": { "name":"Halsnæs ", "amount":51, "total":128, "school":23, "daycare":57, "disability":14, "elder":23, "health":10, "region":"Region Hovedstaden", "hospitals":1229},
  "270": { "name":"Gribskov ", "amount":67, "total":168, "school":31, "daycare":76, "disability":18, "elder":31, "health":13, "region":"Region Hovedstaden", "hospitals":1229},
  "400": { "name":"Bornholms ", "amount":65, "total":162, "school":30, "daycare":73, "disability":17, "elder":30, "health":13, "region":"Region Hovedstaden", "hospitals":1229},
  "253": { "name":"Greve ", "amount":82, "total":204, "school":37, "daycare":92, "disability":22, "elder":37, "health":16, "region":"Region Sjælland", "hospitals":609},
  "259": { "name":"Køge ", "amount":99, "total":248, "school":45, "daycare":111, "disability":26, "elder":45, "health":20, "region":"Region Sjælland", "hospitals":609},
  "265": { "name":"Roskilde ", "amount":143, "total":356, "school":65, "daycare":160, "disability":38, "elder":65, "health":28, "region":"Region Sjælland", "hospitals":609},
  "269": { "name":"Solrød ", "amount":36, "total":90, "school":16, "daycare":40, "disability":10, "elder":16, "health":7, "region":"Region Sjælland", "hospitals":609},
  "306": { "name":"Odsherred ", "amount":54, "total":134, "school":24, "daycare":60, "disability":14, "elder":24, "health":11, "region":"Region Sjælland", "hospitals":609},
  "316": { "name":"Holbæk ", "amount":115, "total":286, "school":52, "daycare":129, "disability":30, "elder":52, "health":23, "region":"Region Sjælland", "hospitals":609},
  "320": { "name":"Faxe ", "amount":58, "total":146, "school":27, "daycare":66, "disability":16, "elder":27, "health":12, "region":"Region Sjælland", "hospitals":609},
  "326": { "name":"Kalundborg ", "amount":80, "total":200, "school":36, "daycare":90, "disability":21, "elder":36, "health":16, "region":"Region Sjælland", "hospitals":609},
  "329": { "name":"Ringsted ", "amount":56, "total":141, "school":26, "daycare":63, "disability":15, "elder":26, "health":11, "region":"Region Sjælland", "hospitals":609},
  "330": { "name":"Slagelse ", "amount":128, "total":320, "school":58, "daycare":144, "disability":34, "elder":58, "health":25, "region":"Region Sjælland", "hospitals":609},
  "336": { "name":"Stevns ", "amount":37, "total":91, "school":17, "daycare":41, "disability":10, "elder":17, "health":7, "region":"Region Sjælland", "hospitals":609},
  "340": { "name":"Sorø ", "amount":48, "total":121, "school":22, "daycare":54, "disability":13, "elder":22, "health":10, "region":"Region Sjælland", "hospitals":609},
  "350": { "name":"Lejre ", "amount":45, "total":112, "school":20, "daycare":50, "disability":12, "elder":20, "health":9, "region":"Region Sjælland", "hospitals":609},
  "360": { "name":"Lolland ", "amount":69, "total":173, "school":32, "daycare":78, "disability":18, "elder":32, "health":14, "region":"Region Sjælland", "hospitals":609},
  "370": { "name":"Næstved ", "amount":135, "total":338, "school":62, "daycare":152, "disability":36, "elder":61, "health":27, "region":"Region Sjælland", "hospitals":609},
  "376": { "name":"Guldborgsund ", "amount":100, "total":249, "school":45, "daycare":112, "disability":26, "elder":45, "health":20, "region":"Region Sjælland", "hospitals":609},
  "390": { "name":"Vordingborg ", "amount":75, "total":187, "school":34, "daycare":84, "disability":20, "elder":34, "health":15, "region":"Region Sjælland", "hospitals":609},
  "410": { "name":"Middelfart ", "amount":62, "total":156, "school":28, "daycare":70, "disability":17, "elder":28, "health":12, "region":"Region Syddanmark", "hospitals":863},
  "420": { "name":"Assens ", "amount":68, "total":169, "school":31, "daycare":76, "disability":18, "elder":31, "health":13, "region":"Region Syddanmark", "hospitals":863},
  "430": { "name":"Faaborg-Midtfyn ", "amount":84, "total":209, "school":38, "daycare":94, "disability":22, "elder":38, "health":17, "region":"Region Syddanmark", "hospitals":863},
  "440": { "name":"Kerteminde ", "amount":39, "total":98, "school":18, "daycare":44, "disability":10, "elder":18, "health":8, "region":"Region Syddanmark", "hospitals":863},
  "450": { "name":"Nyborg ", "amount":52, "total":131, "school":24, "daycare":59, "disability":14, "elder":24, "health":10, "region":"Region Syddanmark", "hospitals":863},
  "461": { "name":"Odense ", "amount":330, "total":824, "school":150, "daycare":371, "disability":88, "elder":150, "health":66, "region":"Region Syddanmark", "hospitals":863},
  "479": { "name":"Svendborg ", "amount":96, "total":239, "school":43, "daycare":107, "disability":25, "elder":43, "health":19, "region":"Region Syddanmark", "hospitals":863},
  "480": { "name":"Nordfyn ", "amount":48, "total":120, "school":22, "daycare":54, "disability":13, "elder":22, "health":10, "region":"Region Syddanmark", "hospitals":863},
  "482": { "name":"Langeland ", "amount":21, "total":51, "school":9, "daycare":23, "disability":5, "elder":9, "health":4, "region":"Region Syddanmark", "hospitals":863},
  "492": { "name":"Ærø ", "amount":10, "total":26, "school":5, "daycare":11, "disability":3, "elder":5, "health":2, "region":"Region Syddanmark", "hospitals":863},
  "510": { "name":"Haderslev ", "amount":92, "total":230, "school":42, "daycare":103, "disability":24, "elder":42, "health":18, "region":"Region Syddanmark", "hospitals":863},
  "530": { "name":"Billund ", "amount":44, "total":109, "school":20, "daycare":49, "disability":12, "elder":20, "health":9, "region":"Region Syddanmark", "hospitals":863},
  "540": { "name":"Sønderborg ", "amount":122, "total":306, "school":56, "daycare":137, "disability":32, "elder":56, "health":24, "region":"Region Syddanmark", "hospitals":863},
  "550": { "name":"Tønder ", "amount":62, "total":155, "school":28, "daycare":69, "disability":16, "elder":28, "health":12, "region":"Region Syddanmark", "hospitals":863},
  "561": { "name":"Esbjerg ", "amount":191, "total":477, "school":87, "daycare":214, "disability":51, "elder":87, "health":38, "region":"Region Syddanmark", "hospitals":863},
  "563": { "name":"Fanø ", "amount":5, "total":14, "school":2, "daycare":6, "disability":1, "elder":2, "health":1, "region":"Region Syddanmark", "hospitals":863},
  "573": { "name":"Varde ", "amount":83, "total":207, "school":38, "daycare":93, "disability":22, "elder":38, "health":16, "region":"Region Syddanmark", "hospitals":863},
  "575": { "name":"Vejen ", "amount":71, "total":176, "school":32, "daycare":79, "disability":19, "elder":32, "health":14, "region":"Region Syddanmark", "hospitals":863},
  "580": { "name":"Aabenraa ", "amount":97, "total":242, "school":44, "daycare":109, "disability":26, "elder":44, "health":19, "region":"Region Syddanmark", "hospitals":863},
  "607": { "name":"Fredericia ", "amount":84, "total":209, "school":38, "daycare":94, "disability":22, "elder":38, "health":17, "region":"Region Syddanmark", "hospitals":863},
  "621": { "name":"Kolding ", "amount":152, "total":378, "school":69, "daycare":170, "disability":40, "elder":69, "health":30, "region":"Region Syddanmark", "hospitals":863},
  "630": { "name":"Vejle ", "amount":184, "total":460, "school":84, "daycare":207, "disability":49, "elder":84, "health":37, "region":"Region Syddanmark", "hospitals":863},
  "615": { "name":"Horsens ", "amount":146, "total":364, "school":66, "daycare":164, "disability":39, "elder":66, "health":29, "region":"Region Midtjylland", "hospitals":882},
  "657": { "name":"Herning ", "amount":145, "total":361, "school":66, "daycare":162, "disability":38, "elder":66, "health":29, "region":"Region Midtjylland", "hospitals":882},
  "661": { "name":"Holstebro ", "amount":95, "total":237, "school":43, "daycare":107, "disability":25, "elder":43, "health":19, "region":"Region Midtjylland", "hospitals":882},
  "665": { "name":"Lemvig ", "amount":33, "total":83, "school":15, "daycare":37, "disability":9, "elder":15, "health":7, "region":"Region Midtjylland", "hospitals":882},
  "671": { "name":"Struer ", "amount":35, "total":88, "school":16, "daycare":39, "disability":9, "elder":16, "health":7, "region":"Region Midtjylland", "hospitals":882},
  "706": { "name":"Syddjurs ", "amount":69, "total":172, "school":31, "daycare":77, "disability":18, "elder":31, "health":14, "region":"Region Midtjylland", "hospitals":882},
  "707": { "name":"Norddjurs ", "amount":63, "total":156, "school":28, "daycare":70, "disability":17, "elder":28, "health":12, "region":"Region Midtjylland", "hospitals":882},
  "710": { "name":"Favrskov ", "amount":78, "total":196, "school":36, "daycare":88, "disability":21, "elder":36, "health":16, "region":"Region Midtjylland", "hospitals":882},
  "727": { "name":"Odder ", "amount":37, "total":91, "school":17, "daycare":41, "disability":10, "elder":17, "health":7, "region":"Region Midtjylland", "hospitals":882},
  "730": { "name":"Randers ", "amount":161, "total":403, "school":73, "daycare":181, "disability":43, "elder":73, "health":32, "region":"Region Midtjylland", "hospitals":882},
  "740": { "name":"Silkeborg ", "amount":150, "total":374, "school":68, "daycare":168, "disability":40, "elder":68, "health":30, "region":"Region Midtjylland", "hospitals":882},
  "741": { "name":"Samsø ", "amount":6, "total":15, "school":3, "daycare":7, "disability":2, "elder":3, "health":1, "region":"Region Midtjylland", "hospitals":882},
  "746": { "name":"Skanderborg ", "amount":98, "total":244, "school":45, "daycare":110, "disability":26, "elder":45, "health":19, "region":"Region Midtjylland", "hospitals":882},
  "751": { "name":"Aarhus ", "amount":550, "total":1372, "school":250, "daycare":617, "disability":146, "elder":250, "health":109, "region":"Region Midtjylland", "hospitals":882},
  "756": { "name":"Ikast-Brande ", "amount":67, "total":168, "school":31, "daycare":75, "disability":18, "elder":31, "health":13, "region":"Region Midtjylland", "hospitals":882},
  "760": { "name":"Ringkøbing-Skjern ", "amount":94, "total":234, "school":43, "daycare":105, "disability":25, "elder":43, "health":19, "region":"Region Midtjylland", "hospitals":882},
  "766": { "name":"Hedensted ", "amount":76, "total":189, "school":35, "daycare":85, "disability":20, "elder":34, "health":15, "region":"Region Midtjylland", "hospitals":882},
  "779": { "name":"Skive ", "amount":76, "total":191, "school":35, "daycare":86, "disability":20, "elder":35, "health":15, "region":"Region Midtjylland", "hospitals":882},
  "791": { "name":"Viborg ", "amount":158, "total":394, "school":72, "daycare":177, "disability":42, "elder":72, "health":31, "region":"Region Midtjylland", "hospitals":882},
  "773": { "name":"Morsø ", "amount":34, "total":84, "school":15, "daycare":38, "disability":9, "elder":15, "health":7, "region":"Region Nordjylland", "hospitals":417},
  "787": { "name":"Thisted ", "amount":72, "total":180, "school":33, "daycare":81, "disability":19, "elder":33, "health":14, "region":"Region Nordjylland", "hospitals":417},
  "810": { "name":"Brønderslev ", "amount":59, "total":148, "school":27, "daycare":67, "disability":16, "elder":27, "health":12, "region":"Region Nordjylland", "hospitals":417},
  "813": { "name":"Frederikshavn ", "amount":99, "total":247, "school":45, "daycare":111, "disability":26, "elder":45, "health":20, "region":"Region Nordjylland", "hospitals":417},
  "820": { "name":"Vesthimmerland ", "amount":61, "total":152, "school":28, "daycare":69, "disability":16, "elder":28, "health":12, "region":"Region Nordjylland", "hospitals":417},
  "825": { "name":"Læsø ", "amount":3, "total":7, "school":1, "daycare":3, "disability":1, "elder":1, "health":1, "region":"Region Nordjylland", "hospitals":417},
  "840": { "name":"Rebild ", "amount":48, "total":120, "school":22, "daycare":54, "disability":13, "elder":22, "health":10, "region":"Region Nordjylland", "hospitals":417},
  "846": { "name":"Mariagerfjord ", "amount":69, "total":172, "school":31, "daycare":77, "disability":18, "elder":31, "health":14, "region":"Region Nordjylland", "hospitals":417},
  "849": { "name":"Jammerbugt ", "amount":63, "total":158, "school":29, "daycare":71, "disability":17, "elder":29, "health":13, "region":"Region Nordjylland", "hospitals":417},
  "851": { "name":"Aalborg ", "amount":349, "total":872, "school":159, "daycare":392, "disability":93, "elder":159, "health":69, "region":"Region Nordjylland", "hospitals":417},
  "860": { "name":"Hjørring ", "amount":107, "total":268, "school":49, "daycare":121, "disability":28, "elder":49, "health":21, "region":"Region Nordjylland", "hospitals":417}
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
  function displayName(e) {
    // console.log(e);
    var komId = parseInt(this.id.replace('k',''));
    var currentKomm = data[komId];
    var mapInfo = document.getElementById('map-info');
    mapInfo.style.top = (e.pageY + 10) + 'px';
    mapInfo.style.left = (e.pageX + 10) + 'px';
    mapInfo.innerText = currentKomm.name + ' kommune';
    mapInfo.style.display = 'block';
  }

  function removeName() {
    document.getElementById('map-info').style.display = 'none';
  }

  function displayInfo() {
    //this.style.fill = "red"
    var komId = parseInt(this.id.replace('k',''));
    var currentKomm = data[komId];
    var popupStats = document.getElementById('popup-stats');
    var popupPlaceholder = document.getElementById('popup-placeholder')
    var popupName = document.getElementById('popup-name');
    var popupSchool = document.getElementById('popup-school');
    var popupDayCare = document.getElementById('popup-daycare');
    var popupDisability = document.getElementById('popup-disability');
    var popupElder = document.getElementById('popup-elder');
    popupName.innerText = 'Ekstra ansatte i ' + currentKomm.name + 'kommune';
    popupSchool.innerText = currentKomm.school;
    popupDayCare.innerText = currentKomm.daycare;
    popupDisability.innerText = currentKomm.disability;
    popupElder.innerText = currentKomm.elder;
    document.getElementById('popup-health').innerText = currentKomm.health;
    document.getElementById('popup-hospitals').innerText = currentKomm.hospitals;

    popupPlaceholder.style.display = 'none';
    popupStats.style.display = 'flex';
    // console.log();
  }
  var listJsToggle = document.getElementsByClassName('js-toggle');
  var listKommuner = document.getElementsByClassName('kgroup');
  addEventListenerList(listJsToggle, 'click', handleClick);
  addEventListenerList(listKommuner, 'click', displayInfo);
  addEventListenerList(listKommuner, 'mouseover', displayName);
  addEventListenerList(listKommuner, 'mouseout', removeName);
  // console.log(kommuner[101]);
  // clean up event binding
  window.removeEventListener('DOMContentLoaded', ready);
}
// bind to the load event
window.addEventListener('DOMContentLoaded', ready);
