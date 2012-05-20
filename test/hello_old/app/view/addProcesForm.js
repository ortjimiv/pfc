/*
 * File: app/view/addProcesForm.js
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

Ext.define('PFC.view.addProcesForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.addprocesform',

    config: {
        itemId: 'addProcesForm',
        layout: {
            pack: 'center',
            type: 'vbox'
        },
        items: [
            {
                xtype: 'fieldset',
                title: 'Afegir un nou procés',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Nom',
                        name: 'nom',
                        required: true
                    },
                    {
                        xtype: 'textareafield',
                        label: 'Descripció',
                        name: 'descripcio'
                    }
                ]
            },
            {
                xtype: 'button',
                itemId: 'submit',
                ui: 'confirm-round',
                text: 'Crea'
            }
        ],
        listeners: [
            {
                fn: 'onSubmitTap',
                event: 'tap',
                delegate: '#submit'
            }
        ]
    },

    onSubmitTap: function(button, e, options) {
        var form = button.up('addprocesform'),
        mainPanel = form.up('#mainPanel'),
        store = mainPanel.down('#procesosList').getStore(),
        //ts = new Date(),
        procesRecord = form.getValues();

        // Add additional data
        //procesRecord.username = PFC.username;
        //proces.timestamp = ts;

        // Send message to the queue - no relation to the store
        /*Ext.io.send('queue/proces', { 
        'type': 'newproces',
        'storeid': 'procesDB',
        //'username': procesRecord.username,
        'nom': procesRecord.nom,
        'descripcio': procesRecord.descripcio
        //'timestamp': Ext.Date.format(ts, 'Y-m-d g.i')
    });
    */

    //Store to local storage and sync to remote syncstorage
    store.add(procesRecord);
    //----store.sync();

    //Confirmation
    //alert ("Procés afegit satisfactoriament");
    form.reset();
    Ext.getCmp('procesosList').deselectAll();
    //mainPanel.pop();

    Ext.getCmp('mainPanel').animateTo('right');
    Ext.getCmp('listPanel').setHidden(false);
    Ext.getCmp('usuariPanel').setHidden(false);
    Ext.getCmp('torna').setHidden(true);
    Ext.getCmp('loggedInUserName').setTitle("Processos de treball");

    Ext.getCmp('finestra').removeAt(2);



    //mainPanel.setActiveItem(0);

    /*
    Ext.Msg.alert(null, "Procés afegit satisfactoriament", function() {
    //Back to list
    form.reset();
    mainPanel.setActiveItem(0);
        });
        */
    }

});