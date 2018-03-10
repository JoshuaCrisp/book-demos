AFRAME.registerComponent('gridify-buttons', {
    schema: {
        class: {type:'string',default:"gridify-button"},
        btnCount: {type:'number', default: 4},
        btnWidth: {type: 'number', default: 1},
        btnHeight: {type: 'number', default: 1},
        columns: {type:'number', default: 2},
        color: {type: 'array', default: ['#94248b', '#44318c', '#ee4936', '#77c94b', '#1ea155', '#e82346', '#1c5aa6', '#47b550', '#1a93ce', '#e0217e', '#fba43d', '#a6da48', '#fcc841', '#f7e344', '#d2e646']},
        url: {type: 'string'},
        normals:{type:'boolean', default: false},
        imagebase: {type: 'string'},
        spacing: {type: 'number', default: 0.05} 
    },

    init: function () {
        
        var el = this.el;

        var data = this.data;
        var numColumns = data.columns;
        var btnNumber = data.btnCount;
        var modolo = btnNumber % numColumns;
        var posX = -((data.btnWidth* data.columns) + (data.spacing * (numColumns - 1))/2);
        var posY = 0;
        

        // determine the maximim number of buttons in each row
        var maxColumnLength;
        if(modolo !==0){
            maxColumnLength = ((btnNumber- modolo)/numColumns) + 1;
            } else { 
                maxColumnLength = (btnNumber)/numColumns;
        }

        //create array of images based on imagebase and url
        var imgArray=[];
        var normalArray=[];
            if(data.imagebase != ""){
                //data.color.length = 0;
                for(var i = 0; i< btnNumber; i++){
                imgArray.push(data.url + data.imagebase + '_00' + (i+1) + ".png");
            }
        }

        if(data.normals){
            for(var i = 0; i< btnNumber; i++){
                normalArray.push(data.url + data.imagebase + "_normal" + '_00' + (i+1) + ".png");
        }
    }
        

        //create the buttons out of A-PLANE
        for(var i = 0; i< btnNumber; i++){
            (function(){
            var plane = document.createElement('a-image');
            plane.setAttribute('class', data.class);
            plane.setAttribute('id', data.class + "_" + i);
            if(data.color[i] && !imgArray[i]){plane.setAttribute('color', data.color[i]);}
            if(imgArray[i]){plane.setAttribute('src',imgArray[i]);}
            if(normalArray[i]){
                var settings = 'shader: standard; normalMap: '
                plane.setAttribute('material', settings + normalArray[i])}
            plane.setAttribute("position", posX + " " + posY + " 0");
            el.appendChild(plane);
            }());
            posY -= (data.btnHeight + data.spacing);
            if (posY <= -((data.btnHeight + data.spacing) * (maxColumnLength)) ){
                posY = 0;
                posX += (data.btnWidth + data.spacing);
            }   
        }

        //Add event listeners
        var thisClass = data.class;
        var btns = document.querySelectorAll("." + thisClass);
        for(var i = 0; i< btns.length; i++){
            (function() {
                var btn = btns[i];
                btn.addEventListener('mouseenter', function () {btn.setAttribute('scale', "1.2 1.2 1.2");}, false);
                  btn.addEventListener('mouseleave', function () {btn.setAttribute('scale', "1 1 1");}, false);
            }());  
        }   
    }

});
