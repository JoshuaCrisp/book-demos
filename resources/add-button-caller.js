
/* This component handles the creation of (and listeners for) the button that the user first sees when
starting the site. It also creates the button when it is being used to create new meshes, and creates the
done button that is used to take the user to the explanation of the scene graph. It is attached to the
a-scene element in grid.html at startup. It is also added to a-scene later by the "getBtn" function of the
"jay-caller" component, and by either the "created" or "walkAway" functions of the "manipulation-button-caller"
component */

AFRAME.registerComponent('add-button-caller', {
    schema: {},

    init: function () {
        //Create the circle button with the plus sign inside it.

        var addBtn = document.createElement('a-plane');
        addBtn.setAttribute('id','addBtn');
        addBtn.setAttribute('src','#addGeoBtn');
        addBtn.setAttribute('transparent','true');
        addBtn.setAttribute('alphaTest','0.20');

        /* If the global variable "objectCount" is equal to 0, then the user has not created
        any meshes yet. Therefore, this must be either the very start of the site, or 
        right before the user is about to create his or her first mesh*/

        if(objectCount == 0){

            //For either scenerio, the button will need a label

            addBtn.setAttribute('position','0 1 -5');
            var btnText = document.createElement('a-text');
            btnText.setAttribute('id', 'btnText');
            btnText.setAttribute('position', '0 -0.6 0');
            btnText.setAttribute('align', 'center');
            btnText.setAttribute('color', '#2b2b2b');
            addBtn.appendChild(btnText);

            /* If the global variable "tutWelcome" is set to "true", then the welcome
            audio has not been played yet. Therefore the site has just loaded.
            Set the text to say "start", and add the start component to the button
            with the default schema values*/

            if(tutWelcome){
                btnText.setAttribute('value','click to start');
                addBtn.setAttribute('start', {});

            /* If the global variable "tutWelcome" is set to "false", the the welcome audio
            has been played. Therefore, this is where the user is beginning to create
            his or her first mesh. Set the text to say "click to add object", and add
            the "geometry-button-caller" component to the button with the default
            schema values*/
            
            } else {
                btnText.setAttribute('value','click to add object');
                addBtn.setAttribute('geometry-button-caller', {});
            }

            //Add the button to the scene

            this.el.appendChild(addBtn);

            // Give it listeners to set its scale on mouseover and mousleave

            addBtn.addEventListener('mouseenter', selected);
            addBtn.addEventListener('mouseleave', unselected);

        } else {

             /* If the global variable "objectCount" is greater than 0, then the user 
             has already created at least one mesh. They know what the add button is
             for by this point, so it doesn't need text. But the scene does need a
             done button so that they can end if they want and learn about the scene
             graph*/


            //The add button still needs the geometry-button-caller component
            addBtn.setAttribute('position','-0.6 1 -5');
            addBtn.setAttribute('geometry-button-caller', {});
            this.el.appendChild(addBtn);
         
            //Creating the done button
            var doneBtn = document.createElement('a-plane');
            doneBtn.setAttribute('id','doneButton');
            doneBtn.setAttribute('src','#doneBtn');
            doneBtn.setAttribute('transparent','true');
            doneBtn.setAttribute('alphaTest','0.20');
            doneBtn.setAttribute('position','0.6 1 -5');
            
            this.el.appendChild(doneBtn);

            //Give both buttons the mouseover and mousleave listeners
            addBtn.addEventListener('mouseenter', selected);
            addBtn.addEventListener('mouseleave', unselected);
            doneBtn.addEventListener('mouseenter', selected);
            doneBtn.addEventListener('mouseleave', unselected);
            doneBtn.addEventListener('click', doneClick);

        }
        //Selected and unselected  just modify scale. They serve as a type of animation
        function selected(){
            this.setAttribute('scale', '1.2 1.2 1.2');
        }

        function unselected(){
            this.setAttribute('scale', '1 1 1');
        }

        // When clicked, the done button gets the "done-button" component added to it.
        function doneClick(){
            doneBtn.setAttribute('done-button',{});
        }

    },
    
    remove: function(){

        //Delete the add button.
        var addBtn = document.querySelector('#addBtn');
        addBtn.removeAttribute('start');
        addBtn.removeAttribute('geometry-button-caller');
        this.el.removeChild(addBtn);

        var btnText = document.querySelector('#btnText');
        //If there is button text, delete it too.
        if(btnText){
            this.el.removeChild(btnText);
        }

        var doneButton = document.querySelector('#doneButton');
        //If there is a Done button, delete it too.
        if(doneButton){
            doneButton.removeAttribute('done-button');
            this.el.removeChild(doneButton);
        }
        

    }

});


                    