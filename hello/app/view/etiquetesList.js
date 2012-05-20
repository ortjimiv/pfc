/*
 * File: app/view/etiquetesList.js
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

Ext.define('PFC.view.etiquetesList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.etiqueteslist',

    config: {
        id: 'etiquetesList',
        style: '',
        ui: '',
        layout: {
            align: 'center',
            type: 'hbox'
        },
        scrollable: 'horizontal',
        store: 'etiquetaTipusJson',
        allowDeselect: true,
        disableSelection: false,
        onItemDisclosure: false,
        inline: {
            wrap: false
        },
        itemTpl: [
            '<div style="background-color:#FE642E;height:40px;border:1px solid;',
            'border-radius:25px;',
            '-moz-border-radius:15px;box-shadow: 5px 5px 5px #888888;padding:10px;">',
            '{nom}',
            '</div>'
        ]
    }

});