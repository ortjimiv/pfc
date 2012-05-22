/*
 * File: app/view/usuariPanel.js
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

Ext.define('PFC.view.usuariPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.usuaripanel',

    config: {
        items: [
            {
                xtype: 'container',
                title: 'Processos',
                items: [
                    {
                        xtype: 'container',
                        itemId: 'filtre',
                        layout: {
                            type: 'hbox'
                        },
                        items: [
                            {
                                xtype: 'carousel',
                                scrollable: false
                            },
                            {
                                xtype: 'carousel'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        itemId: 'processos',
                        ui: '',
                        layout: {
                            type: 'hbox'
                        },
                        items: [
                            {
                                xtype: 'list',
                                layout: {
                                    type: 'fit'
                                },
                                itemTpl: [
                                    '<div>{nom}</div>'
                                ],
                                store: 'procesJson'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                title: 'Cerca'
            },
            {
                xtype: 'container',
                title: 'Filtre'
            }
        ]
    }

});