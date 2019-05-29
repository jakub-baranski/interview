const app = new Vue({
    el: '#app',
    data: {
        response: 'dsd',
    }

});


app.response = {
    "project_evaluation": [
        {
            "name": "accepted",
            "id": 58,
            "active": true
        },
        {
            "name": "refused",
            "id": 57,
            "active": false
        },
        {
            "name": "pending",
            "id": 57,
            "active": false
        }
    ],
    "role_category": [
        {
            "name": "Administrator",
            "active": true,
            "id": 45
        },
        {
            "name": "Developer",
            "active": true,
            "id": 44
        },
        {
            "name": "User",
            "active": false,
            "id": 43
        },
    ],
    "project_category": [
        {
            "name": "construction",
            "active": false,
            "id": 42
        },
        {
            "name": "it",
            "active": true,
            "id": 41
        },
        {
            "name": "business",
            "active": true,
            "id": 40
        },
    ],
    "issue_types": [
        {
            "name": "bug",
            "active": true,
            "id": 39
        },
        {
            "name": "feature",
            "active": true,
            "id": 38
        },
    ],
    "priority": [
        {
            "name": "low",
            "active": true,
            "id": 37
        },
        {
            "name": "high",
            "active": true,
            "id": 36
        },
        {
            "name": "crucial",
            "active": false,
            "id": 35
        },
    ]
};