let div1 = document.getElementById("div1");

let state = {
    currPage: 0,
    update: function () {
        console.log("update")
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
        console.log("clear")
        let childNodes = div1.childNodes;
        for (let i = childNodes.length - 1; i >= 0; i--) {
            div1.removeChild(childNodes[i]);
        }
    },
    drawPage0: function(){
        console.log("draw0")
        this.makeTag ("div", "head", "div1", "container text-center")
        this.makeTag ("div", "headRow", "head", "row justify-content-center")
        this.makeTag ("div", "headCol", "headRow", "col-12 title")
        this.drawTitle("I can read your mind", "headCol")
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
    drawTitle: function (text, where){
        let para = document.createElement("p");
        let node = document.createTextNode(text);
        let out = document.getElementById(where);
        para.appendChild(node);
        out.appendChild(para);
    }
    
}

state.update();


