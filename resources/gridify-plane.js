AFRAME.registerComponent('gridify-plane', {
    schema: {
        class: {type:'string',default:"gridify-element"},
        height: {type:'number', default: 1},
        width: {type: 'number', default: 1},
        rows: {type: 'int', default: 2},
        columns: {type: 'int', default: 2},
        skiprows: {type:'array', default:[]},
        skipcolomns: {type:'array', default:[]},
        offset:{type: 'array', default:[0,0,0]},
        color:{type: 'string'},
        src:{type:'string'} 
    },

    init: function () {
        
        var el = this.el;
        var data = this.data;
    
        var xpos = -(data.rows * data.width/2);
        var zpos = 0;
        
        for (var i = -(data.rows/2); i < data.rows/2; i++){
            if (data.skiprows.includes(i.toString())){
                xpos = xpos+data.width + parseFloat(data.offset[0]);
            } else {
            var ypos = -(data.columns * data.height/2);
            var planeX = document.createElement("a-plane");
            planeX.setAttribute("width", data.width);
            planeX.setAttribute("height", data.height);
            planeX.setAttribute("position", xpos + " " + ypos + " " + zpos);
            planeX.setAttribute("class", data.class);
            if(data.color){planeX.setAttribute("color", data.color);}
            if(data.src){planeX.setAttribute("src", data.src);}
           
            el.appendChild(planeX); 
            for (var j = -(data.columns/2); j < data.columns/2; j++){
                ypos = ypos+data.height + parseFloat(data.offset[1]);
                var planeY = document.createElement("a-plane");
                planeY.setAttribute("width", data.width);
                planeY.setAttribute("height", data.height);
                planeY.setAttribute("position", xpos + " " + ypos + " " + zpos);
                planeY.setAttribute("class", data.class);
                if(data.color){planeY.setAttribute("color", data.color);}
                if(data.src){planeY.setAttribute("src", data.src);}
                el.appendChild(planeY); 
            }
            xpos = xpos+data.width + parseFloat(data.offset[0]);
            
        }
        }
        
    },

    remove: function(){
        var el = this.el;
        while (el.firstChild) {
            el.removeChild(el.firstChild);
        }
    }

});