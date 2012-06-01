/*
 * File: app/view/addInstruccioForm.js
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

Ext.define('PFC.view.addInstruccioForm', {
    extend: 'Ext.form.Panel',

    config: {
        id: 'addInstruccioForm',
        itemId: 'addInstruccioForm',
        layout: {
            pack: 'center',
            type: 'vbox'
        },
        items: [
            {
                xtype: 'fieldset',
                title: 'Afegir instrucció',
                items: [
                    {
                        xtype: 'textfield',
                        disabled: true,
                        hidden: true,
                        id: 'proces_id',
                        label: 'Proces Id',
                        name: 'proces_id',
                        required: true,
                        readOnly: false
                    },
                    {
                        xtype: 'textareafield',
                        label: 'Descripció',
                        name: 'descripcio',
                        autoCorrect: true,
                        placeHolder: 'Introdueixi la descripció de la instrucció.'
                    }
                ]
            },
            {
                xtype: 'button',
                itemId: 'submit',
                ui: 'confirm-round',
                iconCls: 'add',
                iconMask: true,
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
        var form = Ext.getCmp('addInstruccioForm'),
        store = Ext.getCmp('instruccioList').getStore(),
        instruccioRecord = form.getValues();

        //Store to local storage and sync to remote syncstorage
        store.add(instruccioRecord);
        //store.sync();

        //Confirmation
        form.reset();
        Ext.getCmp('instruccioList').deselectAll();

        Ext.getCmp('mainPanel').animateTo('right');

        PFC.titol=PFC.titolAux;

        Ext.getCmp('detailPanel').setHidden(false);

        Ext.getCmp('finestra').remove(form,true);

        Ext.getCmp('loggedInUserName').setTitle(PFC.titol);
    }

});