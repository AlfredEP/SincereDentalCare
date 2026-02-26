// Add this to a new script.js file or before </body>
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
  document.querySelector('.main-nav').classList.toggle('active');
});

// Highlight current page in nav
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

function sendWhatsAppNotification(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var row = e.range.getRow();
  var nama = sheet.getRange(row, 2).getValue();  // Column for "Nama"
  var keluhan = sheet.getRange(row, 4).getValue(); // Column for "Keluhan"
  var waktu = sheet.getRange(row, 5).getValue(); // Column for "Waktu"

  var message = "📢 Janji Temu Baru! \n👤 Nama: " + nama + "\n🦷 Keluhan: " + keluhan + "\n⏰ Waktu: " + waktu;
  
  var phone = "628159499126";  // Dr. Venita's WhatsApp number (Indonesia code +62)
  var url = "https://api.whatsapp.com/send?phone=" + phone + "&text=" + encodeURIComponent(message);

  UrlFetchApp.fetch(url);
}

// Trigger the function when a new response is added
function createTrigger() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  ScriptApp.newTrigger("sendWhatsAppNotification")
  .forSpreadsheet(sheet)
  .onFormSubmit()
  .create();
} 