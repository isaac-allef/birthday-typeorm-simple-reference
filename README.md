# User
This project is a simple reference for configuring the use of typescript

## Technologies

This project was developed with the following technologies:
-  [NodeJS](https://nodejs.org/en/)
-  [Typescript](https://www.typescriptlang.org/)
-  [Typeorm](https://typeorm.io/#/)
-  [Postgres](https://www.postgresql.org/)
-  [VS Code][vc]

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v12.20.0][nodejs] or higher + [Yarn 1.22.5][yarn] or higher installed on your computer. From your command line:

```bash
# Create postgres docker
$ sudo docker run --name user-postgres -e POSTGRES_PASSWORD=123 -p 5434:5432 -d postgres

# Create 'users' database
$ CREATE DATABASE users;

# Clone this repository
$ git clone https://github.com/isaac-allef/user

# Go into the repository
$ cd user

# Install dependencies
$ yarn install

# Run migrations
$ yarn typeorm migration:run

# Run it
$ yarn dev:server
```

## License
This project is under the MIT license. See the [LICENSE](LICENSE) for more information.

---

Made with ♥ by Isaac Allef :wave:

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
