 $(document).ready(function(){
    $("input[type=checkbox]").removeAttr("checked");
    $("#tasks").tabs();
    $("ul").sortable({axis:"x", containment: "#deliverables"});
    $("ol").sortable({axis:"y", containment: "#deliverables"});
    $("#tasks").on("click", "input[type=checkbox]", function(){
      $(this).closest("li").slideUp(function(){
          $(this).remove();
      });
    });
    $("#tasks").on("click", "span.ui-icon-close", function(){
      var index = $(this).closest("li").index();
      var id = $(#main li:eq(" + index + ") a").attr("href");
      $("#main li:eq(" + index + ")".remove();
      $(id).remove();
      $("#tasks").tabs("refresh");
    });
