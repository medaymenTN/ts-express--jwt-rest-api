define({ "api": [
  {
    "type": "post",
    "url": "/api/register",
    "title": "Register user",
    "name": "RegisterUser",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/userController.ts",
    "groupTitle": "User"
  }
] });
