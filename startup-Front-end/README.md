# StartupHub - Plateforme de découverte de startups

Une plateforme web permettant aux utilisateurs de découvrir des startups innovantes et aux entrepreneurs de présenter leurs projets.

## 🚀 Fonctionnalités

- 👥 Authentification complète (inscription, connexion)
- 📱 Interface responsive et moderne
- 🔍 Recherche et filtrage des startups
- ➕ Ajout et gestion de startups
- 🖼️ Upload de logos avec prévisualisation
- 📊 Tableau de bord utilisateur
- 👨‍💼 Profils investisseurs
- 💬 Messagerie interne
- 🔔 Système de notifications

## 🛠️ Technologies utilisées

- React 18
- TypeScript
- Vite
- React Router DOM
- Tailwind CSS
- Zustand (gestion d'état)
- Lucide React (icônes)

## 📋 Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn

## 🚀 Installation et démarrage

1. Clonez le dépôt :
\`\`\`bash
git clone <url-du-repo>
cd startup-platform
\`\`\`

2. Installez les dépendances :
\`\`\`bash
npm install
\`\`\`

3. Démarrez le serveur de développement :
\`\`\`bash
npm run dev
\`\`\`

L'application sera accessible à l'adresse \`http://localhost:3000\`

## 📁 Structure du projet

\`\`\`
src/
├── components/         # Composants réutilisables
│   ├── ui/            # Composants UI génériques
│   ├── forms/         # Formulaires
│   ├── layout/        # Composants de mise en page
│   └── startup/       # Composants liés aux startups
├── pages/             # Pages de l'application
├── hooks/             # Hooks personnalisés
├── store/             # État global (Zustand)
├── types/             # Types TypeScript
├── utils/             # Utilitaires
└── services/          # Services (API, etc.)
\`\`\`

## 🔧 Scripts disponibles

- \`npm run dev\` : Démarre le serveur de développement
- \`npm run build\` : Crée une version de production
- \`npm run preview\` : Prévisualise la version de production
- \`npm run lint\` : Vérifie le code avec ESLint

## 🔒 Authentification

L'authentification utilise :
- JWT pour la gestion des tokens
- Stockage sécurisé des mots de passe
- Sessions persistantes
- Protection des routes

## 📝 Gestion des startups

Les startups peuvent être :
- Ajoutées avec des informations détaillées
- Modifiées par leurs créateurs
- Supprimées (soft delete)
- Filtrées et recherchées
- Partagées sur les réseaux sociaux

## 👨‍💼 Profils investisseurs

Les investisseurs peuvent :
- Créer un profil détaillé
- Spécifier leurs préférences d'investissement
- Lister leurs réalisations
- Être contactés par les startups

## 🎨 UI/UX

- Design responsive avec Tailwind CSS
- Thème personnalisable
- Animations fluides
- Feedback utilisateur
- Messages d'erreur clairs

## 🔄 Gestion d'état

L'état global est géré avec Zustand :
- État d'authentification
- Données utilisateur
- Cache des startups
- Préférences utilisateur

## 🛣️ Routes principales

- \`/\` : Page d'accueil
- \`/login\` : Connexion
- \`/register\` : Inscription
- \`/dashboard\` : Tableau de bord
- \`/add-startup\` : Ajout d'une startup
- \`/investor\` : Profil investisseur
- \`/startup/:id\` : Détails d'une startup

## 🔜 Développements futurs

- [ ] Intégration de la messagerie en temps réel
- [ ] Système de notifications push
- [ ] Export des données en PDF
- [ ] Mode hors ligne
- [ ] Application mobile
- [ ] Internationalisation

## 🤝 Contribution

Les contributions sont les bienvenues ! Consultez notre guide de contribution pour plus de détails.

## 📄 Licence

MIT