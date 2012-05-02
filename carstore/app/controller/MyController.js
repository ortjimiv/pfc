/*
 * File: app/controller/MyController.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('carStore.controller.MyController', {
    extend: 'Ext.app.Controller',

    refs: [
        {
            ref: 'CarListings',
            selector: '#carListings'
        }
    ],

    onGridpanelSelectionChange: function(tablepanel, selections, options) {
        this.getCarListings().down('#detail').update(selections[0].data);
        this.getCarListings().down('#myChart').store.loadData(selections[0].data.quality);
    },

    init: function() {
        this.control({
            "#grid": {
                selectionchange: this.onGridpanelSelectionChange
            }
        });

    }

});
