# Get Started

Habitat uses Docker containers and it is recommended to use the Docker Compose instructions here to create an instance.
If you have a fresh server without Docker Compose installed, you could use the Linux Server Provisioning instructions
instead to configure the server to install Docker Compose and Habitat using Ansible.

## Docker Compose

::: info
This method of installation requires you to run Docker Compose directly from your server.

[Find out more about Docker Compose](https://docs.docker.com/compose/)
:::

1. Create a `docker-compose.yml` file and add the following contents:
  ```yaml
  services:
    habitat-app:
      container_name: habitat
      image: carlnewton/habitat:latest
      restart: unless-stopped
      environment:
        SERVER_NAME: https://${DOMAIN}
        APP_SECRET: ${APP_SECRET}
        ENCRYPTION_KEY: ${ENCRYPTION_KEY}
        DATABASE_URL: postgresql://${POSTGRES_USER:-app}:${POSTGRES_PASSWORD:-!ChangeMe!}@habitat-database:5432/${POSTGRES_DB:-app}?serverVersion=${POSTGRES_VERSION:-15}&charset=${POSTGRES_CHARSET:-utf8}
      volumes:
        - caddy_data:/data
        - caddy_config:/config
        - habitat_uploads:/uploads
      ports:
        - 80:80
        - 443:443
      networks:
        habitat:
      security_opt:
        - no-new-privileges:true
  
    habitat-worker:
      image: carlnewton/habitat:latest
      restart: unless-stopped
      environment:
        RUN_MIGRATIONS: false
        SERVER_NAME: https://${DOMAIN}
        APP_SECRET: ${APP_SECRET}
        ENCRYPTION_KEY: ${ENCRYPTION_KEY}
        DATABASE_URL: postgresql://${POSTGRES_USER:-app}:${POSTGRES_PASSWORD:-!ChangeMe!}@habitat-database:5432/${POSTGRES_DB:-app}?serverVersion=${POSTGRES_VERSION:-15}&charset=${POSTGRES_CHARSET:-utf8}
      command: ['bin/console', 'messenger:consume', '-vv', '--time-limit=600', '--limit=10', '--memory-limit=128M']
      healthcheck:
        disable: true
      volumes:
        - habitat_uploads:/uploads
      depends_on:
        habitat-app:
          condition: service_healthy
      networks:
        habitat:
      security_opt:
        - no-new-privileges:true
  
    habitat-database:
      image: postgres:${POSTGRES_VERSION:-16}-alpine
      environment:
        POSTGRES_DB: ${POSTGRES_DB:-app}
        POSTGRES_PASSWORD: ${POSTGRES_PASSWORD:-!ChangeMe!}
        POSTGRES_USER: ${POSTGRES_USER:-app}
      healthcheck:
        test: ["CMD", "pg_isready", "-d", "${POSTGRES_DB:-app}", "-U", "${POSTGRES_USER:-app}"]
        timeout: 5s
        retries: 5
        start_period: 60s
      networks:
        habitat:
      volumes:
        - database_data:/var/lib/postgresql/data:rw
      security_opt:
        - no-new-privileges:true
  
  networks:
    habitat:
  
  volumes:
    caddy_data:
    caddy_config:
    habitat_uploads:
    database_data:
  ```
2. Create a `.env` file in the same directory containing the following:
  ```dotenv
  # The domain of your Habitat instance
  DOMAIN=example.com
  
  # The APP_SECRET should be a 32 character string of characters, numbers and symbols. It should be unique to your Habitat
  # instance, and should be kept secret. It is also good practice to change this ahead of running composer pull.
  # See https://symfony.com/doc/current/reference/configuration/framework.html#secret
  APP_SECRET=!YouMustChangeThisAppSecret!
  
  # The ENCRYPTION_KEY should be a 32 character string of characters, numbers and symbols. It should be unique to your
  # Habitat instance, and should be kept secret. This should never be changed.
  ENCRYPTION_KEY=!YouMustChangeThisEncryptionKey!
  
  POSTGRES_USER=!YouMustChangeThisPostgresUser!
  POSTGRES_PASSWORD=!YouMustChangeThisPostgresPassword!
  POSTGRES_DB=habitat
  ```
3. Modify the `.env` file as described.
4. Start the Habitat containers:
  ```shellscript
  docker compose up -d
  ```
5. Load the homepage of your new Habitat and follow the instructions.

## Linux Server Provisioning

::: info
This method of installation requires you to run an Ansible Playbook from a host with SSH access to your server.

[Find out more about Ansible](https://docs.ansible.com/projects/ansible/latest/index.html)
:::

1. Clone the Habitat repository:
  ```shellscript
  git clone git@github.com:carlnewton/habitat.git
  ```
2. Navigate to the `habitat/ansible` directory
3. Copy the `.env.template` file to a new `.env` file and amend its contents accordingly
4. Run the ansible playbook:
  ```shellscript
  ansible-playbook -i "domain-or-ip-address.example.com," -u example-user playbook.yaml --private-key=~/.ssh/example-key
  ```
5. Load the homepage of your new Habitat and follow the instructions.
