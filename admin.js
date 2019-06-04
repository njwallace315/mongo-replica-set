
admin = db.getSiblingDB("admin")
admin.createUser(
    {
        user: "<admin usern>",
        pwd: "<admin pass>",
        roles: [{ role: "userAdminAnyDatabase", db: "admin" }]
    }
)

db.getSiblingDB("admin").auth("<admin usern>", "<admin pass>")

db.getSiblingDB("admin").createUser(
    {
        "user": "<replica admin usern>",
        "pwd": "<replica admin pass>",
        roles: [{ "role": "clusterAdmin", "db": "admin" }]
    }
)

admin.grantRolesToUser("<admin usern>", ["root", { role: "root", db: "admin" }])