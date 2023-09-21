let game = {
    currPage: 0,
    update: function () {
        this.clearPage();
        if (this.currPage === 0){
            this.drawPage0();
        } else if (this.currPage === 1){
            this.drawPage1()
        } else if (this.currPage === 2){
            this.drawPage2()
        } else if (this.currPage === 3){
            this.drawPage3()
        } else if (this.currPage === 4){
            this.drawPage4()
        } else if (this.currPage === 5){
            this.drawPage5()
        }
    },
    clearPage: function(){
        let childNodes = div1.childNodes;
        for (let i = childNodes.length - 1; i >= 0; i--) {
            div1.removeChild(childNodes[i]);
        }
    },
    drawPage0: function(){
        this.makeTag ("div", "head", "div1", "container text-center")
        this.makeTag ("div", "headRow", "head", "row justify-content-center")
        this.makeTag ("div", "headCol", "headRow", "col-12 title")
        this.drawText("I can read your mind", "headCol")
       
        this.makeTag("footer", "foot", "div1", "footer")
        this.makeTag ("div", "footCont", "foot", "container")
        this.makeTag ("div", "footRow", "footCont", "row")
        this.makeTag ("div", "footCol", "footRow", "col")
        this.makeTag ("button", "goButton", "footCol", "buttonRound position-absolute bottom-0 end-0")
        this.drawText ("Go", "goButton")
        this.makeNextEvent()
    },
    drawPage1: function(){
        this.makeTag ("div", "head", "div1", "container text-center")
        this.makeTag ("div", "headRow", "head", "row justify-content-center")
        this.makeTag ("div", "headCol", "headRow", "col-12 title")
        this.drawText("Pick a number from 01 - 99", "headCol")
        
        this.makeTag ("div", "next", "div1", "container text-center")
        this.makeTag ("div", "nextRow", "next", "row justify-content-center")
        this.makeTag ("div", "nextCol", "nextRow", "col")
        this.makeTag ("button", "goButton", "nextCol", "buttonsquare")
        this.drawText ("Next", "goButton")
        this.makeNextEvent()

        this.makeTag ("div", "body", "div1", "container text-center")
        this.makeTag ("div", "bodyRow", "body", "row justify-content-center")
        this.makeTag ("div", "bodyCol", "bodyRow", "col-12  body")
        this.drawText ("when you have your number click next", "bodyCol")
        
        this.makeTag("footer", "foot", "div1", "footer")
        this.makeTag ("div", "footCont", "foot", "container")
        this.makeTag ("div", "footRow", "footCont", "row")
        this.makeTag ("div", "footCol", "footRow", "col")
        this.makeTag ("button", "startButton", "footCol", "buttonRound position-absolute bottom-0 end-0")
        this.drawText ("<--", "startButton")
        this.makeStartEvent()
    },
    drawPage2: function(){
        this.makeTag ("div", "head", "div1", "container text-center")
        this.makeTag ("div", "headRow", "head", "row justify-content-center")
        this.makeTag ("div", "headCol", "headRow", "col-12 title")
        this.drawText("Add both digits together to get a new number", "headCol")
        
        this.makeTag ("div", "next", "div1", "container text-center")
        this.makeTag ("div", "nextRow", "next", "row justify-content-center")
        this.makeTag ("div", "nextCol", "nextRow", "col-12")
        this.makeTag ("button", "goButton", "nextCol", "buttonsquare")
        this.drawText ("Next", "goButton")
        this.makeNextEvent()

        this.makeTag ("div", "body", "div1", "container text-center")
        this.makeTag ("div", "bodyRow", "body", "row justify-content-center")
        this.makeTag ("div", "bodyCol", "bodyRow", "col-12  body")
        this.drawText ("Ex: 14 is 1 + 4 = 5", "bodyCol")
        this.drawText ("", "bodyCol")
        this.drawText ("click next to proseed", "bodyCol")
        
        this.makeTag("footer", "foot", "div1", "footer")
        this.makeTag ("div", "footCont", "foot", "container")
        this.makeTag ("div", "footRow", "footCont", "row")
        this.makeTag ("div", "footCol", "footRow", "col")
        this.makeTag ("button", "startButton", "footCol", "buttonRound position-absolute bottom-0 end-0")
        this.drawText ("<--", "startButton")
        this.makeStartEvent()
    },
    drawPage3: function(){
        this.makeTag ("div", "head", "div1", "container text-center")
        this.makeTag ("div", "headRow", "head", "row justify-content-center")
        this.makeTag ("div", "headCol", "headRow", "col-12 title")
        this.drawText("Subtract your new number from the original number", "headCol")
        
        this.makeTag ("div", "next", "div1", "container text-center")
        this.makeTag ("div", "nextRow", "next", "row justify-content-center")
        this.makeTag ("div", "nextCol", "nextRow", "col-12")
        this.makeTag ("button", "goButton", "nextCol", "buttonsquare")
        this.drawText ("Next", "goButton")
        this.makeNextEvent()

        this.makeTag ("div", "body", "div1", "container text-center")
        this.makeTag ("div", "bodyRow", "body", "row justify-content-center")
        this.makeTag ("div", "bodyCol", "bodyRow", "col-12  body")
        this.drawText ("Ex: 14 - 5 = 9", "bodyCol")
        this.drawText ("", "bodyCol")
        this.drawText ("click next to proseed", "bodyCol")
        
        this.makeTag("footer", "foot", "div1", "footer")
        this.makeTag ("div", "footCont", "foot", "container")
        this.makeTag ("div", "footRow", "footCont", "row")
        this.makeTag ("div", "footCol", "footRow", "col")
        this.makeTag ("button", "startButton", "footCol", "buttonRound position-absolute bottom-0 end-0")
        this.drawText ("<--", "startButton")
        this.makeStartEvent()
        
    },
    drawPage4: function(){
        
        this.randomizeSymbols()
        this.fillSymbolArray()

        this.makeTag ("div", "head", "div1", "container text-center")
        this.makeTag ("div", "headRow", "head", "row justify-content-center")
        this.makeTag ("div", "headCol", "headRow", "col-12 title")
        this.drawText(this.symbolArray, "headCol")

        this.makeTag ("div", "next", "div1", "container text-center")
        this.makeTag ("div", "nextRow", "next", "row justify-content-center")
        this.makeTag ("div", "nextCol", "nextRow", "col-12")
        this.makeTag ("button", "goButton", "nextCol", "buttonsquare")
        this.drawText ("Next", "goButton")
        this.makeNextEvent()

        this.makeTag ("div", "body", "div1", "container text-center")
        this.makeTag ("div", "bodyRow", "body", "row justify-content-center")
        this.makeTag ("div", "bodyCol", "bodyRow", "col-12  body")
        this.drawText ("Find your new number.", "bodyCol")
        this.drawText ("", "bodyCol")
        this.drawText ("Note the symbol beside the number", "bodyCol")
        
        
        this.makeTag("footer", "foot", "div1", "footer")
        this.makeTag ("div", "footCont", "foot", "container")
        this.makeTag ("div", "footRow", "footCont", "row")
        this.makeTag ("div", "footCol", "footRow", "col")
        this.makeTag ("button", "startButton", "footCol", "buttonRound position-absolute bottom-0 end-0")
        this.drawText ("<--", "startButton")
        this.makeStartEvent()
    },
    drawPage5: function(){
        this.makeTag ("div", "head", "div1", "container text-center")
        this.makeTag ("div", "headRow", "head", "row justify-content-center")
        this.makeTag ("div", "headCol", "headRow", "col-12 title")
        this.drawText(this.num0, "headCol")

        this.makeTag ("div", "body", "div1", "container text-center")
        this.makeTag ("div", "bodyRow", "body", "row justify-content-center")
        this.makeTag ("div", "bodyCol", "bodyRow", "col-12  body")
        this.drawText ("Your symbol is:", "bodyCol")
        this.drawText ("", "bodyCol")
        this.drawText (this.num0, "bodyCol")

        this.makeTag("footer", "foot", "div1", "footer")
        this.makeTag ("div", "footCont", "foot", "container")
        this.makeTag ("div", "footRow", "footCont", "row")
        this.makeTag ("div", "footCol", "footRow", "col")
        this.makeTag ("button", "startButton", "footCol", "buttonRound position-absolute bottom-0 end-0")
        this.drawText ("<--", "startButton")
        this.makeStartEvent()
    },
    makeTag: function(elem, id, where, type){
        let cont = document.createElement(elem);
        let out = document.getElementById(where);
        cont.setAttribute("id", id);
        cont.setAttribute("class", type);
        out.appendChild(cont);
    },
    drawText: function (text, where, type = ""){
        let para = document.createElement("p");
        let node = document.createTextNode(text);
        let out = document.getElementById(where);
        para.setAttribute("class", type);
        para.appendChild(node);
        out.appendChild(para);
    },
    makeStartEvent: function () {
        let startButton = document.getElementById("startButton");
        startButton.addEventListener("click", function() {
            game.currPage = 0;
            game.update();
        });
    },
    makeNextEvent: function () {
        let goButton = document.getElementById("goButton");
        goButton.addEventListener("click", function() {
            game.currPage++;
            game.update();
        });
    },
    noSymbolArray: [
        "0 - :0:",
        "1 - :1:",
        "2 - :2:",
        "3 - :3:",
        "4 - :4:",
        "5 - :5:",
        "6 - :6:",
        "7 - :7:",
        "8 - :8:",
        "9 - :0:",
        "10 - :1:",
        "11 - :2:",
        "12 - :3:",
        "13 - :4:",
        "14 - :5:",
        "15 - :6:",
        "16 - :7:",
        "17 - :8:",
        "18 - :0:",
        "19 - :1:",
        "20 - :2:",
        "21 - :3:",
        "22 - :4:",
        "23 - :5:",
        "24 - :6:",
        "25 - :7:",
        "26 - :8:",
        "27 - :0:",
        "28 - :1:",
        "29 - :2:",
        "30 - :3:",
        "31 - :4:",
        "32 - :5:",
        "33 - :6:",
        "34 - :7:",
        "35 - :8:",
        "36 - :0:",
        "37 - :1:",
        "38 - :2:",
        "39 - :3:",
        "40 - :4:",
        "41 - :5:",
        "42 - :6:",
        "43 - :7:",
        "44 - :8:",
        "45 - :0:",
        "46 - :1:",
        "47 - :2:",
        "48 - :3:",
        "49 - :4:",
        "50 - :5:",
        "51 - :6:",
        "52 - :7:",
        "53 - :8:",
        "54 - :0:",
        "55 - :1:",
        "56 - :2:",
        "57 - :3:",
        "58 - :4:",
        "59 - :5:",
        "60 - :6:",
        "61 - :7:",
        "62 - :8:",
        "63 - :0:",
        "64 - :1:",
        "65 - :2:",
        "66 - :3:",
        "67 - :4:",
        "68 - :5:",
        "69 - :6:",
        "70 - :7:",
        "71 - :8:",
        "72 - :0:",
        "73 - :1:",
        "74 - :2:",
        "75 - :3:",
        "76 - :4:",
        "77 - :5:",
        "78 - :6:",
        "79 - :7:",
        "80 - :8:",
        "81 - :0:",
        "82 - :1:",
        "83 - :2:",
        "84 - :3:",
        "85 - :4:",
        "86 - :5:",
        "87 - :6:",
        "88 - :7:",
        "89 - :8:",
        "90 - :0:",
        "91 - :1:",
        "92 - :2:",
        "93 - :3:",
        "94 - :4:",
        "95 - :5:",
        "96 - :6:",
        "97 - :7:",
        "98 - :8:",
        "99 - :0:",
    ],
    symbolArray: [],
    randomSymbolArray: [
        "!",
        "@",
        "#",
        "$",
        "%",
        "&",
        "*",
        "+",
        "<",
        "☺",
        "♥",
        "♦",
        "♣",
        "♠",
        "♪",
        "♫",
        "☼",
        "►",
        "↕",
        "♂",
        "♀"
    ],
    num0: "",
    num1: "",
    num2: "",
    num3: "",
    num4: "",
    num5: "",
    num6: "",
    num7: "",
    num8: "",

    randomizeSymbols: function (){
        this.num0 = this.randomSymbolArray[(Math.floor(Math.random() * this.randomSymbolArray.length))]
        this.num1 = this.randomSymbolArray[(Math.floor(Math.random() * this.randomSymbolArray.length))]
        this.num2 = this.randomSymbolArray[(Math.floor(Math.random() * this.randomSymbolArray.length))]
        this.num3 = this.randomSymbolArray[(Math.floor(Math.random() * this.randomSymbolArray.length))]
        this.num4 = this.randomSymbolArray[(Math.floor(Math.random() * this.randomSymbolArray.length))]
        this.num5 = this.randomSymbolArray[(Math.floor(Math.random() * this.randomSymbolArray.length))]
        this.num6 = this.randomSymbolArray[(Math.floor(Math.random() * this.randomSymbolArray.length))]
        this.num7 = this.randomSymbolArray[(Math.floor(Math.random() * this.randomSymbolArray.length))]
        this.num8 = this.randomSymbolArray[(Math.floor(Math.random() * this.randomSymbolArray.length))]
    },
    fillSymbolArray: function(){
        this.symbolArray = [];
        for (item in this.noSymbolArray){
            if(this.noSymbolArray[item] != this.noSymbolArray[item].replace(":0:", this.num0)) {
            this.symbolArray.push(this.noSymbolArray[item].replace(":0:", this.num0))
            } else if(this.noSymbolArray[item] != this.noSymbolArray[item].replace(":1:", this.num1)) {
            this.symbolArray.push(this.noSymbolArray[item].replace(":1:", this.num1))
            } else if(this.noSymbolArray[item] != this.noSymbolArray[item].replace(":2:", this.num2)) {
            this.symbolArray.push(this.noSymbolArray[item].replace(":2:", this.num2))
            } else if(this.noSymbolArray[item] != this.noSymbolArray[item].replace(":3:", this.num3)) {
            this.symbolArray.push(this.noSymbolArray[item].replace(":3:", this.num3))
            } else if(this.noSymbolArray[item] != this.noSymbolArray[item].replace(":4:", this.num4)) {
            this.symbolArray.push(this.noSymbolArray[item].replace(":4:", this.num4))
            } else if(this.noSymbolArray[item] != this.noSymbolArray[item].replace(":5:", this.num5)) {
            this.symbolArray.push(this.noSymbolArray[item].replace(":5:", this.num5))
            } else if(this.noSymbolArray[item] != this.noSymbolArray[item].replace(":6:", this.num6)) {
            this.symbolArray.push(this.noSymbolArray[item].replace(":6:", this.num6))
            } else if(this.noSymbolArray[item] != this.noSymbolArray[item].replace(":7:", this.num7)) {
            this.symbolArray.push(this.noSymbolArray[item].replace(":7:", this.num7))
            } else if(this.noSymbolArray[item] != this.noSymbolArray[item].replace(":8:", this.num8)) {
            this.symbolArray.push(this.noSymbolArray[item].replace(":8:", this.num8))
            }
        }
    }

}


game.update();

