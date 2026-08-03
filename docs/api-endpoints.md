# API Endpoints AURA

## 🔐 Authentification
- `POST /api/register` : Créer un compte (email, password, name)
- `POST /api/login` : Se connecter (email, password)
- `POST /api/logout` : Se déconnecter
- `GET /api/user` : Récupérer son profil utilisateur connecté

## 🎯 Onboarding
- `POST /api/onboarding` : Soumettre le profil initial (interests, goals, challenges, availability)

##  Daily Check-in
- `POST /api/checkins` : Créer le check-in du jour (energy, stress, sleep, focus, motivation, note)
- `GET /api/checkins/today` : Récupérer le check-in du jour (pour éviter les doublons)

## 📋 Tâches (Adaptive Planner)
- `GET /api/tasks` : Liste des tâches de l'utilisateur (avec filtres : category, status, difficulty)
- `POST /api/tasks` : Créer une nouvelle tâche
- `PUT /api/tasks/{id}` : Modifier une tâche
- `PATCH /api/tasks/{id}/complete` : Marquer une tâche comme faite (update status + streak)
- `DELETE /api/tasks/{id}` : Supprimer une tâche

## 📔 Journal
- `GET /api/journal` : Liste paginée des entrées du journal
- `POST /api/journal` : Créer une nouvelle entrée (content, mode)

## 🏠 Dashboard (Données agrégées)
- `GET /api/dashboard` : Récupérer toutes les données du dashboard en une seule requête (capacité du jour, tâches focus, tâches à éviter, stats semaine)
  