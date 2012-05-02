/*
 * File: app/store/Venues.js
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

Ext.define('Pouzza.store.Venues', {
    extend: 'Ext.data.Store',
    alias: 'store.Venues',
    requires: [
        'Pouzza.model.Venue'
    ],

    config: {
        autoLoad: true,
        model: 'Pouzza.model.Venue',
        storeId: 'Venues',
        proxy: {
            type: 'ajax',
            url: 'resources/venues.json',
            reader: {
                type: 'json'
            }
        }
    }
});