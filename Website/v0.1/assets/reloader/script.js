
var initiated=!1;$(document).on("add.cards changeParameter.cards",function(a){$(a.target).is(".twitter")&&!initiated&&(initiated=!0,setTimeout(function(){window.twttr.widgets.load();initiated=!1},2E3))});
