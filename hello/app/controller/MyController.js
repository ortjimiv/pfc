/*
 * File: app/controller/MyController.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('PFC.controller.MyController', {
    extend: 'Ext.app.Controller',
    config: {
        control: {
            "#procesosList": {
                itemtap: 'onListpanelTap'
            },
            "#nouProces": {
                tap: 'onNouprocesTap'
            },
            "#torna": {
                tap: 'onTornaTap'
            },
            "#logout": {
                tap: 'onLogoutTap'
            },
            "#etiquetesList": {
                itemtap: 'onEtiqueteslistTap'
            },
            "#subetiquetesList": {
                itemtap: 'onSubetiqueteslistTap'
            },
            "#usuariPanel": {
                activeitemchange: 'onUsuariPanellActiveItemChange'
            },
            "#cerca": {
                keyup: 'onSearchfieldKeyup'
            },
            "#filtre1": {
                change: 'onFiltre1Change'
            },
            "selectfield": {
                change: 'onFiltre2Change'
            }
        }
    },

    onListpanelTap: function(dataview, index, target, record, e, options) {
        PFC.titol=record.get('nom');
        //Auxiliar que ens servirà quan tornem de crear una nova instrucció
        PFC.titolAux=record.get('nom');

        Ext.getCmp('loggedInUserName').setTitle(PFC.titol);
        var detall = Ext.getCmp('detailPanel');
        Ext.getCmp('mainPanel').animateTo('left');
        Ext.getCmp('listPanel').setHidden(true);
        Ext.getCmp('usuariPanel').setHidden(true);
        Ext.getCmp('torna').setHidden(false);

        Ext.getStore('instruccioJson').filter('proces_id',record.get('id'));

        if (detall) {
            detall.setData(record.data);
            Ext.getCmp('finestra').setActiveItem(detall);
        } else {
            Ext.getCmp('finestra').setActiveItem({
                xclass: 'PFC.view.detailPanel'
            });
        }

        if (PFC.tipus===0) {
            Ext.getCmp('barraInstruccio').setHidden(true);
        }else{
            Ext.getCmp('barraInstruccio').setHidden(false);
        }

        Ext.getCmp('procesPanel').setData(record.data);
    },

    onNouprocesTap: function(button, e, options) {
        /*
        Ext.getCmp('mainPanel').push({
        xtype: 'addprocesform'
        });
        */
        var afegirProces = Ext.getCmp('addprocesform');
        Ext.getCmp('mainPanel').animateTo('left');
        Ext.getCmp('listPanel').setHidden(true);
        Ext.getCmp('usuariPanel').setHidden(true);
        Ext.getCmp('torna').setHidden(false);
        PFC.titol="Nou procés";
        Ext.getCmp('loggedInUserName').setTitle(PFC.titol);

        if (afegirProces) {
            Ext.getCmp('finestra').setActiveItem(afegirProces);
        } else {
            Ext.getCmp('finestra').setActiveItem({
                xclass: 'PFC.view.addProcesForm'
            });
        }
    },

    onTornaTap: function(button, e, options) {
        if (PFC.titol=="Nova instrucció"){
            PFC.titol=PFC.titolAux;

            Ext.getCmp('detailPanel').setHidden(false);

            Ext.getCmp('finestra').remove(Ext.getCmp('addInstruccioForm'),true);

        }else{
            PFC.titol="Processos de treball";
            Ext.getCmp('mainPanel').animateTo('right');
            Ext.getCmp('listPanel').setHidden(false);
            Ext.getCmp('usuariPanel').setHidden(false);
            Ext.getCmp('torna').setHidden(true);

            Ext.getCmp('finestra').removeAt(2);
            Ext.getStore('instruccioJson').clearFilter();

            PFC.titolAux="";
        }

        Ext.getCmp('loggedInUserName').setTitle(PFC.titol);

    },

    onLogoutTap: function(button, e, options) {
        PFC.titol="";
        Ext.getCmp('loggedInUserName').setTitle(PFC.titol);
        var top = Ext.getCmp('viewport');
        top.down('#loginForm').reset();
        top.down('#procesosList').deselectAll();
        top.setActiveItem(0);
    },

    onEtiqueteslistTap: function(dataview, index, target, record, e, options) {
        Ext.getCmp('subetiquetesList').deselectAll();
        Ext.getCmp('procesosList').deselectAll();

        //etiquetaId permet controlar si deseleccionem un element sense marcar un altre de la llista
        if (PFC.etiquetaId==record.get("id")){
            Ext.getStore('etiquetaJson').clearFilter();
            Ext.getStore('associatJson').clearFilter();
            Ext.getStore('procesJson').clearFilter();
            PFC.etiquetaId=-1;
        }else{
            Ext.getCmp('subetiquetesList').getStore().filter('etiquetaTipus_id',record.get("id"));

            //desem els id's de les etiquetes
            var j=[];
            for (i=0;i<Ext.getStore('etiquetaJson').getCount();i++){
                j[i]=Ext.getStore('etiquetaJson').getAt(i).get('id');
            }

            //cerquem aquelles etiquetes del tipus seleccionat
            Ext.getStore('associatJson').clearFilter();
            Ext.getStore('associatJson').filterBy(function(record) {
                return (j.indexOf(record.get('etiqueta_id'))!=-1);
            });

            //cerquem a la taula associat les etiquetes segons el filtre principal
            var k=[];
            for (i=0;i<Ext.getStore('associatJson').getCount();i++){
                k[i]=Ext.getStore('associatJson').getAt(i).get('proces_id');
            }

            //Ext.Msg.alert('ID\'s',k);

            //filtrem pels processos que compleixen el filtre
            Ext.getStore('procesJson').clearFilter();
            Ext.getStore('procesJson').filterBy(function(record) {
                return (k.indexOf(record.get('id'))!=-1);
            });

            PFC.etiquetaId=record.get("id");
        }
    },

    onSubetiqueteslistTap: function(dataview, index, target, record, e, options) {
        Ext.getCmp('procesosList').deselectAll();

        if (PFC.subetiquetaId==record.get("id")){
            //Ext.getStore('etiquetaJson').clearFilter();
            Ext.getStore('associatJson').clearFilter();
            Ext.getStore('procesJson').clearFilter();

            //desem els id's de les etiquetes
            var j=[];
            for (i=0;i<Ext.getStore('etiquetaJson').getCount();i++){
                j[i]=Ext.getStore('etiquetaJson').getAt(i).get('id');
            }


            PFC.subetiquetaId=-1;
        }else{
            var j=[];
            j[0]=record.get("id");

            PFC.subetiquetaId=record.get("id");
        }

        //cerquem aquelles etiquetes del tipus seleccionat
        Ext.getStore('associatJson').clearFilter();
        Ext.getStore('associatJson').filterBy(function(record) {
            return (j.indexOf(record.get('etiqueta_id'))!=-1);
        });

        //cerquem a la taula associat les etiquetes segons el filtre principal
        var k=[];
        for (i=0;i<Ext.getStore('associatJson').getCount();i++){
            k[i]=Ext.getStore('associatJson').getAt(i).get('proces_id');
        }

        //Ext.Msg.alert('ID\'s',k);

        //filtrem pels processos que compleixen el filtre
        Ext.getStore('procesJson').clearFilter();
        Ext.getStore('procesJson').filterBy(function(record) {
            return (k.indexOf(record.get('id'))!=-1);
        });
    },

    onUsuariPanellActiveItemChange: function(container, value, oldValue, options) {
        Ext.getStore('procesJson').clearFilter();

        var finestra=container.getActiveItem().getId().substr(-1);


        if (finestra==3){
            container.setHeight(175);
        }else if (finestra==4){
            container.setHeight(100);
        }else{
            container.setHeight(140);
        }

        //Ext.Msg.alert('Finestra',finestra + " tamany:" + container.getHeight() );
    },

    onSearchfieldKeyup: function(textfield, e, options) {
        Ext.getStore('procesJson').clearFilter();

        Ext.getStore('procesJson').filterBy(function(record) {
            return (record.get('nom').search(textfield.getValue())!=-1);
        });
    },

    onFiltre1Change: function(selectfield, newValue, oldValue, options) {
        //Ext.Msg.alert('ID\'s',selectfield.getValue());

        Ext.getCmp('subetiquetesList').deselectAll();
        Ext.getCmp('procesosList').deselectAll();

        Ext.getCmp('subetiquetesList').getStore().filter('etiquetaTipus_id',selectfield.getValue());

        //desem els id's de les etiquetes
        var j=[];
        for (i=0;i<Ext.getStore('etiquetaJson').getCount();i++){
            j[i]=Ext.getStore('etiquetaJson').getAt(i).get('id');
        }

        //cerquem aquelles etiquetes del tipus seleccionat
        Ext.getStore('associatJson').clearFilter();
        Ext.getStore('associatJson').filterBy(function(record) {
            return (j.indexOf(record.get('etiqueta_id'))!=-1);
        });

        //cerquem a la taula associat les etiquetes segons el filtre principal
        var k=[];
        for (i=0;i<Ext.getStore('associatJson').getCount();i++){
            k[i]=Ext.getStore('associatJson').getAt(i).get('proces_id');
        }


        //filtrem pels processos que compleixen el filtre
        Ext.getStore('procesJson').clearFilter();
        Ext.getStore('procesJson').filterBy(function(record) {
            return (k.indexOf(record.get('id'))!=-1);
        });
    },

    onFiltre2Change: function(selectfield, newValue, oldValue, options) {
        Ext.getCmp('procesosList').deselectAll();

        var j=[];
        j[0]=selectfield.getValue();

        //cerquem aquelles etiquetes del tipus seleccionat
        Ext.getStore('associatJson').clearFilter();
        Ext.getStore('associatJson').filterBy(function(record) {
            return (j.indexOf(record.get('etiqueta_id'))!=-1);
        });

        //cerquem a la taula associat les etiquetes segons el filtre principal
        var k=[];
        for (i=0;i<Ext.getStore('associatJson').getCount();i++){
            k[i]=Ext.getStore('associatJson').getAt(i).get('proces_id');
        }

        //Ext.Msg.alert('ID\'s',k);

        //filtrem pels processos que compleixen el filtre
        Ext.getStore('procesJson').clearFilter();
        Ext.getStore('procesJson').filterBy(function(record) {
            return (k.indexOf(record.get('id'))!=-1);
        });
    }

});