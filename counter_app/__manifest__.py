{
    "name": "Counter App OWL",
    "version": "18.0.1.0.0",
    "summary": "Simple OWL Counter Dashboard",
    "category": "Tools",
    "author": "Afzal Khan",
    "license": "LGPL-3",
    "depends": ["web"],
    "data": [
        "views/counter_action.xml",
    ],
    "assets": {
        "web.assets_backend": [
            "counter_app/static/src/js/counter.js",
            "counter_app/static/src/xml/counter.xml",
        ],
    },
    "installable": True,
    "application": True,
}
