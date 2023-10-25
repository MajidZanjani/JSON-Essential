// Schema for weather data
// prettier-ignore
var weatherSchema = {
    "$schema": "https://json-schema.org/draft-07/schema",
    "$id": "http://explorecalifornia.com/schemas/weather.json",
    "title": "Root Schema",
    "description": "The root schema is the schema that comprises the entire JSON document.",
    "type": "array",
    "default": [],
    "items": {
        "title": "A Schema",
        "description": "An explanation about the purpose of this instance.",
        "type": "object",
        "default": {},
        "required": [
            "id",
            "name",
            "name_ascii",
            "lat",
            "lng",
            "population",
            "country_id",
            "province",
            "country_name",
            "unit",
            "season",
            "forecast"
        ],
        "properties": {
            "id": {
                "title": "The id Schema",
                "description": "An explanation about the purpose of this instance.",
                "type": "string",
                "default": ""
            },
            "name": {
                "title": "The name Schema",
                "description": "An explanation about the purpose of this instance.",
                "type": "string",
                "default": ""
            },
            "name_ascii": {
                "title": "The name_ascii Schema",
                "description": "An explanation about the purpose of this instance.",
                "type": "string",
                "default": ""
            },
            "lat": {
                "title": "The lat Schema",
                "description": "An explanation about the purpose of this instance.",
                "type": "string",
                "default": ""
            },
            "lng": {
                "title": "The lng Schema",
                "description": "An explanation about the purpose of this instance.",
                "type": "string",
                "default": ""
            },
            "population": {
                "title": "The population Schema",
                "description": "An explanation about the purpose of this instance.",
                "type": "string",
                "default": ""
            },
            "country_id": {
                "title": "The country_id Schema",
                "description": "An explanation about the purpose of this instance.",
                "type": "string",
                "default": ""
            },
            "province": {
                "title": "The province Schema",
                "description": "An explanation about the purpose of this instance.",
                "type": "string",
                "default": ""
            },
            "country_name": {
                "title": "The country_name Schema",
                "description": "An explanation about the purpose of this instance.",
                "type": "string",
                "default": ""
            },
            "unit": {
                "title": "The unit Schema",
                "description": "An explanation about the purpose of this instance.",
                "type": "string",
                "default": ""
            },
            "season": {
                "title": "The season Schema",
                "description": "An explanation about the purpose of this instance.",
                "type": "string",
                "default": ""
            },
            "forecast": {
                "title": "The forecast Schema",
                "description": "An explanation about the purpose of this instance.",
                "type": "array",
                "default": [],
                "items": {
                    "title": "A Schema",
                    "description": "An explanation about the purpose of this instance.",
                    "type": "object",
                    "required": [
                        "date",
                        "temp_min",
                        "temp_max",
                        "season_min",
                        "season_max",
                        "condition_name",
                        "condition_desc",
                        "condition_video",
                        "condition_icon"
                    ],
                    "properties": {
                        "date": {
                            "title": "The date Schema",
                            "description": "An explanation about the purpose of this instance.",
                            "type": "string"
                        },
                        "temp_min": {
                            "title": "The temp_min Schema",
                            "description": "An explanation about the purpose of this instance.",
                            "type": "number"
                        },
                        "temp_max": {
                            "title": "The temp_max Schema",
                            "description": "An explanation about the purpose of this instance.",
                            "type": [
                                "number",
                                "integer"
                            ]
                        },
                        "season_min": {
                            "title": "The season_min Schema",
                            "description": "An explanation about the purpose of this instance.",
                            "type": "number"
                        },
                        "season_max": {
                            "title": "The season_max Schema",
                            "description": "An explanation about the purpose of this instance.",
                            "type": "number"
                        },
                        "condition_name": {
                            "title": "The condition_name Schema",
                            "description": "An explanation about the purpose of this instance.",
                            "type": "string"
                        },
                        "condition_desc": {
                            "title": "The condition_desc Schema",
                            "description": "An explanation about the purpose of this instance.",
                            "type": "string"
                        },
                        "condition_video": {
                            "title": "The condition_video Schema",
                            "description": "An explanation about the purpose of this instance.",
                            "type": "string"
                        },
                        "condition_icon": {
                            "title": "The condition_icon Schema",
                            "description": "An explanation about the purpose of this instance.",
                            "type": "string"
                        }
                    }
                }
            }
        }
    }
};
