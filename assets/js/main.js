let restaurant = [
                  'ก๊วยเตี๋ยวแซว ซอย49', 
                  'หมูกรอบ ตรงข้ามท้องฟ้าจำลอง', 
                  'เตี๋ยวไก่ ซอยข้างเมเจอร์', 
                  'Yamato เนื้อเซ็ท ซอย49', 
                  'Seoul เนื้อผัดซอสเซ็ท', 
                  'Kiani', 
                  'บะหมี่คนแซ่ลี', 
                  'Sizzler', 
                  'Sendai Ramen คุณลุง', 
                  'Ramen เผ็ด', 
                  'โคโค่อิชิบันยะ', 
                  'Omu',
                  'กิวมะ', 
                  'โคซิแร', 
                  'ข้าวลุงหลังตึก T-one', 
                  'แซว ทองหล่อ', 
                  'ข้าวมันไก่บุญตงเกียรติ', 
                  'ข้าวมันไก่บุญตงกี่', 
                  'เฮ้งชุนเส็ง เนื้อหม้อไฟ คลองเตย', 
                  'เฮียบิ๊ก 5 หม้อ'
                ];

let numRandom = Math.floor(restaurant.length * Math.random());

let randomResult = restaurant[numRandom];
var animate;
var isStop = false;

function runRoll(arrText) {
  $("#restaurant").text(arrText[Math.floor(restaurant.length * Math.random())]);
  
  if (arrText.length) {
    animate = setTimeout(function() {
      runRoll(arrText);
    }, 100)
  }
}

function resetRoll(){
  runRoll(restaurant);
}
function reRoll(){
  clearTimeout(animate);
  if(isStop == false) {
    $('#restaurant').text(restaurant[Math.floor(restaurant.length * Math.random())]);
    $('#stamp').text(new Date().toString().substr(4, 20));
    isStop = true;
  } else {
    runRoll(restaurant);
    $('#stamp').text('');
    isStop = false;
  }
}

$(document).ready(function(){
  runRoll(restaurant);
});