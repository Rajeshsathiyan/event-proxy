$(document).ready(function(){
    $("input").select(function(){
        alert("test mark selected")
    })
    $("button").triggerHandler("select")
})

//$ proxy 

$(document).ready(function(){
    let obj ={
        Name:"Rajesh",
        Age:"27",
        test:function(){
            $("p").after("Name:"+this.Name+"<br> Age:"+this.Age);
        }
    }
    $("#btn").click($.proxy(obj,"test"))
})