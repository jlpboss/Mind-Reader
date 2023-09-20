let state = {
    currPage: 0,
    update: function () {
        this.clearPage();
        if (this.currPage === 0){
            this.drawPage0();
        } else if (this.currPage === 1){
            //drawPage1()
        } else if (this.currPage === 2){
            //drawPage2()
        } else if (this.currPage === 3){
            //drawPage3()
        } else if (this.currPage === 4){
            //drawPage4()
        } else if (this.currPage === 5){
            //drawPage5()
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
        //this.drawText ("go button", "footCol", "position-absolute bottom-0 end-0")
        this.makeTag ("button", "goButton", "footCol", "buttonRound position-absolute bottom-0 end-0")
    },
    drawPage1: function(){
        //
    },
    drawPage2: function(){
        //
    },
    drawPage3: function(){
        //
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
    }
    
}

state.update();


