$(function(){
    var familySite=$(".family-site ul"),
    familyList=familySite.children("li")
    ,familyBtn=$(".family-site span"),
    famUp=familySite.height(),
    loginBox=$(".header .login-box"),
    loginBtn=$(".header .login"),
    saleBox=$(".slide-box ul"),
    soldOutBox=saleBox.children("li:nth-child(2)"),
    moveCircle=$("<div class='moveCircle'></div>"),
    moveRect=$("<div class='moveRect'></div>");

    soldOutBox.addClass("soldOut");
    var tagBox = soldOutBox.children(".tag-box"),
    soldOut = tagBox.children("span"),
    saleOut = tagBox.children("span.sale");
    soldOut.text("판매완료");
    saleOut.hide();

    familySite.css({top:famUp*-1});
    familyBtn.on("click",function(){
        familySite.toggleClass("on");
    })
    loginBtn.on("click",function(){
        loginBox.toggleClass("on");
    })


})

$(function(){
    $('a').on("click",function(e){
         e.preventDefault();
    });
});

