AFRAME.registerComponent('add-button-caller', {
    schema: {},

    init: function () {

        var addBtn = document.createElement('a-plane');
        addBtn.setAttribute('id','addBtn');
        addBtn.setAttribute('src','#addGeoBtn');
        addBtn.setAttribute('transparent','true');
        addBtn.setAttribute('alphaTest','0.20');

        if(objectCount == 0){

            addBtn.setAttribute('position','0 1 -5');
            var btnText = document.createElement('a-text');
            btnText.setAttribute('id', 'btnText');
            btnText.setAttribute('position', '0 -0.6 0');
            btnText.setAttribute('align', 'center');
            btnText.setAttribute('color', '#2b2b2b');
            addBtn.appendChild(btnText);

            if(tutWelcome){
                btnText.setAttribute('value','click to start');
                addBtn.setAttribute('start', {});
            } else {
                btnText.setAttribute('value','click to add object');
                addBtn.setAttribute('geometry-button-caller', {});
            }

            this.el.appendChild(addBtn);

            addBtn.addEventListener('mouseenter', selected);
            addBtn.addEventListener('mouseleave', unselected);

        } else {

            addBtn.setAttribute('position','-0.6 1 -5');
            addBtn.setAttribute('geometry-button-caller', {});
            this.el.appendChild(addBtn);
         
            var doneBtn = document.createElement('a-plane');
            doneBtn.setAttribute('id','doneButton');
            doneBtn.setAttribute('src','#doneBtn');
            doneBtn.setAttribute('transparent','true');
            doneBtn.setAttribute('alphaTest','0.20');
            doneBtn.setAttribute('position','0.6 1 -5');
            
            this.el.appendChild(doneBtn);


            addBtn.addEventListener('mouseenter', selected);
            addBtn.addEventListener('mouseleave', unselected);
            doneBtn.addEventListener('mouseenter', selected);
            doneBtn.addEventListener('mouseleave', unselected);
            doneBtn.addEventListener('click', doneClick);

        }

        function selected(){
            this.setAttribute('scale', '1.2 1.2 1.2');
        }

        function unselected(){
            this.setAttribute('scale', '1 1 1');
        }

        function doneClick(){
            doneBtn.setAttribute('done-button',{});
        }

    },
    
    remove: function(){
        var addBtn = document.querySelector('#addBtn');
        addBtn.removeAttribute('start');
        addBtn.removeAttribute('geometry-button-caller');
        this.el.removeChild(addBtn);

        var btnText = document.querySelector('#btnText');

        if(btnText){
            this.el.removeChild(btnText);
        }

        var doneButton = document.querySelector('#doneButton');

        if(doneButton){
            doneButton.removeAttribute('done-button');
            this.el.removeChild(doneButton);
        }
        

    }

});


                    