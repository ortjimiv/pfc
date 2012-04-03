/*
 * File: app/view/DetailPanel.js
 *
 * This file was generated by Sencha Designer version 2.0.0.
 * http://www.sencha.com/products/designer/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Designer does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('CityBars.view.DetailPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.detailpanel',

    config: {
        items: [
            {
                xtype: 'container',
                cls: [
                    ''
                ],
                id: 'contact',
                title: 'Contacto',
                items: [
                    {
                        xtype: 'container',
                        id: 'info',
                        padding: 10,
                        tpl: [
                            '<img class="photo" src="{photo_url}" width="100" height="100"/>',
                            ' <h2>{name}</h2>',
                            ' <div class="info">',
                            ' {address1}<br/>',
                            ' <img src="{rating_img_url_small}"/>',
                            '</div>'
                        ],
                        layout: {
                            type: 'hbox'
                        },
                        items: [
                            {
                                xtype: 'component',
                                height: 100,
                                id: 'photo',
                                tpl: [
                                    '<img class="photo" src="{photo_url}" width="100" height="100" />'
                                ],
                                width: 100
                            },
                            {
                                xtype: 'component',
                                id: 'data',
                                padding: 10,
                                tpl: [
                                    ' <h2>{name}</h2>',
                                    ' <div class="info">',
                                    ' {address1}<br/>',
                                    ' <img src="{rating_img_url_small}"/>',
                                    '</div>'
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        layout: {
                            pack: 'center',
                            type: 'hbox'
                        },
                        items: [
                            {
                                xtype: 'button',
                                width: 100,
                                text: 'Llamar'
                            },
                            {
                                xtype: 'spacer',
                                cls: [
                                    ''
                                ],
                                width: 57
                            },
                            {
                                xtype: 'button',
                                width: 100,
                                text: 'Más'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'map',
                id: 'detailMap',
                title: 'Mapa'
            }
        ],
        tabBar: {
            docked: 'top',
            ui: 'light',
            layout: {
                align: 'center',
                pack: 'center',
                type: 'hbox'
            }
        }
    }

});