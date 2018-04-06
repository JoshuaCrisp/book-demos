/* This component simply creates grids of a-planes. It has been surpassed by the "gridify-buttons
component, and will soon be merged into one component. It has some functionality for skipping certain
rows or columns that is not used here, but may be useful later. It is used inside of grid.html to
create the floor.  */

AFRAME.registerComponent('gridify-plane', {
    schema: {
        class: {type:'string',default:"gridify-element"}, //default class name for the created button set
        height: {type:'number', default: 1},              // The height of each a-plane
        width: {type: 'number', default: 1},              // THe width of each a-plane
        rows: {type: 'int', default: 2},                  // How many rows to create
        columns: {type: 'int', default: 2},               // How many columsn to make
        skiprows: {type:'array', default:[]},             //Rows to skip over when creating a-planes
        skipcolomns: {type:'array', default:[]},          // Columsn to skip over when making a-planes
        offset:{type: 'array', default:[0,0,0]},          // The x, y, and z distance between the planes
        color:{type: 'string'},                           // What color the planes should be
        src:{type:'string'}                               // Relative link to the folder containing images for the planes, plus the basename
    },

    init: function () {
        
        var el = this.el;
        var data = this.data;
    
        // xpos is initialized as the leftmost point for creating a grid that is ceneterd on the x-axis

        var xpos = -(data.rows * data.width/2);

        var zpos = 0;
        
        // Start at the leftmost point and work across to the rightmost point
        for (var i = -(data.rows/2); i < data.rows/2; i++){

            //If this is a row that is supposed to be slkipped, adjust the position variables accordingly

            if (data.skiprows.includes(i.toString())){
                xpos = xpos+data.width + parseFloat(data.offset[0]);
            } else {

            // Otherwise, make the a-plane and add it to the scene

            var ypos = -(data.columns * data.height/2);
            var planeX = document.createElement("a-plane");
            planeX.setAttribute("width", data.width);
            planeX.setAttribute("height", data.height);
            planeX.setAttribute("position", xpos + " " + ypos + " " + zpos);
            planeX.setAttribute("class", data.class);
            if(data.color){planeX.setAttribute("color", data.color);}
            if(data.src){planeX.setAttribute("src", data.src);}
            el.appendChild(planeX); 

            /* Then fill out the rest of the column for that row using the same type of logic
            as was used to create the current plane */

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

            // Then update the position for the next row
            
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