# Movies Webapp (Angular)
Ceci est une application monopage moderne en **Angular 18** construite avec des composants standalone. Elle est conçue pour être un consommateur robuste et de qualité professionnelle pour l'API Movies, démontrant une intégration transparente entre un frontend Angular et un backend API REST .NET avec authentification JWT.

> **Note:** Ce dépôt public est une version finalisée du projet destinée à mon portfolio. Le développement et les pipelines CI/CD vers Azure sont gérés via un dépôt privé, ce qui explique l'historique simplifié des commits ici.


## 📌 Table des matières
- [Movies Webapp (Angular)](#movies-webapp-angular)
  - [📌 Table des matières](#-table-des-matières)
  - [🚀 Demo Live](#-demo-live)
  - [🛠️ Stack technique](#️-stack-technique)
  - [✨ Fonctionnalités clés](#-fonctionnalités-clés)
  - [🏛️ Architecture \& Philosophie](#️-architecture--philosophie)
  - [⚙️ Configuration de l'environnement](#️-configuration-de-lenvironnement)
  - [🚀 Déploiement](#-déploiement)
  - [⚙️ Installation \& Configuration locale](#️-installation--configuration-locale)


## 🚀 Demo Live
**[👉 Visitez Movies Webapp (Angular)](https://brave-forest-0e7abf903.1.azurestaticapps.net)**


## 🛠️ Stack technique
- **Frontend**: Angular 18 avec architecture de composants standalone.
- **Outil de build**: Angular CLI pour le développement et les builds de production optimisés.
- **Routage**: Angular Router pour la navigation côté client et le routage dynamique.
- **UI/UX**: Bootstrap 5 pour un design responsive et des interfaces data-centric cohérentes.
- **Gestion d’état**: RxJS Observables et gestion d'état basée sur les services.
- **Communication**: Intégration API REST utilisant Angular HttpClient avec gestion centralisée des tokens JWT.
- **DevOps**: GitHub Actions pour les pipelines CI/CD automatisés et le déploiement continu.


## ✨ Fonctionnalités clés
- **Composants Standalone**: Architecture Angular moderne avec composants modulaires et réutilisables.
- **Gestion d'état**: Gestion centralisée des tokens JWT et gestion de session à travers l'application.
- **Design Responsive**: Approche mobile-first utilisant Bootstrap 5 pour un rendu cohérent sur tous les appareils.
- **Communication API asynchrone**: Implémentation propre d'HttpClient avec RxJS Observables et gestion d'erreur centralisée.
- **Routing côté client**: Navigation rapide sans rechargement de page grâce à Angular Router.
- **CI/CD automatisé**: Workflow de déploiement en direct assurant que le site est mis à jour via GitHub Actions.


## 🏛️ Architecture & Philosophie
- **Frontend**: Construit avec des composants standalone Angular 18, mettant l'accent sur la modularité et la sécurité des types.
- **Structure des composants**:
  - `components/` - Composants UI réutilisables (Navbar, Footer, Formulaires, Alertes)
  - `pages/` - Composants de page spécifiques aux routes
  - `services/` - Couche de communication API avec logique HttpClient centralisée
  - `utils/` - Fonctions helper et utilitaires
  - `models/` - Interfaces TypeScript pour la sécurité des types
**Communication**: Consomme les services REST via Angular HttpClient avec injection automatique de JWT.
**UI/UX**: Suit les modèles de design Bootstrap 5 pour une interface propre, professionnelle et accessible.


## ⚙️ Configuration de l'environnement
L'application détecte automatiquement l'environnement d'hébergement et configure les endpoints API en conséquence :
- **Development (localhost)**: Pointe vers `https://localhost:XXX/api/v2`
- **Production**: Pointe vers `https://moviesapi-rd.azurewebsites.net/api/v2`
La configuration est gérée dans `src/app/services/token.ts` via la détection du nom d'hôte.


## 🚀 Déploiement
- **Plateforme**: Hébergé sur **Azure Static Web Application (Windows/Linux)**.
- **CI/CD**: Déploiement entièrement automatisé via **GitHub Actions** (déclenché au push) pour une intégration transparente.
- **CORS Configuration**: L'API backend est configurée pour autoriser les requêtes depuis le domaine frontend.


## ⚙️ Installation & Configuration locale
**Prerequisites**: Node.js 18+, npm/yarn, et  Angular CLI.

1. **Installer Angular CLI globalement (si pas déjà installé)**
  ```bash
  npm install -g @angular/cli
  ```
  
2. **Cloner le dépôt**
  ```bash
  git clone https://github.com/RolandDoyen/MoviesAngularPublic.git
  ```

3. **Installer les dépendances**
  ```bash
   npm install
  ```
  
4. **Configurer l'endpoint API**
   - L'application bascule automatiquement vers `localhost:XXX` lors de la détection d'un environnement local dans `token.ts`.
   - Assurez-vous que votre API Movies fonctionne à l'adresse spécifiée dans `src/app/services/token.ts`.
  
5. **Lancer le serveur de développement**
  ```bash
  ng serve
  ```

6. **Build pour la production**
  ```bash
  ng build
  ```

7. **Prévisualiser le build de production**
  ```bash
  ng serve --configuration production
  ```