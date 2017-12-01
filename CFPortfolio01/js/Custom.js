$("#btnMath1_1").click(function () {
    //Use jQuery to gather the user input
    var input1 = Number($("#mathInput1_1").val());
    var input2 = Number($("#mathInput1_2").val());
    var input3 = Number($("#mathInput1_3").val());
    var input4 = Number($("#mathInput1_4").val());
    var input5 = Number($("#mathInput1_5").val());

    //Calculate the Sum
    var sum = input1 + input2 + input3 + input4 + input5;

    //Calculate the Product
    var product = input1 * input2 * input3 * input4 * input5;

    //Calculate the Mean
    var mean = sum / 5;

    //Calculate the Min
    var min = Math.min(input1, input2, input3, input4, input5);

    //Calculate the Max
    var max = Math.max(input1, input2, input3, input4, input5);

    //Use jQuery to output the results
    var output = "Sum: " + sum + "<br>";
    output += "Product: " + product + "<br>";
    output += "Mean: " + mean + "<br>";
    output += "Min: " + min + "<br>";
    output += "Max: " + max;

    $("#mathOutput1").html(output);
});

$("#btnMath1_2").click(function () {
    //Clear the controls
    $("#mathInput1_1").val("");
    $("#mathInput1_2").val("");
    $("#mathInput1_3").val("");
    $("#mathInput1_4").val("");
    $("#mathInput1_5").val("");
    $("#mathOutput1").text("");
});

$("#btnMath2_1").click(function () {
    var input1 = Number($("#mathInput2_1").val());
    var newnum = 1;

    for (i = 1; i < input1; i++) {
        newnum = newnum * (i+1);
    }

    var output = newnum;

    $("#mathOutput2").html(output);
});

$("#btnMath2_2").click(function () {
    //Clear the controls
    $("#mathInput2_1").val("");
    $("#mathOutput2").text("");
});

$("#btnMath3_1").click(function () {
    var input1 = Number($("#mathInput3_1").val());
    var input2 = Number($("#mathInput3_2").val());
    var current = "";
    var running = "";

    for (i = 1; i < 101; i++) {
        
        current = "";
        if (i % input1 == 0) {
            current = "Fizz";
        };
    
        if (i % input2 == 0) {
            if (current == "Fizz") {
                current = current + "Buzz";
                current = current.toUpperCase();
            } else {
                current = "Buzz";
            }
        };

        if (current == ""){
            current = i;
        };
        running = running + current + " ";
    }
    running = running.trim();

    $("#mathOutput3").html(running);
});

$("#btnMath3_2").click(function () {
    //Clear the controls
    $("#mathInput3_1").val("");
    $("#mathInput3_2").val("");
    $("#mathOutput3").text("");
});

$("#btnMath4_1").click(function () {
    var string1 = $("#mathInput4_1").val();
    string1 = string1.toLowerCase().replace(/\s/g, "");

    var string2 = string1;
    string2 = string2.split("").reverse().join("");

    var output = "Nope. Not a palendrone.";

    if (string1 == string2) {
        output = "Yep. That's a palendrone."
    };

    $("#mathOutput4").html(output);
});

$("#btnMath4_2").click(function () {
    //Clear the controls
    $("#mathInput4_1").val("");
    $("#mathOutput4").text("");
});

$("#btnShowCode1").click(function () {
    $("#myCode1").toggle();
});

$("#btnShowCode2").click(function () {
    $("#myCode2").toggle();
});

$("#btnShowCode3").click(function () {
    $("#myCode3").toggle();
});

$("#btnShowCode4").click(function () {
    $("#myCode4").toggle();
});