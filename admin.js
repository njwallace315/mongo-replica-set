
admin = db.getSiblingDB("admin")
admin.createUser(
    {
        user: "<admin username>",
        pwd: "<admin pass>",
        roles: [{ role: "userAdminAnyDatabase", db: "admin" }]
    }
)

db.getSiblingDB("admin").auth("<admin username>", "<admin pass>")

db.getSiblingDB("admin").createUser(
    {
        "user": "<replica admin username>",
        "pwd": "<replica admin pass>",
        roles: [{ "role": "clusterAdmin", "db": "admin" }]
    }
)

admin.grantRolesToUser("cristian", ["root", { role: "root", db: "admin" }])