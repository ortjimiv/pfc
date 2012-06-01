/*
 * File: app/view/mainPanel.js
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

Ext.define('PFC.view.mainPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.mainpanel',
    requires: [
        'PFC.view.usuariPanel',
        'PFC.view.ListPanel'
    ],

    config: {
        id: 'mainPanel',
        layout: {
            type: 'hbox'
        },
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                height: 40,
                id: 'loggedInUserName',
                itemId: 'loggedInUserName',
                style: 'font-size:8px;',
                scrollable: false,
                title: 'Processos de treball',
                items: [
                    {
                        xtype: 'button',
                        hidden: true,
                        id: 'torna',
                        itemId: 'torna',
                        style: 'font-size:16px;',
                        ui: 'back',
                        text: 'Torna'
                    },
                    {
                        xtype: 'button',
                        docked: 'right',
                        height: 20,
                        id: 'logout',
                        itemId: 'logout',
                        style: 'font-size:16px;',
                        ui: 'action',
                        iconMask: true,
                        text: 'Sortir'
                    }
                ]
            },
            {
                xtype: 'container',
                id: 'finestra',
                width: '100%',
                layout: {
                    type: 'fit'
                },
                items: [
                    {
                        xtype: 'usuaripanel',
                        docked: 'top',
                        height: 175,
                        itemId: 'usuariPanel'
                    },
                    {
                        xtype: 'listpanel',
                        itemId: 'listPanel',
                        width: '100%'
                    }
                ]
            }
        ]
    },

    animateTo: function(dir) {
        Ext.getCmp('viewport').getLayout().setAnimation({
            duration: 1000,
            easing: 'ease-in-out',
            type: 'slide',
            direction: dir
        });
    }

});