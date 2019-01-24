# Schooldigger API

## Objectif

Projet réalisé dans le cadre d'un test technique selon les consignes suivantes:

``` md
Exploiter les données de cette API
https://any-api.com/schooldigger_com/schooldigger_com/docs/_v1_schools/Schools_GetAllSchools

Coté fonctionnalités, voici ce que tu peux réaliser :

Un formulaire qui permet de chercher par state (eg CA) et par nom d'école
Au submit, tu affiches la liste de résultat avec :

- Nombre de résultats
- Pour chaque résultat : Nom de l'école, nombre d'étudiants, adresse complète

Si tu as encore de l'énergie, propose un mode affichage sur une carte type mapbox.
```

App ID
    b2a9d0fa
Key
    3edaee6223c4579c7e7ff488d887c68c

## Stack

- Framework: **react**
- Style: **SASS**
- Requêtes: **axios**
- Affichage sur la map: **API Google Maps**

## Installation

1. __Télécharger le projet sur Github__ en téléchargeant l'archive ou avec la commande `git clone`
1. __Installer les dépendances__ avec `npm install` ou `yarn install`
1. __Créer le fichier *AppLogs.js*__ qui est obligatoire: contient vos identifiants de connexion à l'API, nécessaires à l'utilisation de cette dernière
    ``` javascript
    // localisation: /src/AppLogs.js
    const appId = /* L'id fourni par le service */;
    const appKey = /* La clé associée à l'id */;
    const AppLogs = {
      id: appId,
      key: appKey
    }

    export default AppLogs;
    ```
1. __*Enjoy*__ (après un `npm start` ou un `yarn start` bien sûr)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).