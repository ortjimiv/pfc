/*
 * File: app/view/viewport.js
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

Ext.define('PFC.view.viewport', {
    extend: 'Ext.Panel',
    alias: 'widget.viewport',
    requires: [
        'PFC.view.LoginForm',
        'PFC.view.mainPanel'
    ],

    config: {
        layout: {
            animation: 'fade',
            type: 'card'
        },
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Processos de treball'
            },
            {
                xtype: 'loginform',
                itemId: 'loginForm'
            },
            {
                xtype: 'mainpanel',
                itemId: 'mainPanel'
            }
        ]
    }

});