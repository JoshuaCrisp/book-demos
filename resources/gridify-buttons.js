/* This component creates grids of buttons out of a-planes. They can have a color or an image texture
and/or normal maps. Any event listeners for the buttons (other than the default mouseenter and mouseleave listeners
used for animation purposes) must be defined by other components after the grid is created. It is used in the "init"
functions of "geometry-button-caller", material-button-caller", and "manipulation-button-caller, where it is added
as an attribute of an entity created in those functions */

AFRAME.registerComponent('gridify-buttons', {
    schema: {
        class: {type:'string',default:"gridify-button"}, //default class name for the created button set
        btnCount: {type:'number', default: 4},          // How many buttons will be in the grid
        btnWidth: {type: 'number', default: 1},         // The width of the buttons
        btnHeight: {type: 'number', default: 1},        //The height of the buttons
        columns: {type:'number', default: 2},           // How many columns the buttons are spaced into
        color: {type: 'array', default:[]},             // Array of colors for coloring the buttons(optional)
        url: {type: 'string'},                          // Relative link to the folder containing button images
        normals:{type:'boolean', default: false},       //Whether the button uses images as normal maps
        imagebase: {type: 'string'},                    // The root name of the images used for textures ( must be saved as name_01, name_02, etc., and must be .png files)
        spacing: {type: 'number', default: 0.05}        // The space between buttons
    },

    init: function () {
        
        var el = this.el;

        var data = this.data;
        var numColumns = data.columns;
        var btnNumber = data.btnCount;
        var modolo = btnNumber % numColumns;
        var posX = -((data.btnWidth* data.columns) + (data.spacing * (numColumns - 1))/2);
        var posY = 0;
        

        // determine the maximum number of buttons in each column
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
        // If there are normal maps for the buttons, create array of images based on imagebase and url
        if(data.normals){
            for(var i = 0; i< btnNumber; i++){
                normalArray.push(data.url + data.imagebase + "_normal" + '_00' + (i+1) + ".png");
        }
    }
        

        //create the buttons out of A-PLANE
        for(var i = 0; i< btnNumber; i++){
            (function(){
            var plane = document.createElement('a-image');

            /* Make each plane an instance of the class determined in this.data.class, so thtat
            they can all be referenced by "querySelectorAll" if neccesary */

            plane.setAttribute('class', data.class);

            /* Give each plane a unique id based on it's class name */
            plane.setAttribute('id', data.class + "_" + i);

            /* If there is a color and no image for the button and no image to ovverride it,
            apply the color to the button */

            if(data.color[i] && !imgArray[i]){plane.setAttribute('color', data.color[i]);}

            // If there is an image in the imageArray for this button, apply it

            if(imgArray[i]){plane.setAttribute('src',imgArray[i]);}

            // If there is a normal map for this button, apply it

            if(normalArray[i]){
                var settings = 'shader: standard; normalMap: '
                plane.setAttribute('material', settings + normalArray[i])}

            /* Move the button into the appropriate position as detemined by the posX and
            posY variable */

            plane.setAttribute("position", posX + " " + posY + " 0");
            el.appendChild(plane);
            }());

            // Update the posX and posY variables for the next button
            posY -= (data.btnHeight + data.spacing);
            if (posY <= -((data.btnHeight + data.spacing) * (maxColumnLength)) ){
                posY = 0;
                posX += (data.btnWidth + data.spacing);
            }   
        }

        // Add event listeners for mouseenter and mouseleave that act as simple animations
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
