{
    "xdsVersion": "2.0.0",
    "frameworkVersion": "touch20",
    "internals": {
        "type": "container",
        "reference": {
            "name": "items",
            "type": "array"
        },
        "codeClass": null,
        "userConfig": {
            "height": 120,
            "html": null,
            "id": null,
            "minHeight": 100,
            "style": "overflow: hidden",
            "tpl": "<img src=\"{picture}\" width=\"160\" />",
            "ui": "",
            "layout": "vbox",
            "masked": null,
            "modal": null,
            "scrollable": null,
            "designer|userClassName": "Picture",
            "designer|userAlias": "contactpic",
            "overflow": "hidden",
            "container|align": "center"
        },
        "customConfigs": [
            {
                "group": "(Custom Properties)",
                "name": "overflow",
                "type": "string"
            }
        ],
        "expanded": true,
        "cn": [
            {
                "type": "component",
                "reference": {
                    "name": "items",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "html": "",
                    "style": null,
                    "designer|userClassName": "MyComponent2"
                },
                "customConfigs": [],
                "expanded": true
            },
            {
                "type": "button",
                "reference": {
                    "name": "items",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "bottom": 5,
                    "docked": null,
                    "id": null,
                    "itemId": "mybutton",
                    "right": 5,
                    "width": null,
                    "iconCls": "add",
                    "iconMask": true,
                    "text": null,
                    "designer|userClassName": "MyButton1"
                },
                "customConfigs": [],
                "expanded": true,
                "cn": [
                    {
                        "type": "basiceventbinding",
                        "reference": {
                            "name": "listeners",
                            "type": "array"
                        },
                        "codeClass": null,
                        "userConfig": {
                            "fn": "onMybuttonTap",
                            "implHandler": [
                                "Ext.device.Camera.capture({",
                                "    source: 'camera',",
                                "    destination: 'file',",
                                "",
                                "    success: function(url) {",
                                "        this.fireEvent('change', this, url);",
                                "    },",
                                "    failure: function() {",
                                "        Ext.Msg.alert('Error', 'There was an error when acquiring the picture.');",
                                "    },",
                                "    scope: this",
                                "});"
                            ],
                            "name": "tap",
                            "designer|userClassName": "onMybuttonTap"
                        },
                        "customConfigs": [],
                        "expanded": true
                    }
                ]
            }
        ]
    },
    "linkedNodes": {},
    "boundStores": {}
}