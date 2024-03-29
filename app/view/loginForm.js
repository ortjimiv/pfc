/*
 * File: app/view/loginForm.js
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

Ext.define('PFC.view.loginForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.loginform',

    config: {
        padding: 15,
        style: 'background-color:#FFEFD5;',
        ui: '',
        layout: {
            pack: 'center',
            type: 'vbox'
        },
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                style: '',
                scrollable: false,
                title: 'Processos de treball'
            },
            {
                xtype: 'label',
                html: '<center><h2>Gestió dels processos de treball</h2></center><br/>',
                itemId: 'etiqueta0'
            },
            {
                xtype: 'label',
                itemId: 'etiqueta1'
            },
            {
                xtype: 'fieldset',
                title: 'Dades de registre:',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Usuari:',
                        name: 'username',
                        required: true,
                        placeHolder: 'Nom d\'usuari'
                    },
                    {
                        xtype: 'passwordfield',
                        label: 'Clau:',
                        name: 'password',
                        required: true,
                        placeHolder: 'Clau d\'usuari'
                    }
                ]
            },
            {
                xtype: 'label',
                html: '<br/><hr/><center>Benvingut</center><br/>',
                itemId: 'etiqueta2'
            },
            {
                xtype: 'button',
                itemId: 'login',
                ui: 'forward',
                iconCls: 'action',
                iconMask: true,
                text: 'Accedir'
            }
        ],
        listeners: [
            {
                fn: 'onLoginTap',
                event: 'tap',
                delegate: '#login'
            }
        ]
    },

    onLoginTap: function(button, e, options) {
        button.up('formpanel').down('#etiqueta1').setHtml("");
        var top = button.up('viewport');
        var msgError ="<DIV style='color:red;font-size:12px;'>Necessita omplenar les dades de usuari.<br/>Els usuaris disponibles son ivan, usuari, admin i edit.</div>";

        //desem l'usuari que ha accedit
        PFC.username = button.up('formpanel').getValues().username;
        PFC.titol = "Processos de treball";

        button.up('formpanel').reset();

        if (PFC.username!==""){
            button.up('formpanel').down('#etiqueta1').setHtml("");
            var x = Ext.getStore('usuariJson').findRecord("username",PFC.username,0,false,false,true);
            if (x!==null){
                //top.down('#loggedInUserName').setHtml(PFC.username);
                top.down('#logout').setText("Sortir "+PFC.username);
                //Desem el tipus d'usuari que estem treballant
                PFC.tipus= x.get('tipus');

                Ext.getStore('procesJson').clearFilter();
                Ext.getStore('etiquetaJson').clearFilter();
                Ext.getStore('etiquetaTipusJson').clearFilter();

                if (PFC.tipus===0) {
                    top.down('#barraEditor').setHidden(true);
                    //top.down('#barraInstruccio').setHidden(true);
                }else{
                    top.down('#barraEditor').setHidden(false);
                    //top.down('#barraInstruccio').setHidden(false);
                }

                top.setActiveItem(1);

            }else{
                Ext.Msg.alert('Usuari incorrecte', msgError, Ext.emptyFn);
                button.up('formpanel').down('#etiqueta1').setHtml(msgError);
            }
        }else{
            Ext.Msg.alert('Usuari incorrecte', msgError, Ext.emptyFn);
            button.up('formpanel').down('#etiqueta1').setHtml(msgError);
        }

    }

});