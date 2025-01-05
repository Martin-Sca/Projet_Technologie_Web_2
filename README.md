# Liste des Pilotes de Formule 1 (2024)

## Description
Ce projet est une application web interactive permettant de consulter, ajouter et trier les pilotes participant à la saison 2024 de Formule 1. L'application est divisée en trois pages principales :

1. **Liste des pilotes** : Affiche tous les pilotes présents dans la base de données.
2. **Pilotes par écurie** : Regroupe les pilotes en fonction de leurs écuries.
3. **Historique des ajouts** : Affiche les pilotes ajoutés, avec le nom de l'utilisateur ayant effectué l'ajout ainsi que la date et l'heure.

---

## Fonctionnalités

1. **Ajout de pilotes** :
   - Permet à l'utilisateur d'ajouter un pilote non présent dans la liste.

2. **Tri par âge** :
   - Affiche les pilotes triés du plus jeune au plus âgé.

3. **Tri par victoires** :
   - Classe les pilotes en fonction de leur nombre de victoires.

---

## Technologies Utilisées

- **TypeScript** : Pour la logique et la gestion des données.
- **HTML/CSS** : Pour la structure et le style des pages web.
- **JSON** : Pour stocker les données des pilotes.
- **Jest** : Pour les tests unitaires.
- **Git/GitHub** : Pour la gestion des versions et le développement collaboratif.

---

## Installation

1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/votre-utilisateur/liste-pilotes-f1.git
   ```

2. Accédez au répertoire du projet :
   ```bash
   cd liste-pilotes-f1
   ```

3. Installez les dépendances :
   ```bash
   npm install
   ```

4. Compilez le projet TypeScript :
   ```bash
   npx tsc
   ```

5. Lancez le projet :
   ```bash
   npm start
   ```

6. Lancez les tests unitaires :
   ```bash
   npm test
   ```

---

## Structure du Projet

Voici la structure des fichiers du projet :

```
liste-pilotes-f1/
├── src/
│   ├── controllers/
│   │   └── PiloteController.ts
│   ├── data/
│   │   └── pilotes.json
│   ├── models/
│   │   └── Pilote.ts
│   ├── views/
│   │   ├── index.html
│   │   ├── ecuries.html
│   │   ├── historique.html
│   │   ├── styles.css
│   │   └── script.ts
├── tests/
│   └── PiloteController.test.ts
├── dist/
├── node_modules/
├── .gitignore
├── jest.config.js
├── package.json
├── package-lock.json
├── tsconfig.json
├── README.md
```

---

## Développement

### Ajouter un pilote
Pour ajouter un pilote :
1. Naviguez à la page principale.
2. Cliquez sur le bouton **Ajouter un pilote**.
3. Remplissez les informations et validez.

### Tri par âge ou victoires
Pour trier :
1. Cliquez sur le bouton correspondant (**Trier par âge** ou **Trier par victoires**).
2. La liste des pilotes sera mise à jour automatiquement.

---

## Tests

Ce projet inclut des tests unitaires pour valider les fonctionnalités principales.
Pour exécuter les tests :
```bash
npm test
```

---

## Auteur

Projet réalisé par **Martin Scarnière** dans le cadre du cours de Technologie Web 2.

