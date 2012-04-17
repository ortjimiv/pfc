/*
 * File: app/controller/Business.js
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

Ext.define('MyApp.controller.Business', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            dataList: '#dataList',
            listCard: '#listCard',
            mainNav: 'mainnav',
            detailCard: '#detailCard'
        },

        control: {
            "#dataList": {
                itemtap: 'onListItemTap'
            }
        }
    },

    onListItemTap: function(dataview, index, target, record, e, options) {
        var me = this;

        if (record) {

            if (!me.details) {
                me.details = Ext.create('CityBars.view.DetailPanel', {
                    title: 'Details'
                });
            }

            // set the map
            var map = me.details.child('#detailMap');
            map.setMapOptions({
                zoom: 17
            });
            map.setMapCenter({
                latitude: record.get('latitude'),
                longitude: record.get('longitude')
            });

            // set the info
            var info = me.details.child('#contact').child('#info');
            info.child('#photo').setData(record.data);
            info.child('#data').setData(record.data);

            me.getMainNav().push(me.details);
        }
    },

    getLocation: function(callback) {
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                callback(position);
            }, function(error) {
                // give a warning for error
            });
        }
    },

    getBusinesses: function(location, callback) {
        // NOTE ABOUT YELP KEY
        // You must use your own yelp key, available by registering (for free) with Yelp:
        // http://www.yelp.com/developers/getting_started/api_overview
        // (in this app, we use the Review Search API v1.0)

        var store = Ext.data.StoreManager.lookup('BusinessStore'),
            url = 'http://api.yelp.com/business_review_search' +
            '?ywsid=rtGTuop7SdSQwCJwXr90Qw' +
            '&term=Bars' +
            '&lat=' + location.coords.latitude +
            '&long=' + location.coords.longitude;

        store.getProxy().setUrl(url);

        store.load(function() {
            callback(store);
        });
    }

});