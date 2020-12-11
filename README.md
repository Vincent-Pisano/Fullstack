# FullStack

#### Ce projet est le projet final du cours de **Programmation Web Avancé 420-335-AL**

___

## Commandes utilisées

#### Créer un nouveau Projet avec un router
> ng n **[nom_projet]** --routing

#### Installer les librairies nécessaires
> npm install **bootstrap** --save
> npm install **@fortawesome/fontawesome-free** --save
> npm install **jquery** --save 
> npm install **json-server** --save

> npm audit fix

#### commandes de générations
> **générer un composant**
> ng generate component components/**[nom_composant]**

> **générer un service**
> ng generate component components/**[nom_service]**

> **générer une classe**
> ng generate component components/**[nom_classe]**

#### changements des Paths dans Angular.json
    a)	"styles": [ 
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
                "node_modules/@fortawesome/fontawesome-free/css/all.css",
                "src/styles.css"
            ],
            "scripts": [
                "node_modules/jquery/dist/jquery.min.js",
                "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]

#### Lancement de l'application /!\ changer les ports par défaut /!\
> **lancer le projet**
> npm start

> **lancer les tests unitaires**
> npm test
> OU
> ng test

> **lancer les tests pour le clean code**
> ng lint

___

## Réflexion sur le projet final
## SCRUM :
### 1. Définir l'architecture /!\ architecture FRONT-END /!\
    DFD (Diagramme de Flux de données) : 
    
        ==> Un menu en barre de navigation
            * Bootstrap
            * Emmet
            * FontAwesome
            * Responsive
            
        ==> Un pied de page
        
        ==> Router Angular
### 2. Définir les options du menu

#### 1. Home
        ==> Présentation du projet
            * Liste des commandes
            * Résumé cheminement

#### 2. Tutoriel
        ==> Mini tutoriel Angular 10
            * description FUN des principes de Angular 10
            
        ==> Mini tutoriel Crud
            * description FUN des principes de CRUD
                ° GET
                ° POST
                ° PUT
                ° DELETE
                
        ==> Mini tutoriel des relations
            * relations entre objets
                ° composition
                ° Aggrégation
                ° Héritage
                ° dépendance
                ° Association
                ° ...

#### 3. Formulaire(s)
        ==> Utilisation des formulaires reactives
            * Notion de :
                ° Form Group
                ° Form Control
                ° Validators
                ...
        ==> Envoie des données à la base de données en ligne JSON 
            * pas de FULL back-end

#### 1. CRUD :
        * Generic Service
        
        ==> Model
            * Objet
            * Classe
            * Interface
        
        ==> Notion de service personnalisé
            * Héritage
            
        ==> Notion de HttpClient et HttpClientModule
        
        ==> JSON-SERVER
            * GET
            * POST
            * PUT
            * DELETE
            
        ==> Tableau Bootstrap et pagination
            
#### 4. Playlist [FUN] /!\modifiable/!\
        ==> Option temporaire
        ==> Remplacement par un sujet personel
        ==> ? a revenir ?

#### 5. Contact
        ==> Méthode de remplissage du CRUD
            * Personnalisé
            * Ne doit pas utiliser l'objet Reservation ou User

#### 6. A venir /!\ Optionel /!\

#### ERROR 404
        => Redirection à la page d'error 404 si url incorrect/incomplet



