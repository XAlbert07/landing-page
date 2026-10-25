# ConcoursElite — Landing page

Page d'accueil vitrine pour **ConcoursElite**, un concept de plateforme de préparation aux concours de la fonction publique au Burkina Faso.

Le projet présente l'offre de préparation, la méthode, les concours, les tarifs et les appels à l'inscription dans une interface responsive.

## Démo

Le dépôt est associé à une adresse de déploiement dans les paramètres GitHub :

**[Ouvrir ConcoursElite](https://landing-page-delta-five-51.vercel.app/)**

Si le lien ne s'ouvre pas, vérifie l'état du déploiement Vercel associé à ce dépôt. Le code de ce dépôt contient le frontend statique ; la présence d'un bouton ou d'une section d'inscription ne signifie pas qu'un backend de gestion des inscriptions est connecté.

## Aperçu des fonctionnalités

- Navigation responsive avec menu mobile.
- Sections de présentation : formations, méthode, concours, tarifs et inscription.
- Défilement fluide vers les sections depuis les liens et boutons d'appel à l'action.
- En-tête qui adapte son apparence au défilement.
- Mise en page construite avec Tailwind CSS et styles personnalisés.
- Icônes Lucide et typographies Google Fonts.

## Technologies

- HTML5
- Tailwind CSS 3
- CSS
- JavaScript natif
- Lucide
- Google Fonts

## Structure du projet

```text
.
├── index.html             # Page principale
├── css/
│   └── styles.css         # Feuille source Tailwind et styles
├── dist/
│   └── styles.css         # CSS généré utilisé par index.html
├── js/
│   └── main.js            # Menu mobile, navigation et effets au scroll
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── package-lock.json
```

## Prérequis

- Node.js et npm
- Python 3, ou un autre serveur HTTP statique pour afficher le site localement

## Installation et lancement

À la racine du dépôt :

```bash
npm install
npm run build
python3 -m http.server 5500
```

Ouvrir ensuite [http://localhost:5500](http://localhost:5500).

Le serveur Python sert les fichiers statiques ; il n'exécute pas de backend applicatif.

## Développement du CSS

Pour reconstruire la feuille CSS après une modification de `css/styles.css` :

```bash
npm run build
```

Pour surveiller les changements pendant le développement :

```bash
npm run watch
```

Le fichier généré est écrit dans `dist/styles.css`, qui est référencé par `index.html`.

## Personnalisation

- Contenu et sections : `index.html`
- Interactions et navigation : `js/main.js`
- Styles et directives Tailwind : `css/styles.css`
- Couleurs et polices Tailwind : `tailwind.config.js`

## État du projet

Il s'agit d'une landing page frontend. Avant de l'utiliser pour recueillir de véritables inscriptions ou paiements, il faut vérifier et, si nécessaire, connecter les formulaires et appels à l'action à un service backend adapté.
