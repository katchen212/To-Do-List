 $("btnAddDeliverable").button();
    .click(function(){
      $("#deliverable-dialog").dialog({width:400, resizable:false, modal:true,
         buttons:{
           "Add new deliverable": function(){
              $("#tasks").tabs("refresh");
              var activeTab = $("#tasks").tabs("option", "active"); 
              var title = $("#main > li:nth-child(" + (activeTab +1) +") > a").attr("href");
              $("tasks " + title).append();                                                               
              $("#new-deliverable").val("<li><input type='checkbox'>" + $("#new-deliverable).val() + "</li>");
              $(this).dialog("close");
           },
           "Cancel":function(){
             $("new-deliverable").val("");
             $(this).dialog("close");    
          }
       });
    });
    $("btnAddTask").button();
    .click(function() {
      $(#task-dialog").dialog({width:400, resizable:false, modal:true,
          buttons:{
            "Add new task" :function(){
                var taskName = $("#new-task").val();
                var replaceName = taskName.split(" ").join("_");
                $("<li><a href='#" + replaceName + "'>" + taskName + "</a>span class='ui-icon ui-icon-close'></span></li>")
                .appendTo("#main");
                $("<ol id='" + replaceName + "'></ol>").appendTo(#"tasks").sortable();
                $("#tasks").tabs("refresh");
                var tabCount = $("#tasks .ui-tabs-nav li").length;
                $("#tasks").tabs("option", "active", tabCount-1);
                $("#new-task").val("");
                $(this).dialog("close");
           },
            "Cancel":function(){
              $("#new-task").val("");
              $(this).dialog("close");
           }
       });
  });
