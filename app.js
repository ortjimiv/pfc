/*
 * File: app.js
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

Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Ext.device': 'device/'
    }
});

Ext.application({
    requires: [
        'Ext.device.Camera'
    ],

    models: [
        'procesModel',
        'usuari',
        'etiqueta',
        'tipusEtiqueta',
        'associat',
        'instruccio'
    ],
    stores: [
        'procesJson',
        'usuariJson',
        'etiquetaJson',
        'etiquetaTipusJson',
        'associatJson',
        'instruccioJson'
    ],
    views: [
        'usuariPanel',
        'loginForm',
        'addProcesForm',
        'ListPanel',
        'viewport',
        'mainPanel',
        'etiquetesList',
        'subetiquetesList',
        'detailPanel',
        'addInstruccioForm',
        'Picture'
    ],
    name: 'PFC',
    controllers: [
        'MyController'
    ],

    launch: function() {

        Ext.create('PFC.view.viewport', {fullscreen: true});
    }

});
