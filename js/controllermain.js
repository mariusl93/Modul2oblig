function goToScales() {
    model.app.currentPage = "scalessite";
    updateView();
};

function goToMain() {
    model.app.currentPage = "mainsite";
    updateView();
};

function deleteScale(scaleNum) {
    model.scales.splice(scaleNum, 1);
    updateView();
};

function addScale() {
    if(model.inputs.newScaleName == "" || model.inputs.newScaleTab  == "") {
        return;
    }
    else {model.scales.push({/*  id: 5, */ editing: false, scaleName: model.inputs.newScaleName, scaleTab: model.inputs.newScaleTab })
    updateView();}
    
};

function setEditing(value) {
    model.scales[value].editing === false ? model.scales[value].editing = true : model.scales[value].editing = false;
    updateView();
};

function editScale(index) {
    if(model.inputs.editingScaleName == "" || model.inputs.editingScaleTab  == "") {
        return;
    }
    else{model.scales[index].scaleName = model.inputs.editingScaleName;
    model.scales[index].scaleTab = model.inputs.editingScaleTab;
    model.scales[index].editing = false;
    updateView();
    model.inputs.editingScaleName = "";
    model.inputs.editingScaleTab  = "";
    }
};

function updateNewScaleName(value) {
    model.inputs.newScaleName = value;
    model.inputs.editingScaleName = value;
    
};

function updateNewScaleTab(value) {                                 
    model.inputs.newScaleTab = value;
    model.inputs.editingScaleTab = value;
    
}

/* function deleteScale(scaleNum) {
    model.scales.splice(scaleNum, 1);
    updateView();
};


function removeFromArray() {
    for(let i = 0; i < model.loggDisplayPage.diveLog.length; i++){
      let option = model.loggDisplayPage.diveLog[i];
      model.loggDisplayPage.diveLog.splice(option -1 , 1);
      updateView();
    }
  } */

/* function updateEditingScaleName(value) {
    model.inputs.editingScaleName = value;
} */

/* function updateEditingScaleTab(value) {
    model.inputs.editingScaleTab = value;
} */

/* <!-- En ferdig applikasjon med alt som er listet opp i de neste punktene. Du skal sende en epost til oblig@getacademy.no med b??de:
lenke til et GitHub-repository som inneholder koden som er laget
lenke til GitHub-pages, hvor applikasjonen skal kunne kj??res direkte
Applikasjonen skal ha minst to forskjellige sider
Applikasjonen skal v??re laget ved hjelp av model-view-controller
Modellen skal inneholde minst ??n liste med objekter - og minst ??n l??kke som g??r gjennom denne listen - Ferdig!!!!
Applikasjonen skal inneholde minst ett eksempel p?? hver av f??lgende ting:
vise fremdata fra modellen  - FERDIG!!!!
legge til data i modellen - FERDIG!!!!
endre data i modellen -  FINITIO!!
slette data i modellen - FERDIG!!!!
Det skal v??re minst fire unit tester av controller-funksjoner
minst to som viser at funksjonene gj??r som de skal med riktig input
minst to som viser at funksjonene takler ugyldig input p?? en god m??te --> */