$("input").keyup(function()
{
  output="";
  let stm = $("#stm").val();
  console.log(stm);
  let csr = $("input[name=csrfmiddlewaretoken]").val();
  mydata = {stm : stm, csrfmiddlewaretoken: csr};
  $.ajax(
  {
    url: "{% url 'statement' %}",
    method: "POST",
    data: mydata,
    dataType: "json",
    success: function(data)
    {

        x = data.st;
        if (data.st !="")
        {

            for (let i = 0; i < x.length; i++)
            {
                console.log(x[i]);
                output += "<input type='button' class='btn btn-primary mt-1 mr-1 tg' value=" +x[i] +  "/>";
            }
            $("#tagdiv").html(output);
        }
        else
        {
            data.st = "";
            $("#st").html(data.st);
        }

    }

  })
});


$("#tagdiv").on("click", ".tg", function()
{
  console.log("click Tag");
  let tag = $(this).val();
  console.log(tag);
  let stm = $("#stm").val();
  stm = stm + ", " + tag;
  console.log(stm);
  $("#stm").val(stm);
  $(this).closest("input").fadeOut();
});


$("#sub").click(function()
{
    console.log("click Sub");
    let stm = $("#stm").val();
    let csr = $("input[name=csrfmiddlewaretoken]").val();
    mydata = {stm : stm, csrfmiddlewaretoken: csr};
    $.ajax(
    {
        url: "{% url 'save' %}",
        method: "POST",
        data: mydata,
        dataType: "json",
        success: function(data)
        {
            console.log("success");
            $("#stm").val("");

            alert("Statement Saved");
            $("#tagdiv").html("");
        }

    })
});


var ctx = document.getElementbyID('mychart').getContext("2D");
var mychart = new Chart(ctx,
    {
        type: 'pie',
        data:
        {
          labels: [1,2,3,4,5],
          datasets: [
          {
            label : 'Label'
            data: [10,20,30,40,50],
            borderWidth:1,
          }]
        },


    }
);