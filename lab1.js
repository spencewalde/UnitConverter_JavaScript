/**
 * Lab1.js
 * 7/20/2020
 * Spencer Williams-Waldemar
 * Intro to web programming
 * converts:
 * length, mass, and currency
 * (currency rate based off of rate on 7/20/2020 and rate change everyday)
 * https://www.x-rates.com/calculator/
 */


//declares unit
var input = document.getElementById('input');
var result = document.getElementById('result');
var inType = document.getElementById('inType');
var outType = document.getElementById('outType');
var unitType = document.getElementById('unitType');
var inputTypeValue, outputTypeValue, unitTypeValue;

//declares event listeners
unitType.addEventListener("change", switchUnitType);
input.addEventListener("keyup", myResult);
inType.addEventListener("change", myResult);
outType.addEventListener("change", myResult);

//updates values on webpage
inputTypeValue = inType.value;
outputTypeValue = outType.value;
unitTypeValue = unitType.value;
//switches input combox to only display the units related to its type
function switchUnitType() {
    //clears input output and unit comboboxes
    inType.innerHTML = ''
    outType.innerHTML = ''
    input.value = ''
    result.value = ''
    //delcares arrays for unit values based on their type of unit
    var lengthUnits = ['Meter', 'Centimeter', 'Kilometer']
    var massUnits = ['Gram', 'Centigram', 'Kilogram']
    var currencyUnits = ['Dollar', 'Euro', 'Yen']

    //appends and creates elements for the comboboxes with the 
    //type of values based off of what is in the UnitsType combobox
    for (var i = 0; i < 3; i++) {
        //creates option element for input and output Unit comboboxes
        var inputEl = document.createElement('option')
        var outputEl = document.createElement('option')
        var content = ''
        if (unitType.value === 'Length') content = lengthUnits[i]
        else if (unitType.value === 'Mass') content = massUnits[i];
        else content = currencyUnits[i];

        inputEl.textContent = content;
        inputEl.value = content;
        outputEl.textContent = content;
        outputEl.value = content;

        inType.append(inputEl);
        outType.append(outputEl);
    }
}
//calculates results based on the type and the units selected in other boxs
function myResult() {
    //updates the page on eventlistener
    inputTypeValue = inType.value;
    outputTypeValue = outType.value;
    unitTypeValue = unitType.value;


    //if unit type is in length
    if (unitTypeValue == "Length") {

        //m to km
        if (inputTypeValue == "Meter" && outputTypeValue == "Kilometer") {
            result.value = Number(input.value) * .001;
        }

        //m to cm
        else if (inputTypeValue == "Meter" && outputTypeValue == "Centimeter") {
            result.value = Number(input.value) * 100;
        }
        //m to m
        else if (inputTypeValue == "Meter" && outputTypeValue == "Meter") {
            result.value = input.value;
        }



        //km to m
        if (inputTypeValue == "Kilometer" && outputTypeValue == "Meter") {
            result.value = Number(input.value) * 1000;
        }
        //km to cm
        else if (inputTypeValue == "Kilometer" && outputTypeValue == "Centimeter") {
            result.value = Number(input.value) * 100000;
        }
        //km to km 
        else if (inputTypeValue == "Kilometer" && outputTypeValue == "Kilometer") {
            result.value = input.value;
        }



        //cm to m
        if (inputTypeValue == "Centimeter" && outputTypeValue == "Meter") {
            result.value = Number(input.value) * .00001;
        }
        //cm to km
        else if (inputTypeValue == "Centimeter" && outputTypeValue == "Kilometer") {
            result.value = Number(input.value) * .01;
        }
        //cm to cm
        else if (inputTypeValue == "Centimeter" && outputTypeValue == "Centimeter") {
            result.value = input.value;
        }

    }



    //if unit type is in mass
    else if (unitTypeValue == "Mass") {
        //g to kg
        if (inputTypeValue == "Gram" && outputTypeValue == "Kilogram") {
            result.value = Number(input.value) * .001;
        }

        //g to cg
        else if (inputTypeValue == "Gram" && outputTypeValue == "Centigram") {
            result.value = Number(input.value) * 100;
        }
        //g to g
        else if (inputTypeValue == "Gram" && outputTypeValue == "Gram") {
            result.value = input.value;
        }


        //kg to g 
        if (inputTypeValue == "Kilogram" && outputTypeValue == "Gram") {
            result.value = Number(input.value) * 1000;
        }
        //kg to cg
        else if (inputTypeValue == "Kilogram" && outputTypeValue == "Centigram") {
            result.value = Number(input.value) * 100000;
        }
        //kg to kg 
        else if (inputTypeValue == "Kilogram" && outputTypeValue == "Kilogram") {
            result.value = input.value;
        }



        //cg to g
        if (inputTypeValue == "Centigram" && outputTypeValue == "Gram") {
            result.value = Number(input.value) / 100;
        }
        //cg to kg
        else if (inputTypeValue == "Centigram" && outputTypeValue == "Kilogram") {
            result.value = Number(input.value) / 100000;
        }
        //cg to cg
        else if (inputTypeValue == "Centigram" && outputTypeValue == "Centigram") {
            result.value = input.value;
        }

    }
    //if unit type is in currency
    ////// CURRENCY RATES SUBJECT TO DAILY CHANGE (CURRENCY RATE FOR 7/20/20)/////
    else if (unitTypeValue == "Currency") {
        //d to e
        if (inputTypeValue == "Dollar" && outputTypeValue == "Euro") {
            result.value = Number(input.value) * .8742;
        }

        //d to y
        else if (inputTypeValue == "Dollar" && outputTypeValue == "Yen") {
            result.value = Number(input.value) * 107.17;
        }
        //d to d
        else if (inputTypeValue == "Dollar" && outputTypeValue == "Dollar") {
            result.value = input.value;
        }


        //e to d
        if (inputTypeValue == "Euro" && outputTypeValue == "Dollar") {
            result.value = Number(input.value) * 1.143;
        }
        //e to y
        else if (inputTypeValue == "Euro" && outputTypeValue == "Yen") {
            result.value = Number(input.value) * 122.60;
        }
        //e to e 
        else if (inputTypeValue == "Euro" && outputTypeValue == "Euro") {
            result.value = input.value;
        }



        //y to d
        if (inputTypeValue == "Yen" && outputTypeValue == "Dollar") {
            result.value = Number(input.value) * .009329;
        }
        //y to e
        else if (inputTypeValue == "Yen" && outputTypeValue == "Euro") {
            result.value = Number(input.value) * .008156;
        }
        //y to y
        else if (inputTypeValue == "Yen" && outputTypeValue == "Yen") {
            result.value = input.value;
        }


    }

}