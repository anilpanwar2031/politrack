
$("#tbody").on("click", ".btn-del", function()
    {
        console.log("del clicked");
        let id = $(this).attr("data-sid");
        let csr = $("input[name=csrfmiddlewaretoken]").val();

        mydata = {sid: id, csrfmiddlewaretoken: csr};
        mythis = this
        $.ajax(
        {
            url: "{% url 'delete' %}",
            method: "POST",
            data: mydata,
            success: function(data)
            {
                if (data.status == 1)
                {
                console.log("deleted successfully");
                $(mythis).closest("tr").fadeOut();
                }
                if (data.status == 0)
                {
                console.log("Unable to delete");

                }
            }
        })
    })


$("#btnsave").click(function()
{
    console.log("save button clicked");
    output="";
    let sid = $("#id").val();
    let nm = $("#name").val();
    let em = $("#email").val();
    let pw = $("#password").val();
    let csr = $("input[name=csrfmiddlewaretoken]").val();

    if(nm == "")
    {
        console.log("Please enter a Name");
    }
    else if(em == "")
    {
        console.log("Please enter a Email");
    }
    else if(pw == "")
    {
        console.log("Please enter a Password");
    }
    else
    {
        mydata = {sid : sid, name: nm, email: em, password: pw, csrfmiddlewaretoken: csr};
        console.log(mydata);
        $.ajax(
        {
            url: "{% url 'save' %}",
            method: "POST",
            data: mydata,
            dataType: "json",
            success: function(data)
            {
                 console.log("In the Success");
                 x = data.student;
                 if(data.status == "Save")
                 {
                  console.log("Form Submmited");
                  console.log(x);

                  console.log(x.length);
                  for(i=0;i<x.length;i++)
                   {
                     output += "<tr><td>" + x[i].id + "</td><td>" + x[i].name + "</td><td>" +
                                            x[i].email + "</td><td>" + x[i].password +
                                            "</td><td><input type='button' value='Edit' class='btn btn-warning btn-sm' data-sid=" + x[i].id +
                                            "> <input type='button' value='Delete' class='btn btn-danger btn-sm' data-sid=" + x[i].id + ">";

                   }
                   console.log(output);
                   $("#tbody").html(output);
                   $("#id").val('');
                   $("form")[0].reset();

                 }
                 if(data.status == "Error")
                 {
                  console.log("Form Not Submmited");
                 }
            }

        })


    }

})

// Edit Data
$("#tbody").on("click", ".btn-edit", function()
    {
        console.log("Edit clicked");
        let id = $(this).attr("data-sid");
        let csr = $("input[name=csrfmiddlewaretoken]").val();

        mydata = {sid: id, csrfmiddlewaretoken: csr};

        $.ajax(
        {
            url: "{% url 'edit' %}",
            method: "POST",
            data: mydata,
            success: function(data)
            {
                console.log(data.stud);
                $("#id").val(data.id);
                $("#name").val(data.name);
                $("#email").val(data.email);
                $("#password").val(data.password);
            }
        })
    })