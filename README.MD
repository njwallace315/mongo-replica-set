0. Ensure you have docker, docker-machine, and virtualbox intalled wherever you are attempting to run this.
1. run
    ```sh
    docker-machine create -d virtualbox manager1
    docker-machine create -d virtualbox worker1
    docker-machine create -d virtualbox worker2
    ```
2. After cloning the repo, create a file called "_admin.js" and copy the contents of admin.js into it. 
3. replace the usernames and passwords with the desired secrets
4. create a file and name it "env" and populate it with the following values. Assign them with the secrets placed in _admin.js.
    ```js
    MONGO_USER_ADMIN=<admin usern>
    MONGO_PASS_ADMIN=<admin pass>
    MONGO_REPLICA_ADMIN=<replica admin usern>
    MONGO_PASS_REPLICA=<replica admin pass>
    ```
5. run 
    ```sh 
    bash < create-replica-set.sh
    ```

This should create your replica sets. The server IP to put in your connection string can be found with 
    ```sh
    docker-machine ls
    ```
and will initially be the IP of manager1 unless a new master is elected. 
