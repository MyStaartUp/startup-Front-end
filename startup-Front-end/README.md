# StartupHub - Plateforme de découverte de startups

StartupHub est une plateforme web permettant aux utilisateurs de découvrir des startups innovantes et aux entrepreneurs de présenter leurs projets.

## 🚀 Fonctionnalités

- 👥 Authentification complète (inscription, connexion)
- 📱 Interface responsive et moderne
- 🔍 Recherche et filtrage des startups
- ➕ Ajout et gestion de startups
- 🖼️ Upload de logos avec prévisualisation
- 📊 Tableau de bord utilisateur

## 🛠️ Technologies utilisées

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Zustand (gestion d'état)
- Lucide React (icônes)

## 📋 Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn

## 🚀 Installation et démarrage

1. Clonez le dépôt :
```bash
git clone <url-du-repo>
cd startup-platform
```

2. Installez les dépendances :
```bash
npm install
```

3. Démarrez le serveur de développement :
```bash
npm run dev
```

L'application sera accessible à l'adresse `http://localhost:5173`

## 📁 Structure du projet

```
src/
├── components/         # Composants réutilisables
│   ├── ui/            # Composants UI génériques
│   ├── Layout.tsx     # Layout principal
│   └── Navbar.tsx     # Barre de navigation
├── pages/             # Pages de l'application
│   ├── Home.tsx       # Page d'accueil
│   ├── Login.tsx      # Page de connexion
│   ├── Register.tsx   # Page d'inscription
│   ├── Dashboard.tsx  # Tableau de bord
│   └── AddStartup.tsx # Ajout de startup
├── store/             # État global (Zustand)
├── types/             # Types TypeScript
├── main.tsx          # Point d'entrée
└── App.tsx           # Composant racine
```

## 🔧 Scripts disponibles

- `npm run dev` : Démarre le serveur de développement
- `npm run build` : Crée une version de production
- `npm run preview` : Prévisualise la version de production
- `npm run lint` : Vérifie le code avec ESLint

## 🔒 Authentification

L'authentification est actuellement simulée avec un store local. Dans une version production, il faudrait :
- Implémenter une vraie API backend
- Ajouter la validation JWT
- Sécuriser les routes protégées
- Gérer la persistance des sessions

## 📝 Gestion des startups

Les startups peuvent être :
- Ajoutées avec des informations détaillées
- Catégorisées (Tech, Santé, Éducation, etc.)
- Filtrées et recherchées
- Gérées depuis le tableau de bord

## 🎨 UI/UX

- Design responsive avec Tailwind CSS
- Composants réutilisables (Button, Input)
- Feedback utilisateur (loading states, messages d'erreur)
- Interface intuitive et moderne

## 🔄 État de l'application

L'état global est géré avec Zustand, stockant :
- L'état d'authentification
- Les informations utilisateur
- Les données de session

## 🛣️ Routes

- `/` : Page d'accueil
- `/login` : Connexion
- `/register` : Inscription
- `/dashboard` : Tableau de bord utilisateur
- `/add-startup` : Ajout d'une startup

## 🔜 Améliorations futures

- [ ] Intégration backend
- [ ] Système de commentaires
- [ ] Notifications en temps réel
- [ ] Système de likes/follows
- [ ] Export des données
- [ ] Mode sombre
- [ ] Internationalisation

## 📄 Licence

MIT