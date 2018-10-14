//modal settings
var modal = document.getElementById('myModal');
var img_list = document.getElementsByClassName('originThumbnails');
for(let i=0; i<img_list.length; i++){
    temp = img_list[i];
    temp.onclick = function(){
        //change the pic src
        modal.style.display = "block";
        pic4 = document.getElementById("pic04");
        pic3 = document.getElementById("pic03");
        pic2 = document.getElementById("pic02");
        pic1 = document.getElementById("pic01");

        //change the slides thumbnail src
        slides2 = document.getElementById("slide02");
        slides1 = document.getElementById("slide01");
        slides3 = document.getElementById("slide03");
        slides4 = document.getElementById("slide04");
        origin_url = this.src;
        changed_url01 = origin_url.replace("-1.","-2.");
        changed_url03 = origin_url.replace("-1.","-3.");
        changed_url04 = origin_url.replace("-1.","-4.");

        slides1.src = this.src;
        slides2.src = changed_url01;
        slides3.src = changed_url03;
        slides4.src = changed_url04;

        //change the slides full-size src
        pic1.src = this.src+"/full";
        pic2.src = changed_url01 + "/full";
        pic3.src = changed_url03 + "/full";
        pic4.src = changed_url04 + "/full";
        slides1.click();
    }
}
// get <span> element to set close button
var span = document.getElementById("modalclose");

// click (x) to close modal
span.onclick = function() {
  modal.style.display = "none";
};

// slides part
var slideIndex = 1;
showDivs(slideIndex);

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
}

window.onload = function() {
    var box = document.getElementById("box");
    var imgs = box.getElementsByTagName('img');
    for (let i = 0; i < imgs.length; i++) {
        var w = imgs[i].offsetWidth,h = imgs[i].offsetHeight;
            w > h ? imgs[i].style.width = '100%' : imgs[i].style.height = '100%'
    }
};


//just a test
var upload_banner = document.getElementById("wrap");
var tester = document.getElementById("upload-filename").innerHTML;
document.getElementById("uploadTitle").innerHTML;
var fail_text = document.getElementById("check").innerHTML;
var upload_close = document.getElementById("close_button");

function showing(){//定时器
    if (!(tester === '')){
        if(!(fail_text === ''))
        {
        document.getElementById("uploadTitle").innerHTML = fail_text;
        }
        else{
        document.getElementById("uploadTitle").innerHTML = '1 upload complete';
        }
        upload_banner.style.display = 'block';
}

}
function hiding(){//定时器
    upload_banner.style.display = 'none';
}


upload_close.onclick = hiding;
//document.getElementById("uploadTitle").innerHTML = fail_text;
showing();
setTimeout(function(){//定时器
    //upload_banner.css.fadeOut();
    upload_banner.style.opacity = 1.0;
},14);

setTimeout(function(){//定时器
    //upload_banner.css.fadeOut();
    //upload_banner.style.opcaity = 0;
    //hiding();
}, 6000);





