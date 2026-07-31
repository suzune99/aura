# AURA — Scope MVP

**Version :** 1.0  
**Date :** Août 2026  
**Objectif :** Définir précisément le périmètre de la V1 (MVP) pour éviter la dérive des fonctionnalités pendant les 6 semaines de développement.

---

## ✅ Fonctionnalités MVP (V1) — Semaines 1-6

*Ces fonctionnalités sont **indispensables** pour livrer un produit utilisable qui résout le problème principal.*

### 🔐 Authentification
- [ ] Inscription email + mot de passe
- [ ] Connexion/déconnexion
- [ ] Hashage sécurisé (bcrypt)
- [ ] Protection des routes avec middleware auth
- [ ] Gestion des tokens de session (Sanctum)

### 🎯 Onboarding (4 étapes)
- [ ] Étape 1 : Sélection des intérêts (langues, domaines d'apprentissage)
- [ ] Étape 2 : Définition de 1-3 objectifs long terme
- [ ] Étape 3 : Indication des défis actuels (attention, énergie, régulation — langage général)
- [ ] Étape 4 : Choix de la disponibilité quotidienne (30min / 1h / 2h)
- [ ] Stockage dans table `profiles` (champs jsonb)
- [ ] Redirection vers dashboard après complétion

### 📊 Daily Check-in
- [ ] Formulaire avec 5 sliders (échelle 1-10) :
  - Énergie
  - Stress
  - Sommeil
  - Focus
  - Motivation
- [ ] Note libre optionnelle (textarea)
- [ ] Empêcher le doublon le même jour (contrainte unique user_id + date)
- [ ] Temps de complétion < 30 secondes
- [ ] Endpoint POST `/checkins`

### 🧮 Calcul de capacité (règle v1)
- [ ] Fonction PHP pure `calculateCapacity()`
- [ ] Formule pondérée simple :
  - Moyenne énergie + motivation
  - Pénalités pour stress élevé et manque de sommeil
- [ ] Score affiché sur le dashboard (0-100%)
- [ ] Tests unitaires PHPUnit

### 📋 Adaptive Planner (Tâches)
- [ ] CRUD complet des tâches :
  - Titre
  - Difficulté (1-5)
  - Durée estimée
  - Importance
  - Catégorie
  - Énergie requise
  - Statut (à faire / fait / reporté)
- [ ] Filtrage adaptatif selon capacité :
  - Si capacité < 40% → montrer uniquement tâches difficulté ≤ 2
  - Liste "à éviter aujourd'hui" (tâches difficulté élevée)
- [ ] Marquer une tâche comme faite (→ mise à jour streak)
- [ ] Policy Laravel pour restreindre aux tâches de l'utilisateur

### 📈 Dashboard
- [ ] Composant "Capacité du jour" (cercle de progression)
- [ ] Section "Focus du jour" (3 tâches recommandées)
- [ ] Section "À éviter aujourd'hui"
- [ ] Widget Quick Journal (textarea court + bouton envoyer)
- [ ] Bloc statistiques semaine (4 cartes) :
  - Moyenne énergie
  - Moyenne sommeil
  - Moyenne focus
  - Streak actuel
- [ ] Navigation vers les autres pages
- [ ] Layout responsive (sidebar + navigation active)

### 📔 Journal
- [ ] 3 modes d'écriture :
  - **Quick** : textarea court (1-2 phrases)
  - **5 min** : textarea + timer visuel
  - **Libre** : textarea standard (pas de rich text au MVP)
- [ ] Historique consultable (liste ou accordéon)
- [ ] Pagination des entrées passées
- [ ] Endpoint GET `/journal` avec pagination

### 🧭 Layout & Navigation
- [ ] Layout partagé avec sidebar
- [ ] Navigation entre les pages (Dashboard, Planner, Journal, Learning Hub placeholder)
- [ ] Highlight de la page courante
- [ ] Pages placeholders pour les modules futurs (Learning Hub, Knowledge Hub, Projects, Insights)
- [ ] Responsive mobile-first

### 🗄️ Infrastructure technique
- [ ] Backend : Laravel 12 + PostgreSQL
- [ ] Frontend : Next.js 14 + TypeScript + Tailwind CSS + shadcn/ui
- [ ] Docker Compose local (PostgreSQL + Redis)
- [ ] Migrations Laravel pour toutes les tables
- [ ] CI/CD basique (GitHub Actions : lint + tests)
- [ ] `.env.example` pour frontend et backend

---

## 🕐 Fonctionnalités V2 — Post-MVP (Semaines 7-13)

*Important mais peut attendre 1-2 mois après le MVP.*

### 🎓 Learning Hub
- [ ] CRUD objectifs d'apprentissage (domaine, titre, progression, deadline)
- [ ] CRUD ressources (titre, lien, type)
- [ ] Barre de progression par domaine
- [ ] Vue détail d'un objectif

### 🗣️ Polyglot Center
- [ ] Gestion du vocabulaire (mot, traduction, langue, statut)
- [ ] Algorithme de répétition espacée (SM-2 simplifié)
- [ ] Flashcards pour révision du jour
- [ ] Nombre de cartes adapté à la capacité du jour
- [ ] Suivi visuel (4 barres : vocabulaire, grammaire, écoute, expression)

### 📚 Knowledge Hub
- [ ] CRUD notes (titre, contenu, dossier)
- [ ] Système de tags (table pivot)
- [ ] Recherche full-text PostgreSQL (tsvector + index GIN)
- [ ] Vue dossiers + liste de notes

###  Projects (Kanban)
- [ ] CRUD projets (titre, description, statut)
- [ ] Colonnes : Idée / Planning / Doing / Terminé / Parking Lot
- [ ] Drag-and-drop entre colonnes (dnd-kit)
- [ ] Sauvegarde automatique des changements

### 📉 Insights avancés
- [ ] Graphique énergie 7 derniers jours (Recharts LineChart)
- [ ] Requêtes de corrélation :
  - Sommeil vs productivité
  - Exercice vs humeur
- [ ] Heatmap des corrélations (nivo ou SVG custom)

---

## 💭 Fonctionnalités V3 — Futur lointain (Semaines 14-19+)

*"Nice to have", fonctionnalités bonus ou complexes.*

### 🤖 Intégration IA
- [ ] Setup API Groq / LLaMA 3
- [ ] Résumé automatique des entrées journal :
  - Extraction sentiment
  - Mots-clés
  - Triggers/declencheurs
- [ ] Format de sortie JSON strict
- [ ] Stockage dans colonne `ai_summary` (jsonb)
- [ ] Cache Redis pour éviter les appels API dupliqués

###  ML Microservice
- [ ] Microservice FastAPI (Python)
- [ ] Endpoint `/predict-capacity`
- [ ] Jeu de données d'entraînement (historique check-ins + réussite tâches)
- [ ] Modèle de régression logistique ou arbre de décision
- [ ] Comparaison ML vs règles simples
- [ ] Fallback si microservice indisponible

###  AI Coach conversationnel
- [ ] Panneau/widget "AI Coach" accessible depuis Dashboard
- [ ] Discussion contextuelle (accès historique check-ins, journal, progression)
- [ ] Génération de messages programmés (job quotidien) :
  - Alerte sommeil
  - Pattern répété détecté
  - Tâche trop dure suggérée
- [ ] Modèle de données `recommendations`
- [ ] Texte explicatif des corrélations via LLM

###  Recovery Toolkit
- [ ] Exercices de respiration guidée
- [ ] Techniques d'ancrage
- [ ] Rappels personnels personnalisables
- [ ] Accès rapide depuis le dashboard

### 🎨 Polish & Accessibilité
- [ ] Responsive design complet (mobile/tablette/desktop)
- [ ] Accessibilité WCAG AA (contrastes, labels ARIA, navigation clavier)
- [ ] Thème sombre/clair
- [ ] Animations et transitions fluides

### 🔧 Fonctionnalités avancées
- [ ] Multi-langue de l'interface (i18n)
- [ ] Intégrations externes :
  - Google Calendar
  - Notion
  - Todoist
- [ ] Gamification avancée :
  - Badges
  - Leaderboard (optionnel, anonyme)
  - Défis communautaires
- [ ] Notifications push
- [ ] Export des données (CSV, JSON)

### 🚀 Déploiement & Production
- [ ] Dockerisation complète (3 Dockerfiles : backend, frontend, microservice)
- [ ] Docker Compose production
- [ ] Config Nginx (reverse proxy)
- [ ] Pipeline CI/CD complet (build + tests + déploiement auto)
- [ ] Hébergement (Railway ou VPS Hetzner/DigitalOcean)
- [ ] Monitoring et logs

---

## 📋 Critères de validation MVP

Pour considérer le MVP comme **terminé**, tous ces critères doivent être remplis :

### ✅ Parcours utilisateur complet
- [ ] Inscription → Onboarding → Dashboard fonctionne bout en bout
- [ ] Check-in quotidien possible (1 seul par jour)
- [ ] Dashboard affiche la capacité calculée
- [ ] Tâches filtrées selon capacité
- [ ] Journal fonctionnel (au moins mode quick)
- [ ] Navigation fluide entre les pages

### ✅ Qualité technique
- [ ] Aucune donnée mockée restante
- [ ] Tests PHPUnit sur endpoints critiques (auth, check-in, tasks)
- [ ] CI/CD fonctionnelle (lint + tests sur chaque push)
- [ ] Documentation README à jour
- [ ] Variables d'environnement sécurisées (rien de sensible commité)

### ✅ Expérience utilisateur
- [ ] Temps de chargement < 2 secondes sur pages principales
- [ ] Formulaire check-in complétable en < 30 secondes
- [ ] Responsive basique fonctionnel (mobile usable)
- [ ] Messages d'erreur clairs et utiles
- [ ] Pas de bug bloquant le parcours principal

---

## 🚧 Fonctionnalités explicitement EXCLUES du MVP

*Ces éléments ne seront **pas développés** en V1, même partiellement.*

- ❌ AI Coach conversationnel (V3)
- ❌ Résumé IA des journaux (V3)
- ❌ Microservice ML de prédiction (V3)
- ❌ Heatmap de corrélations (V2)
- ❌ Learning Hub complet (V2)
- ❌ Polyglot Center avec SRS (V2)
- ❌ Knowledge Hub avec recherche full-text (V2)
-  Projects Kanban (V2)
-  Multi-langue interface (V3)
-  Intégrations externes (V3)
-  Gamification avancée (V3)
-  Recovery Toolkit (V3)

---

##  Notes importantes

### Règle des 3 jours
Si une fonctionnalité MVP prend **plus de 3 jours** de développement, elle doit être :
1. Réévaluée (est-elle vraiment indispensable ?)
2. Simplifiée au maximum
3. Ou déplacée en V2

### Philosophie MVP
> **"Juste assez bien, pas parfait"**

Le MVP doit être **utilisable quotidiennement** mais n'a pas besoin d'être parfait. L'objectif est de valider le concept auprès de vrais utilisateurs avant d'investir dans les fonctionnalités avancées.

### Gestion du scope creep
Toute nouvelle idée de fonctionnalité doit être :
1. Notée dans ce fichier (section V2 ou V3)
2. **Pas implémentée** avant la fin du MVP
3. Réévaluée lors de la revue post-MVP

---

## 🔄 Historique des modifications

| Version | Date | Modifications |
|---------|------|---------------|
| 1.0 | Août 2026 | Version initiale basée sur la Phase 0 |

---

**Prochaine revue :** Après la Phase 3 (fin Semaine 10) pour valider le MVP et planifier la V2.