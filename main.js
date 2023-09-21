let state = {
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
        this.makeNextEvent()
    },
    drawPage1: function(){
        this.makeTag ("div", "head", "div1", "container text-center")
        this.makeTag ("div", "headRow", "head", "row justify-content-center")
        this.makeTag ("div", "headCol", "headRow", "col-12 title")
        this.drawText("Pick a number from 01 - 99", "headCol")
        
        this.makeTag ("div", "next", "div1", "container")
        this.makeTag ("div", "nextRow", "next", "row justify-content-center")
        this.makeTag ("div", "nextCol", "nextRow", "col-12")
        this.makeTag ("button", "goButton", "nextCol", "buttonsquare")
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
        this.makeStartEvent()
    },
    drawPage2: function(){
        this.makeTag ("div", "head", "div1", "container text-center")
        this.makeTag ("div", "headRow", "head", "row justify-content-center")
        this.makeTag ("div", "headCol", "headRow", "col-12 title")
        this.drawText("Add both digits together to get a new number", "headCol")
        
        this.makeTag ("div", "next", "div1", "container")
        this.makeTag ("div", "nextRow", "next", "row justify-content-center")
        this.makeTag ("div", "nextCol", "nextRow", "col-12")
        this.makeTag ("button", "goButton", "nextCol", "buttonsquare")
        this.makeNextEvent()

        this.makeTag ("div", "body", "div1", "container text-center")
        this.makeTag ("div", "bodyRow", "body", "row justify-content-center")
        this.makeTag ("div", "bodyCol", "bodyRow", "col-12  body")
        this.drawText ("Ex: 14 is 1 + 4 = 5 click next to proseed", "bodyCol")
        
        this.makeTag("footer", "foot", "div1", "footer")
        this.makeTag ("div", "footCont", "foot", "container")
        this.makeTag ("div", "footRow", "footCont", "row")
        this.makeTag ("div", "footCol", "footRow", "col")
        this.makeTag ("button", "startButton", "footCol", "buttonRound position-absolute bottom-0 end-0")
        this.makeStartEvent()
    },
    drawPage3: function(){
        this.makeTag ("div", "head", "div1", "container text-center")
        this.makeTag ("div", "headRow", "head", "row justify-content-center")
        this.makeTag ("div", "headCol", "headRow", "col-12 title")
        this.drawText("Subtract your new number from the original number", "headCol")
        
        this.makeTag ("div", "next", "div1", "container")
        this.makeTag ("div", "nextRow", "next", "row justify-content-center")
        this.makeTag ("div", "nextCol", "nextRow", "col-12")
        this.makeTag ("button", "goButton", "nextCol", "buttonsquare")
        this.makeNextEvent()

        this.makeTag ("div", "body", "div1", "container text-center")
        this.makeTag ("div", "bodyRow", "body", "row justify-content-center")
        this.makeTag ("div", "bodyCol", "bodyRow", "col-12  body")
        this.drawText ("Ex: 14 - 5 = 9  click next to proseed", "bodyCol")
        
        this.makeTag("footer", "foot", "div1", "footer")
        this.makeTag ("div", "footCont", "foot", "container")
        this.makeTag ("div", "footRow", "footCont", "row")
        this.makeTag ("div", "footCol", "footRow", "col")
        this.makeTag ("button", "startButton", "footCol", "buttonRound position-absolute bottom-0 end-0")
        this.makeStartEvent()
    },
    drawPage4: function(){
        //
    },
    drawPage5: function(){
        //
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
            state.currPage = 0;
            state.update();
        });
    },
    makeNextEvent: function () {
        let goButton = document.getElementById("goButton");
        goButton.addEventListener("click", function() {
            state.currPage++;
            state.update();
        });
    }
    
}


state.update();

