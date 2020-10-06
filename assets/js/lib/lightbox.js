function openLB(page, width, height, scrolling, callback) {

    switch (callback) {
        case true:

            $.fancybox({
                height: height,
                href: page,
                type: 'iframe',
                scrolling: scrolling,
                width: width,
                afterClose: function () {
                    //document.forms[0].submit();
                    //location.reload();
                    //return;
                }
            });

            break;

        case false:

            $.fancybox({
                height: height,
                href: page,
                type: 'iframe',
                scrolling: scrolling,
                width: width
            });

            break;
    }

}

function closeLB() 
{
    $.fancybox.close();
}


//function showPopup(link, h, w, name) {
//    window.open(link, name, 'nenuber=no,toorlbar=no,location=no,scrollbars=yes, status=no,resizable=yes,width=' + w + 'px,height=' + h + ',top=220,left=650');
//    //window.showModalDialog(link,self,"status:yes;dialogWidth:"+w+"px;dialogHeight:"+h+"px;dialogHide:true;help:no;scroll:no");

//}


function showPopup(link, h, w, name) {
    var mywindow = window.open(link, name, 'nenuber=no,toorlbar=no,location=no,scrollbars=yes, status=no,resizable=yes,width=' + w + 'px,height=' + h + ',top=220,left=650');
    mywindow.focus();
    //window.showModalDialog(link,self,"status:yes;dialogWidth:"+w+"px;dialogHeight:"+h+"px;dialogHide:true;help:no;scroll:no");

}




function showDialogBox(link, w, h, name, scroll) {

   

    window.showModalDialog(link, self, "status:yes;dialogWidth:" + w + "px;dialogHeight:" + h + "px;dialogHide:true;help:no;scroll:" + scroll + "");
}


function closeDialogBox() {

    window.close();
}

function redirect(url) {
    window.location.href = url;
}